import "package:flutter/material.dart";

import 'package:flutter/material.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatModel.dart';
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
                  hintText: "Offre d'emplois postultés",
                  hintStyle: TextStyle(fontSize: 14),
                ),
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
                                      store: widget.store,
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
