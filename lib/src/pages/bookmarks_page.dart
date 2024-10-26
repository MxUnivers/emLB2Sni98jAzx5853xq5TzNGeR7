import "package:flutter/material.dart";

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/CategoryJobHome.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/JobListHome.dart';
import 'package:redux/redux.dart';

import '../../main.dart';
import '../model/JobModel.dart';
import '../widgets/JobComponent.dart';
import '../widgets/home/AppBarHome.dart';

class JobBookmarkPage extends StatefulWidget {
  final Store<AppState> store;
  JobBookmarkPage({Key? key, this.title, required this.store})
      : super(key: key);

  final String? title;

  @override
  _JobBookmarkPageState createState() => _JobBookmarkPageState();
}

class _JobBookmarkPageState extends State<JobBookmarkPage> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  List<JobModel> jobList = [
    JobModel(
        coverPicture:
            "https://upload.wikimedia.org/wikipedia/fr/1/1c/Logo_SGBCI_2014.png",
        title: "Senior developpeur",
        addresse: "Abidjan",
        dateNow: "30/08/2023",
        is_favorite: true,
        areaOffre: "Informatique",
        typeContrat: "freelance",
        description:
            "En tant que Développeur Front-End au sein de notre équipe, vous serez responsable de la création et de la mise en œuvre d'interfaces utilisateur attrayantes et fonctionnelles pour nos applications web. Vous travaillerez en étroite collaboration avec les concepteurs, les développeurs back-end et les chefs de projet pour garantir que nos produits offrent une expérience utilisateur exceptionnelle."),
  ];

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
              child: Text("Offre enregistrés ",
                  style:
                      GoogleFonts.nunito(color: AppTheme_App.withGreyOrginal))),
        ),
        body: Container(
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
                      child:
                          // listes des offre
                          Container(
                    height: MediaQuery.of(context).size.height,
                    margin: EdgeInsets.only(top: 5),
                    child: SingleChildScrollView(
                      scrollDirection: Axis.vertical,
                      child: Column(
                        children: [
                          Container(
                            padding: EdgeInsets.symmetric(horizontal: 3),
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
                        ],
                      ),
                    ),
                  )),
                ),
              ),
            ],
          ),
        ),
      )
    ]);
  }
}
