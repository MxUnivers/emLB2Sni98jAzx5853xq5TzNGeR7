import "package:flutter/material.dart";
import "package:flutter/services.dart";
import "package:google_fonts/google_fonts.dart";
import "package:jouman_mobile_mobile/src/actions/CandidatAction.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:jouman_mobile_mobile/src/model/CandidatModel.dart";
import "package:jouman_mobile_mobile/src/utils/storage.dart";

import "../model/FormationModel.dart";
import "../model/LanugesFormations.dart";
import "../model/LevelSchoolModelList.dart";
import "../model/PaysModel.dart";
import "../model/SalireModel.dart";

class ProfileEditPage extends StatefulWidget {
  final CandidatModel? candidatModel;
  const ProfileEditPage({Key? key, this.candidatModel}) : super(key: key);

  @override
  State<ProfileEditPage> createState() => _ProfileEditPageState();
}

class _ProfileEditPageState extends State<ProfileEditPage>
    with SingleTickerProviderStateMixin {
  String selectedCode = '225';
  bool isLoading = false;

  // Infos profile
  late TextEditingController usernameController;
  late TextEditingController firstnameController;
  late TextEditingController lastnameController;
  late TextEditingController emailController;
  late TextEditingController telephoneController;
  late TextEditingController titlePostController;
  late TextEditingController adresseController;
  late TextEditingController dateNaissanceController;
  late TextEditingController paysController;

  // Compétences
  late TextEditingController levelSchoolController;
  late TextEditingController salaireController;
  late TextEditingController descriptionController;

  // Reseau sociaux
  late TextEditingController sitewebController;
  late TextEditingController facebookController;
  late TextEditingController linkedinController;
  late TextEditingController twitterController;
  late TextEditingController instagramController;

  @override
  void initState() {
    super.initState();
    usernameController =
        TextEditingController(text: widget.candidatModel!.username.toString());
    firstnameController =
        TextEditingController(text: widget.candidatModel!.firstname.toString());
    lastnameController =
        TextEditingController(text: widget.candidatModel!.lastname.toString());
    emailController =
        TextEditingController(text: widget.candidatModel!.email.toString());
    telephoneController =
        TextEditingController(text: widget.candidatModel!.telephone.toString());
    titlePostController =
        TextEditingController(text: widget.candidatModel!.titlePost.toString());
    adresseController =
        TextEditingController(text: widget.candidatModel!.adresse.toString());
    dateNaissanceController = TextEditingController(
        text: widget.candidatModel!.dateNaissance.toString());
    paysController =
        TextEditingController(text: widget.candidatModel!.pays.toString());
    salaireController =
        TextEditingController(text: widget.candidatModel!.salaire.toString());
    levelSchoolController = TextEditingController(
        text: widget.candidatModel!.levelSchool.toString());
    descriptionController = TextEditingController(
        text: widget.candidatModel!.description.toString());

    // Reseau sociaux
    facebookController = TextEditingController(
        text: widget.candidatModel!.facebookUrl.toString());
    sitewebController =
        TextEditingController(text: widget.candidatModel!.siteWeb.toString());
    linkedinController = TextEditingController(
        text: widget.candidatModel!.linkedinUrl.toString());
    twitterController = TextEditingController(
        text: widget.candidatModel!.twitterUrl.toString());
    instagramController = TextEditingController(
        text: widget.candidatModel!.instagramUrl.toString());

    competencesSelected = widget.candidatModel!.competences!;
    languesSelected = widget.candidatModel!.langues!;
    competenceMaps = competencesSelected.map((competence) {
      return {
        'label': competence.label,
        'value': competence.value,
      };
    }).toList();

    languesMaps = languesSelected.map((langue) {
      return {
        'label': langue.label,
        'value': langue.value,
      };
    }).toList();
  }

  @override
  void dispose() {
    emailController.dispose();
    super.dispose();
  }

  List<CompetenceModel> competencesSelected = [];
  List<LangueModel> languesSelected = [];

  List<Map<String, String?>> competenceMaps = [];
  List<Map<String, String?>> languesMaps = [];

  Future<void> showPays() async {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return SimpleDialog(
          title: Text('Sélectionnez un pays'),
          children: optionPays.map((pays) {
            return SimpleDialogOption(
                onPressed: () {
                  // Gérer la sélection du pays ici
                  Navigator.pop(context, pays);
                  setState(() {
                    paysController.text = pays.value;
                  });
                },
                child: paysController.text == pays.value
                    ? Text(
                        pays.label,
                        style: GoogleFonts.nunito(
                            color: AppTheme_App.primaryColor),
                      )
                    : Text(
                        pays.label,
                        style: GoogleFonts.nunito(color: AppTheme_App.TextGray),
                      ));
          }).toList(),
        );
      },
    ).then((selectedPays) {
      if (selectedPays != null) {
        print('Pays sélectionné : ${selectedPays.label}');
        // Vous pouvez faire ce que vous voulez avec le pays sélectionné
      }
    });
  }

  Future<void> showFormations() async {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return SimpleDialog(
          title: Text('Sélectionnez de compétences / Points fort'),
          children: competenceModels.map((formation) {
            return SimpleDialogOption(
              onPressed: () {
                // Gérer la sélection du pays ici
                Navigator.pop(context, formation);
                setState(() {
                  if (!competencesSelected.any(
                      (competence) => competence.value == formation.value)) {
                    competencesSelected.add(formation);
                    competenceMaps = competencesSelected.map((competence) {
                      return {
                        'label': competence.label,
                        'value': competence.value,
                      };
                    }).toList();
                  } else {
                    competencesSelected.remove(formation);
                    competenceMaps = competencesSelected.map((competence) {
                      return {
                        'label': competence.label,
                        'value': competence.value,
                      };
                    }).toList();
                  }
                });
              },
              child: Text(
                formation.label.toString(),
                style: GoogleFonts.nunito(
                  color: competencesSelected.any(
                          (competence) => competence.value == formation.value)
                      ? AppTheme_App.primaryColor
                      : AppTheme_App.TextGray,
                  fontWeight: competencesSelected.any(
                          (competence) => competence.value == formation.value)
                      ? FontWeight.bold
                      : FontWeight.w400,
                  fontSize: competencesSelected.any(
                          (competence) => competence.value == formation.value)
                      ? 20
                      : 12,
                ),
              ),
            );
          }).toList(),
        );
      },
    ).then((selectedFormation) {
      if (selectedFormation != null) {
        print('Pays sélectionné : ${selectedFormation.label}');
        // Vous pouvez faire ce que vous voulez avec le pays sélectionné
      }
    });
  }

  Future<void> showLangues() async {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return SimpleDialog(
          title: Text('Sélectionnez des vos langues'),
          children: languagesSchool.map((formation) {
            return SimpleDialogOption(
              onPressed: () {
                // Gérer la sélection du pays ici
                Navigator.pop(context, formation);
                setState(() {
                  if (!languesSelected.any(
                      (competence) => competence.value == formation.value)) {
                    languesSelected.add(formation);
                    languesMaps = languesSelected.map((langue) {
                      return {
                        'label': langue.label,
                        'value': langue.value,
                      };
                    }).toList();
                  } else {
                    languesSelected.remove(formation);
                    languesMaps = languesSelected.map((langue) {
                      return {
                        'label': langue.label,
                        'value': langue.value,
                      };
                    }).toList();
                  }
                });
              },
              child: Text(
                formation.label.toString(),
                style: GoogleFonts.nunito(
                  color: languesSelected.any(
                          (competence) => competence.value == formation.value)
                      ? AppTheme_App.primaryColor
                      : AppTheme_App.TextGray,
                  fontWeight: languesSelected.any(
                          (competence) => competence.value == formation.value)
                      ? FontWeight.bold
                      : FontWeight.w400,
                  fontSize: languesSelected.any(
                          (competence) => competence.value == formation.value)
                      ? 20
                      : 12,
                ),
              ),
            );
          }).toList(),
        );
      },
    ).then((selectedFormation) {
      if (selectedFormation != null) {
        print('Langue sélectionné : ${selectedFormation.label}');
        // Vous pouvez faire ce que vous voulez avec le pays sélectionné
      }
    });
  }

  Future<void> showSalaires() async {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return SimpleDialog(
          title: Text('Choix de Salaire '),
          children: salairesSchool.map((formation) {
            return SimpleDialogOption(
              onPressed: () {
                // Gérer la sélection du pays ici
                Navigator.pop(context, formation);
                setState(() {
                  salaireController.text = formation;
                });
              },
              child: Text(
                formation.toString(),
                style: GoogleFonts.nunito(
                  color: salaireController.text == formation
                      ? AppTheme_App.primaryColor
                      : AppTheme_App.TextGray,
                  fontWeight: salaireController.text == formation
                      ? FontWeight.bold
                      : FontWeight.w400,
                  fontSize: salaireController.text == formation ? 20 : 12,
                ),
              ),
            );
          }).toList(),
        );
      },
    ).then((selectedFormation) {
      if (selectedFormation != null) {
        print('Langue sélectionné : ${selectedFormation.label}');
        // Vous pouvez faire ce que vous voulez avec le pays sélectionné
      }
    });
  }

  Future<void> showLevelShool() async {
    return showDialog(
      context: context,
      builder: (BuildContext context) {
        return SimpleDialog(
          title: Text("Choix Niveau d'etude "),
          children: levelSchools.map((formation) {
            return SimpleDialogOption(
              onPressed: () {
                // Gérer la sélection du pays ici
                Navigator.pop(context, formation);
                setState(() {
                  levelSchoolController.text = formation.value.toString();
                });
              },
              child: Text(
                formation.label.toString(),
                style: GoogleFonts.nunito(
                  color: levelSchoolController.text == formation.value
                      ? AppTheme_App.primaryColor
                      : AppTheme_App.TextGray,
                  fontWeight: levelSchoolController.text == formation.value
                      ? FontWeight.bold
                      : FontWeight.w400,
                  fontSize:
                      levelSchoolController.text == formation.value ? 20 : 12,
                ),
              ),
            );
          }).toList(),
        );
      },
    ).then((selectedFormation) {
      if (selectedFormation != null) {
        print('Langue sélectionné : ${selectedFormation.label}');
        // Vous pouvez faire ce que vous voulez avec le pays sélectionné
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
              backgroundColor: AppTheme_App.withPrimary,
              elevation: 0.2,
              leading: BackButton(
                color: AppTheme_App.TextGray,
              ),
              title: Text(
                "Modfication profile",
                style: GoogleFonts.nunito(color: AppTheme_App.TextGray),
              ),
              bottom: PreferredSize(
                  preferredSize: Size.fromHeight(70.0),
                  child: TabBar(
                    padding: EdgeInsets.symmetric(horizontal: 5),
                    indicatorColor: AppTheme_App.primaryColor,
                    tabs: [
                      Tab(
                        text: "Infos profile",
                      ),
                      Tab(text: 'Compténeces'),
                      Tab(text: 'Réseaux sociaux'),
                    ],
                  ))),
          backgroundColor: AppTheme_App.withPrimary,
          floatingActionButton: isLoading
              ? CircularProgressIndicator(
                  color: AppTheme_App.primaryColor,
                )
              : MaterialButton(
                  onPressed: () {
                    setState(() {
                      isLoading = true;
                    });
                    UpdateCandidat(
                            context,
                            widget.candidatModel!.id.toString(),
                            emailController.text,
                            usernameController.text,
                            firstnameController.text,
                            lastnameController.text,
                            dateNaissanceController.text,
                            telephoneController.text,
                            titlePostController.text,
                            titlePostController.text,
                            adresseController.text,
                            competenceMaps,
                            languesMaps,
                            levelSchoolController.text,
                            salaireController.text,
                            descriptionController.text,
                            sitewebController.text,
                            facebookController.text,
                            linkedinController.text,
                            instagramController.text,
                            twitterController.text)
                        .then((valueUpdate) {
                      setState(() {
                        isLoading = false;
                      });
                    });
                  },
                  child: Container(
                    padding: EdgeInsets.all(20),
                    decoration: BoxDecoration(
                        color: AppTheme_App.primaryColor,
                        borderRadius: BorderRadius.circular(100)),
                    child: Icon(
                      Icons.save,
                      color: AppTheme_App.withPrimary,
                    ),
                  ),
                ),
          body: TabBarView(children: [
            Container(
              height: MediaQuery.of(context).size.height / 1.1,
              width: MediaQuery.of(context).size.width,
              padding: EdgeInsets.symmetric(horizontal: 10, vertical: 20),
              child: SingleChildScrollView(
                child: Container(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      // Infomation Profile
                      Container(
                          padding: EdgeInsets.only(top: 30),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                child: Text(
                                  "Infos Compte : ",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.TextGray,
                                      fontSize: 20),
                                ),
                              ),
                              Container(
                                child: Column(
                                  children: [
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: usernameController,
                                              decoration: InputDecoration(
                                                  labelText: "Nom utilisateur"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: firstnameController,
                                              decoration: InputDecoration(
                                                  labelText: "Nom "),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: lastnameController,
                                              decoration: InputDecoration(
                                                  labelText: "¨Prénoms"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: emailController,
                                              decoration: InputDecoration(
                                                  labelText: "Email"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: telephoneController,
                                              decoration: InputDecoration(
                                                  labelText: "Code"),
                                            ),
                                          ),
                                          Container(
                                            child: TextFormField(
                                              controller: telephoneController,
                                              decoration: InputDecoration(
                                                  labelText: "Telehpone"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: titlePostController,
                                              decoration: InputDecoration(
                                                  labelText:
                                                      "Profession Actuelle"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                                controller:
                                                    dateNaissanceController,
                                                maxLength: 10,
                                                keyboardType:
                                                    TextInputType.number,
                                                decoration: InputDecoration(
                                                    labelText:
                                                        "Date de naissance"),
                                                inputFormatters: [
                                                  DateInputFormatter()
                                                ]),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          GestureDetector(
                                              onTap: () {
                                                showPays();
                                              },
                                              child: Container(
                                                child: TextFormField(
                                                  controller: paysController,
                                                  enabled: false,
                                                  decoration: InputDecoration(
                                                      labelText: "Pays"),
                                                ),
                                              ))
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: adresseController,
                                              decoration: InputDecoration(
                                                  labelText: "Adresse"),
                                            ),
                                          )
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              )
                            ],
                          )),

                      Divider(height: 20),

                      // Compténeces profile

                      // Reseau sociaux
                    ],
                  ),
                ),
              ),
            ),

            // Compétences
            Container(
                height: MediaQuery.of(context).size.height,
                width: MediaQuery.of(context).size.width,
                padding: EdgeInsets.symmetric(horizontal: 20),
                child: SingleChildScrollView(
                  child: Container(
                    child: Column(
                      children: [
                        // Compétences
                        Container(
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              Container(
                                child: MaterialButton(
                                  onPressed: () {
                                    showFormations();
                                  },
                                  child: Container(
                                    width:
                                        MediaQuery.of(context).size.width / 2.5,
                                    padding: EdgeInsets.symmetric(
                                        vertical: 5, horizontal: 10),
                                    decoration: BoxDecoration(
                                        color: AppTheme_App.primaryColor,
                                        borderRadius: BorderRadius.all(
                                            Radius.circular(5))),
                                    child: Row(
                                      children: [
                                        Icon(
                                          Icons.add,
                                          color: AppTheme_App.withPrimary,
                                        ),
                                        SizedBox(
                                          width: 5,
                                        ),
                                        Text(
                                          "Compétences ",
                                          style: GoogleFonts.nunito(
                                              color: AppTheme_App.withPrimary),
                                        )
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                              SizedBox(
                                height: 5,
                              ),
                              Container(
                                  padding: EdgeInsets.symmetric(horizontal: 10),
                                  child: widget.candidatModel!.competences!
                                              .length >
                                          0
                                      ? SingleChildScrollView(
                                          scrollDirection: Axis.horizontal,
                                          child: Container(
                                            child: Row(
                                              children: competencesSelected
                                                  .reversed
                                                  .map((item) {
                                                return Container(
                                                  margin: EdgeInsets.symmetric(
                                                      horizontal: 5,
                                                      vertical: 4),
                                                  decoration: BoxDecoration(
                                                      color: AppTheme_App
                                                          .secondary,
                                                      borderRadius:
                                                          BorderRadius.circular(
                                                              3)),
                                                  padding: EdgeInsets.symmetric(
                                                      horizontal: 5,
                                                      vertical: 4),
                                                  child: Text("${item.label}"),
                                                );
                                              }).toList(),
                                            ),
                                          ),
                                        )
                                      : Container(
                                          padding: EdgeInsets.symmetric(
                                              horizontal: 10),
                                          child: Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.center,
                                            children: [Text("Aucune")],
                                          ),
                                        ))
                            ],
                          ),
                        ),
                        Divider(
                          height: 10,
                        ),

                        Container(
                          child: Column(
                            children: [
                              Container(
                                child: MaterialButton(
                                  onPressed: () {
                                    showLangues();
                                  },
                                  child: Container(
                                    width:
                                        MediaQuery.of(context).size.width / 2.5,
                                    padding: EdgeInsets.symmetric(
                                        vertical: 5, horizontal: 10),
                                    decoration: BoxDecoration(
                                        color: AppTheme_App.primaryColor,
                                        borderRadius: BorderRadius.all(
                                            Radius.circular(5))),
                                    child: Row(
                                      children: [
                                        Icon(
                                          Icons.add,
                                          color: AppTheme_App.withPrimary,
                                        ),
                                        SizedBox(
                                          width: 5,
                                        ),
                                        Text(
                                          "Langues ",
                                          style: GoogleFonts.nunito(
                                              color: AppTheme_App.withPrimary),
                                        )
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                              SizedBox(
                                height: 5,
                              ),
                              Container(
                                  padding: EdgeInsets.symmetric(horizontal: 10),
                                  child: languesSelected.length > 0
                                      ? SingleChildScrollView(
                                          scrollDirection: Axis.horizontal,
                                          child: Container(
                                            child: Row(
                                              children: languesSelected.reversed
                                                  .map((item) {
                                                return Container(
                                                  margin: EdgeInsets.symmetric(
                                                      horizontal: 5,
                                                      vertical: 4),
                                                  decoration: BoxDecoration(
                                                      color: AppTheme_App
                                                          .secondary,
                                                      borderRadius:
                                                          BorderRadius.circular(
                                                              3)),
                                                  padding: EdgeInsets.symmetric(
                                                      horizontal: 5,
                                                      vertical: 4),
                                                  child: Text("${item.label}"),
                                                );
                                              }).toList(),
                                            ),
                                          ),
                                        )
                                      : Container(
                                          padding: EdgeInsets.symmetric(
                                              horizontal: 10),
                                          child: Row(
                                            mainAxisAlignment:
                                                MainAxisAlignment.center,
                                            children: [Text("Aucune")],
                                          ),
                                        ))
                            ],
                          ),
                        ),

                        Container(
                            child: Column(
                          children: [
                            Container(
                              child: GestureDetector(
                                onTap: () {
                                  showLevelShool();
                                },
                                child: TextFormField(
                                  enabled: false,
                                  controller: levelSchoolController,
                                  decoration: InputDecoration(
                                      labelText: "Niveau d'étude"),
                                ),
                              ),
                            )
                          ],
                        )),

                        SizedBox(
                          height: 5,
                        ),
                        // Salaire percu
                        Container(
                            child: Column(
                          children: [
                            Container(
                              child: GestureDetector(
                                  onTap: () {
                                    showSalaires();
                                  },
                                  child: TextFormField(
                                    controller: salaireController,
                                    enabled: false,
                                    decoration: InputDecoration(
                                        labelText: "Salaire percus / mois"),
                                  )),
                            )
                          ],
                        )),
                        SizedBox(
                          height: 5,
                        ),
                        // Description
                        Container(
                            child: Column(
                          children: [
                            Container(
                              child: TextFormField(
                                controller: descriptionController,
                                autocorrect: true,
                                maxLines: 300,
                                decoration: InputDecoration(
                                  labelText: "Description sur votre profile ",
                                ),
                              ),
                            )
                          ],
                        ))
                      ],
                    ),
                  ),
                )),

            Container(
                padding: EdgeInsets.symmetric(horizontal: 15),
                height: MediaQuery.of(context).size.height,
                width: MediaQuery.of(context).size.width,
                child: SingleChildScrollView(
                    child: Column(
                  children: [
                    Container(
                      child: TextFormField(
                        controller: sitewebController,
                        decoration: InputDecoration(
                            icon: Icon(Icons.facebook_outlined),
                            labelText: "Site web"),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Container(
                      child: TextFormField(
                        controller: facebookController,
                        decoration: InputDecoration(
                            icon: Icon(Icons.facebook_outlined),
                            labelText: "Lien facebook"),
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Column(
                      children: [
                        Container(
                          child: TextFormField(
                            controller: linkedinController,
                            decoration: InputDecoration(
                                icon: Icon(Icons.facebook_outlined),
                                labelText: "Lien Linkedin"),
                          ),
                        )
                      ],
                    ),
                    Column(
                      children: [
                        Container(
                          child: TextFormField(
                            controller: instagramController,
                            decoration: InputDecoration(
                                icon: Icon(Icons.facebook_outlined),
                                labelText: "Lien Instagram"),
                          ),
                        )
                      ],
                    ),
                    Column(
                      children: [
                        Container(
                          child: TextFormField(
                            controller: twitterController,
                            decoration: InputDecoration(
                                icon: Icon(Icons.facebook_outlined),
                                labelText: "Lien Twitter"),
                          ),
                        )
                      ],
                    )
                  ],
                ))),
          ]),
        ));
  }
}

class DateInputFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(
      TextEditingValue oldValue, TextEditingValue newValue) {
    if (newValue.text.length == 5) {
      // Automatically add "-" after year and month
      if (newValue.text.substring(4, 5) != '-') {
        String newText =
            '${newValue.text.substring(0, 4)}-${newValue.text.substring(4)}';
        return TextEditingValue(
          text: newText,
          selection: TextSelection.fromPosition(
            TextPosition(offset: newText.length),
          ),
        );
      }
    } else if (newValue.text.length > 8) {
      // Automatically add "-" after year, month, and day
      if (newValue.text.substring(7, 8) != '-') {
        String newText =
            '${newValue.text.substring(0, 7)}-${newValue.text.substring(7)}';
        return TextEditingValue(
          text: newText,
          selection: TextSelection.fromPosition(
            TextPosition(offset: newText.length),
          ),
        );
      }
    }
    return newValue;
  }
}
