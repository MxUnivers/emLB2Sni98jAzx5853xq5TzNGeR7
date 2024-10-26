import "package:flutter/material.dart";

import 'package:flutter/material.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatModel.dart';
import 'package:jouman_mobile_mobile/src/store/reducers.dart';
import 'package:jouman_mobile_mobile/src/utils/baseurl.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/CategoryJobHome.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/JobListHome.dart';
import 'package:redux/redux.dart';

import '../../main.dart';
import '../actions/JobAction.dart';
import '../model/JobModel.dart';
import '../utils/storage.dart';
import '../widgets/JobComponent.dart';
import '../widgets/home/AppBarHome.dart';

class OffrePostulesPage extends StatefulWidget {
  late final Store<AppState> store;
  OffrePostulesPage({Key? key, this.title}) : super(key: key);

  final String? title;

  @override
  _OffrePostulesPageState createState() => _OffrePostulesPageState();
}

class _OffrePostulesPageState extends State<OffrePostulesPage> {
  late final Store<AppState> store = Store<AppState>(
    combineReducers<AppState>([
      (state, action) => AppState(
          jobs: jobListReducer(state.jobs, action),
          jobCategorys: jobCategoryListReducer(state.jobCategorys, action),
          candidats: candidatListReducer(state.candidats, action),
          candidat: candidatReducer(state.candidat, action),
          job: jobReducer(state.job, action),
          messages: [],
          posts: postListReducer(state.posts, action),
          candidatures: candidatureListReducer(state.candidatures, action)),
    ]),
    initialState: AppState.initialState(),
  );

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    SharedPreferencesService.getCandidatDataFromSharedPreferences()
        .then((candidat) {
      setState(() {
        this.candidat = candidat;
      });
      fetchAllJobList(
        "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres",
      ).then((jobs) {
        setState(() {
          // Mettre à jour la liste des offres récupérées
          jobList = jobs
              .where(
                  (model) => model.candidats!.contains(candidat!.id.toString()))
              .toList();
          print(jobList);
        });
      }).then((s) {
        setState(() {
          isLoading = false;
        });
      });
    });
  }

  late CandidatModel candidat;
  bool isLoading = true;

  List<JobModel> jobList = [];

  @override
  Widget build(BuildContext context) {
    return PageView(physics: NeverScrollableScrollPhysics(), children: [
      Scaffold(
          backgroundColor: AppTheme_App.withPrimary,
          appBar: AppBar(
            backgroundColor: Colors.transparent,
            elevation: 0,
            centerTitle: true,
            title: Text(
              "Offres postulés",
              style: TextStyle(
                color: Colors.black,
              ),
            ),
            leading: GestureDetector(
              onTap: () {
                Navigator.pop(context);
              },
              child: Icon(
                Icons.arrow_back_ios,
                size: 20,
                color: Colors.black,
              ),
            ),
          ),
          body: isLoading
              ? Center(
                  child:
                      CircularProgressIndicator(), // Indicateur de chargement
                )
              : jobList.length > 0
                  ? Container(
                      padding: EdgeInsets.only(top: 10, left: 5, right: 5),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          SizedBox(
                            height: 10,
                          ),
                          Expanded(
                            child: SingleChildScrollView(
                              scrollDirection: Axis.vertical,
                              child: Container(
                                child: ListView.builder(
                                  shrinkWrap: true,
                                  physics: NeverScrollableScrollPhysics(),
                                  itemCount: jobList.length,
                                  itemBuilder: (context, index) {
                                    var item = jobList[index];
                                    return JobComponent(
                                      job: item,
                                    );
                                  },
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    )
                  : Center(child: Text("Aucune offres postulés")))
    ]);
  }
}
