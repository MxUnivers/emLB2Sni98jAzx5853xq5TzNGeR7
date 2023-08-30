import "package:flutter/material.dart";

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:offre_emplois_mobile_candidat/src/config/theme.dart';
import 'package:offre_emplois_mobile_candidat/src/widgets/home/CategoryJobHome.dart';
import 'package:offre_emplois_mobile_candidat/src/widgets/home/JobListHome.dart';

import '../model/JobModel.dart';
import '../widgets/JobComponent.dart';
import '../widgets/home/AppBarHome.dart';

class SearchCategoryJobPage extends StatefulWidget {
  final String? title;
  SearchCategoryJobPage({Key? key, this.title}) : super(key: key);


  @override
  _SearchCategoryJobPageState createState() => _SearchCategoryJobPageState();
}

class _SearchCategoryJobPageState extends State<SearchCategoryJobPage> {
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
        is_favorite: false,
        areaOffre: "Informatique",
        experience: "1-2",
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
        body: Container(
          padding: EdgeInsets.only(top: 10, left: 5, right: 5),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              // areOffre title

              Container(
                  child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                    Container(
                      padding: EdgeInsets.symmetric(horizontal: 10),
                      child: Text(
                        "${widget.title}",
                        style: GoogleFonts.nunito(
                            fontSize: 20,
                            fontWeight: FontWeight.w800,
                            color: AppTheme_App.withGreyOrginal),
                      ),
                    )
                  ])),

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
                                return JobComponent(job: item);
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
