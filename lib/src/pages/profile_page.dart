import "package:flutter/material.dart";

import "package:flutter/cupertino.dart";
import "package:google_fonts/google_fonts.dart";
import "package:google_fonts/google_fonts.dart";
import "package:jouman_mobile_mobile/src/actions/CandidatAction.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:jouman_mobile_mobile/src/model/CandidatModel.dart";
import "package:jouman_mobile_mobile/src/utils/storage.dart";

import "../themes/constants.dart";
import "../themes/theme.dart";
import "dart:async";

import "../widgets/profile_compte.dart";

class ProfilePage extends StatefulWidget {
  @override
  _ProfilePageState createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
    SharedPreferencesService.getCandidatDataFromSharedPreferences()
        .then((candi) {
      setState(() {
        candidat = candi;
        CandidatGetProfile(context, candidat.id.toString()).then((value) {
          candidatDetail = value;
        });
        isLoading = false;
      });
    });
  }

  bool isLoading = true;
  late CandidatModel candidat = CandidatModel();
  late CandidatModel candidatDetail = CandidatModel();

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  int counter = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: AppTheme_App.withPrimary,
          leading: BackButton(
            color: AppTheme_App.TextGray,
          ),
          elevation: 0.2,
          actions: [
            IconButton(
              onPressed: () {},
              icon: Icon(Icons.settings),
              color: AppTheme_App.secondary,
            )
          ],
        ),
        body: Container(
          decoration: BoxDecoration(color: AppTheme_App.withPrimary),
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.width,
          child: DefaultTabController(
            length: 3,
            child: Column(
              children: [
                Container(
                  decoration: BoxDecoration(color: AppTheme_App.withPrimary),
                  child: Column(
                    children: [
                      Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Container(
                              width: MediaQuery.of(context).size.width,
                              child: Card(
                                  elevation: 0.1,
                                  child: CircleAvatar(
                                    radius: 50,
                                    backgroundImage: NetworkImage(
                                        "https://res.cloudinary.com/dt6ammifo/image/upload/v1697641010/kdnhjuh1wywnevo9huy8.png"),
                                  )),
                            )
                          ]),

                      // Container Button
                      Container(
                        child: Column(
                          children: [
                            SizedBox(height: 5),
                            Container(
                              child: Text(
                                "Nom complet",
                                style: GoogleFonts.nunito(
                                    color: AppTheme_App.TextGray, fontSize: 20),
                              ),
                            ),
                            SizedBox(height: 5),
                            Container(
                              child: Text("Email@gmail.com",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.TextGray,
                                      fontSize: 12)),
                            ),
                            SizedBox(height: 10),
                            Container(
                                child: Container(
                              width: 150,
                              height: 35,
                              decoration: BoxDecoration(
                                color: AppTheme_App.primaryColor,
                                borderRadius: BorderRadius.circular(18),
                              ),
                              child: MaterialButton(
                                onPressed: () {},
                                child: Container(
                                  child: Row(
                                    children: [
                                      Icon(
                                        Icons.edit_note,
                                        color: AppTheme_App.withPrimary,
                                      ),
                                      SizedBox(width: 5),
                                      Text(
                                        "Mise à jour",
                                        style: kButtonText.copyWith(
                                            color: AppTheme_App.withPrimary),
                                      )
                                    ],
                                  ),
                                ),
                              ),
                            ))
                          ],
                        ),
                      )
                    ],
                  ),
                ),
                Divider(),
                TabBar(
                  controller: _tabController,
                  tabs: [
                    Tab(text: "Compte"),
                    Tab(text: "Compétences"),
                    Tab(text: "Sociaux"),
                  ],
                ),
                // Ajoutez TabBarView pour afficher le contenu de chaque onglet
                Expanded(
                  child: TabBarView(
                    controller: _tabController,
                    children: [
                      // Onglet 1 - Compte
                      Container(
                        child: isLoading
                            ? Center(child: CircularProgressIndicator())
                            : candidatDetail.id == ""
                                ? ProfileCompte(
                                    candidat: candidatDetail,
                                  )
                                : Center(
                                    child: Container(
                                      child: Text(
                                        "Profile vide",
                                      ),
                                    ),
                                  ),
                      ),
                      // Onglet 2 - Compétences
                      Container(
                        child: Text("Contenu de l'onglet Compétences"),
                      ),
                      // Onglet 3 - Sociaux
                      Container(
                        child: Text("Contenu de l'onglet Sociaux"),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ));
  }

  Widget buildCompteView() {
    return Container(
      child: Text("Contenu de l'onglet Compte"),
    );
  }

  Widget buildCompetencesView() {
    return Container(
      child: Text("Contenu de l'onglet Compétences"),
    );
  }

  Widget buildSociauxView() {
    return Container(
      child: Text("Contenu de l'onglet Sociaux"),
    );
  }

  void _afficherFeuilleModale(BuildContext context) {
    showModalBottomSheet(
      backgroundColor: Colors.transparent,
      context: context,
      builder: (BuildContext context) {
        return Container(
          decoration: BoxDecoration(
              color: AppTheme_App.withPrimary,
              borderRadius: BorderRadius.only(
                  topRight: Radius.circular(20), topLeft: Radius.circular(20))),
          height: 500, // Ajustez la hauteur selon vos besoins
          child: Column(
            children: [
              // Contenu de votre feuille modale ici
              ListTile(
                leading: Icon(Icons.share),
                title: Text('Partager'),
                onTap: () {
                  // Action à effectuer lorsque l'élément est tapé
                  Navigator.pop(context); // Fermer la feuille modale
                },
              ),
              ListTile(
                leading: Icon(Icons.delete),
                title: Text('Supprimer'),
                onTap: () {
                  // Action à effectuer lorsque l'élément est tapé
                  Navigator.pop(context); // Fermer la feuille modale
                },
              ),
            ],
          ),
        );
      },
    );
  }
}

/**/
