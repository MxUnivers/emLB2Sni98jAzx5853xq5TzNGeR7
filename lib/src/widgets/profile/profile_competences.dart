import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:jouman/src/config/theme.dart";
import "package:jouman/src/model/CandidatModel.dart";

class ProfileCompetences extends StatefulWidget {
  final CandidatModel? candidat;
  const ProfileCompetences({Key? key, this.candidat}) : super(key: key);

  @override
  State<ProfileCompetences> createState() => _ProfileCompetencesState();
}

class _ProfileCompetencesState extends State<ProfileCompetences> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.only(bottom: 50, top: 20),
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      child: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 10),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // competénces
              Container(
                child: Card(
                  elevation: 0.5,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        child: Text(
                          "Compétences : ",
                          style: GoogleFonts.nunito(),
                        ),
                      ),
                      SizedBox(height: 10),
                      Container(
                          child: SingleChildScrollView(
                              scrollDirection: Axis.horizontal,
                              child: Row(
                                  children:
                                      widget.candidat!.competences!.map((item) {
                                return Container(
                                  margin: EdgeInsets.symmetric(
                                      horizontal: 3, vertical: 2),
                                  padding: EdgeInsets.symmetric(
                                      horizontal: 5, vertical: 4),
                                  decoration: BoxDecoration(
                                      color: AppTheme_App.secondary),
                                  child: Text(
                                    "${item.label}",
                                    style: GoogleFonts.nunito(
                                        color: AppTheme_App.withPrimary),
                                  ),
                                );
                              }).toList())))
                    ],
                  ),
                ),
              ),

              // Langues
              Container(
                width: MediaQuery.of(context).size.width,
                child: Card(
                  elevation: 0.5,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        child: Text(
                          "Langues : ",
                          style: GoogleFonts.nunito(),
                        ),
                      ),
                      SizedBox(height: 10),
                      widget.candidat!.langues!.length > 0
                          ? Container(
                              child: SingleChildScrollView(
                                  scrollDirection: Axis.horizontal,
                                  child: Row(
                                      children:
                                          widget.candidat!.langues!.map((item) {
                                    return Container(
                                      margin: EdgeInsets.symmetric(
                                          horizontal: 3, vertical: 2),
                                      padding: EdgeInsets.symmetric(
                                          horizontal: 5, vertical: 4),
                                      decoration: BoxDecoration(
                                          color: AppTheme_App.secondary),
                                      child: Text(
                                        "${item.label}",
                                        style: GoogleFonts.nunito(
                                            color: AppTheme_App.withPrimary),
                                      ),
                                    );
                                  }).toList())))
                          : Container(
                              child: Text("Aucunes langues"),
                            )
                    ],
                  ),
                ),
              ),

              Container(
                width: MediaQuery.of(context).size.width,
                child: Card(
                  elevation: 0.5,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        child: Text(
                          "Niveau d'etude : ",
                          style: GoogleFonts.nunito(),
                        ),
                      ),
                      SizedBox(height: 10),
                      widget.candidat!.levelSchool.toString().length > 0
                          ? Container(
                              child: SingleChildScrollView(
                                  child: Row(children: [
                              Container(
                                margin: EdgeInsets.symmetric(
                                    horizontal: 3, vertical: 2),
                                padding: EdgeInsets.symmetric(
                                    horizontal: 5, vertical: 4),
                                decoration: BoxDecoration(
                                    color: AppTheme_App.secondary),
                                child: Text(
                                  "${widget.candidat?.levelSchool.toString()}",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.withPrimary),
                                ),
                              )
                            ])))
                          : Container(
                              child: Text("Vide"),
                            )
                    ],
                  ),
                ),
              ),

              Container(
                width: MediaQuery.of(context).size.width,
                child: Card(
                  elevation: 0.5,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        child: Text(
                          "Année d'expérience : ",
                          style: GoogleFonts.nunito(),
                        ),
                      ),
                      SizedBox(height: 10),
                      widget.candidat!.yearsExperience.toString().length > 0
                          ? Container(
                              child: SingleChildScrollView(
                                  child: Row(children: [
                              Container(
                                margin: EdgeInsets.symmetric(
                                    horizontal: 3, vertical: 2),
                                padding: EdgeInsets.symmetric(
                                    horizontal: 5, vertical: 4),
                                decoration: BoxDecoration(
                                    color: AppTheme_App.secondary),
                                child: Text(
                                  "${widget.candidat?.yearsExperience.toString()}",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.withPrimary),
                                ),
                              )
                            ])))
                          : Container(
                              child: Text("Vide"),
                            )
                    ],
                  ),
                ),
              ),

              // Salaire persu
              Container(
                width: MediaQuery.of(context).size.width,
                child: Card(
                  elevation: 0.5,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        child: Text(
                          "Salaire percus : ",
                          style: GoogleFonts.nunito(),
                        ),
                      ),
                      SizedBox(height: 10),
                      widget.candidat!.yearsExperience.toString().length > 0
                          ? Container(
                              child: SingleChildScrollView(
                                  child: Row(children: [
                              Container(
                                margin: EdgeInsets.symmetric(
                                    horizontal: 3, vertical: 2),
                                padding: EdgeInsets.symmetric(
                                    horizontal: 5, vertical: 4),
                                decoration: BoxDecoration(
                                    color: AppTheme_App.secondary),
                                child: Text(
                                  "${widget.candidat?.yearsExperience.toString()}",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.withPrimary),
                                ),
                              )
                            ])))
                          : Container(
                              child: Text("Vide"),
                            )
                    ],
                  ),
                ),
              ),

              Container(
                width: MediaQuery.of(context).size.width,
                child: Card(
                  elevation: 0.5,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        child: Text(
                          "Description sur vous  : ",
                          style: GoogleFonts.nunito(),
                        ),
                      ),
                      SizedBox(height: 10),
                      widget.candidat!.description.toString().length > 0
                          ? Container(
                              child: Row(children: [
                              Container(
                                margin: EdgeInsets.symmetric(
                                    horizontal: 3, vertical: 2),
                                padding: EdgeInsets.symmetric(
                                    horizontal: 5, vertical: 4),
                                decoration: BoxDecoration(
                                    color: AppTheme_App.withPrimary),
                                child: Text(
                                  "${widget.candidat?.description.toString()}",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.TextGray),
                                ),
                              )
                            ]))
                          : Container(
                              child: Text("Description vide"),
                            )
                    ],
                  ),
                ),
              ),

              //Salaire percus
              // Description sur le profile
            ],
          ),
        ),
      ),
    );
  }
}
