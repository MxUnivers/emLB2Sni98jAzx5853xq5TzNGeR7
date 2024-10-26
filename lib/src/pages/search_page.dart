import "package:flutter/material.dart";

import 'package:flutter/material.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/store/reducers.dart';
import 'package:jouman_mobile_mobile/src/utils/baseurl.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/CategoryJobHome.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/JobListHome.dart';
import 'package:redux/redux.dart';

import '../../main.dart';
import '../actions/JobAction.dart';
import '../model/JobModel.dart';
import '../widgets/JobComponent.dart';
import '../widgets/home/AppBarHome.dart';

class SearchPage extends StatefulWidget {
  SearchPage({Key? key, this.title}) : super(key: key);

  final String? title;

  @override
  _SearchPageState createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
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
    fetchAllJobList(
      "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres",
    ).then((jobs) {
      setState(() {
        // Mettre à jour la liste des offres récupérées
        jobList = jobs;
        print(jobList);
      });
    }).then((s) {
      setState(() {
        isLoading = false;
      });
    });
  }

  bool isLoading = true;

  List<JobModel> jobList = [];

  @override
  Widget build(BuildContext context) {
    return PageView(physics: NeverScrollableScrollPhysics(), children: [
      Scaffold(
        backgroundColor: AppTheme_App.withPrimary,
        appBar: AppBar(
          backgroundColor: AppTheme_App.withPrimary,
          elevation: 0.5,
          leadingWidth: 40,
          leading: BackButton(
            color: AppTheme_App.withGreyOrginal,
          ),
          title: Container(
            height: 45,
            child: TextField(
              cursorColor: Colors.grey,
              decoration: InputDecoration(
                contentPadding:
                    EdgeInsets.symmetric(horizontal: 20, vertical: 0),
                filled: true,
                fillColor: Colors.grey.shade200,
                prefixIcon: Icon(Icons.search, color: Colors.grey),
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(50),
                    borderSide: BorderSide.none),
                hintText: "recherche emplois",
                hintStyle: TextStyle(fontSize: 14),
              ),
            ),
          ),
        ),
        body: isLoading
            ? Center(
                child: CircularProgressIndicator(), // Indicateur de chargement
              )
            : Container(
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
              ),
      )
    ]);
  }
}
