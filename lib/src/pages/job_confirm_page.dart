import "package:awesome_notifications/awesome_notifications.dart";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:jouman_mobile_mobile/src/model/CandidatModel.dart";
import "package:jouman_mobile_mobile/src/model/JobModel.dart";
import "package:jouman_mobile_mobile/src/pages/mainPage.dart";
import 'package:fluttertoast/fluttertoast.dart';
import "package:jouman_mobile_mobile/src/utils/baseurl.dart";
import "package:url_launcher/url_launcher.dart";
import 'package:flutter/services.dart';
import "../actions/CandidatureAction.dart";
import "../utils/storage.dart";

class JobConfirmPage extends StatefulWidget {
  final JobModel? job;
  const JobConfirmPage({super.key, this.job});

  @override
  State<JobConfirmPage> createState() => _JobConfirmPageState();
}

class _JobConfirmPageState extends State<JobConfirmPage> {
  @override
  void initState() {
    super.initState();
    SharedPreferencesService.getCandidatDataFromSharedPreferences()
        .then((candidat) {
      setState(() {
        this.candidat = candidat;
        firstnameController.text = this.candidat.firstname!;
        lastnameController.text = this.candidat.lastname!;
        emailController.text = this.candidat.email!;
      });
    });
  }

  bool isLoading = false;
  final _formKey = GlobalKey<FormState>();
  late CandidatModel candidat = CandidatModel(
      account:
          AccountCandidatModel(solde: 0, dateNow: "", pack: "", dateEnd: ""));

// Créez des contrôleurs pour chaque champ
  final firstnameController = TextEditingController();
  final lastnameController = TextEditingController();
  final emailController = TextEditingController();
  final telephoneController = TextEditingController();
  final descriptionController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: candidat.account!.pack == "SILVER" ||
              candidat.account!.pack == "GOLD" ||
              candidat.account!.pack == "DIAMOND"
          ? SafeArea(
              child: Padding(
                padding: const EdgeInsets.all(10.0),
                child: ListView(
                  children: [
                    Container(
                      alignment: Alignment.center,
                      child: const Padding(
                        padding: EdgeInsets.fromLTRB(20, 10, 10, 10),
                        child: Text(
                          'Poster votre candidature',
                          style: TextStyle(
                            fontWeight: FontWeight.w900,
                            fontSize: 36,
                            color: AppTheme_App.withGreyOrginal,
                          ),
                        ),
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.fromLTRB(20, 10, 10, 10),
                      child: Card(
                        child: Container(
                          child: Row(
                            children: [
                              Container(
                                decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(10)),
                                child: Image.network(
                                  widget.job!.coverPicture.toString(),
                                  height: 50,
                                  width: 50,
                                ),
                              ),
                              Container(
                                child: Flexible(
                                  child:
                                      Text("${widget.job?.title.toString()}"),
                                ),
                              )
                            ],
                          ),
                        ),
                      ),
                    ),
                    Container(
                      alignment: Alignment.center,
                      child: Padding(
                        padding: const EdgeInsets.fromLTRB(20, 8.0, 20, 20),
                        child: Text(
                          'veillez renseigner les informations pour votre candidature ',
                          style: TextStyle(
                            color: Colors.grey[800],
                            fontSize: 16,
                          ),
                        ),
                      ),
                    ),
                    Form(
                      key: _formKey,
                      child: Column(
                        children: <Widget>[
                          Padding(
                            padding: EdgeInsets.fromLTRB(20, 5, 20, 5),
                            child: TextFormField(
                              controller: firstnameController,
                              decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'Nom',
                              ),
                              validator: (value) {
                                if (value!.isEmpty) {
                                  return 'Veuillez saisir votre nom';
                                }
                                return null;
                              },
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.fromLTRB(20, 5, 20, 5),
                            child: TextFormField(
                              controller: lastnameController,
                              decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'Prénoms',
                              ),
                              validator: (value) {
                                if (value!.isEmpty) {
                                  return 'Veuillez saisir vos prénoms';
                                }
                                return null;
                              },
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.fromLTRB(20, 5, 20, 5),
                            child: TextFormField(
                              controller: emailController,
                              keyboardType: TextInputType.emailAddress,
                              decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'email',
                              ),
                              validator: (value) {
                                if (value!.isEmpty) {
                                  return 'Veuillez saisir votre adresse e-mail';
                                }
                                return null;
                              },
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.fromLTRB(20, 5, 20, 20),
                            child: TextFormField(
                              controller: telephoneController,
                              maxLines: 10,
                              minLines: 1,
                              keyboardType: TextInputType.number,
                              decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'telephone 2250595387052',
                              ),
                                onChanged: (text) {
                                  if (!text.startsWith('225')) {
                                    telephoneController.text = '225$text';
                                  }
                                }
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.fromLTRB(20, 5, 20, 20),
                            child: TextFormField(
                              controller: descriptionController,
                              maxLines: 10,
                              minLines: 1,
                              decoration: InputDecoration(
                                border: OutlineInputBorder(),
                                labelText: 'Motif',
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.all(5.0),
                            child: isLoading == true
                                ? CircularProgressIndicator()
                                : ElevatedButton(
                                    onPressed: () {
                                      if (_formKey.currentState!.validate()) {
                                        setState(() {
                                          isLoading = true;
                                        });
                                        postCandidature(
                                                context,
                                                candidat.id!,
                                                widget.job!.idEntreprise
                                                    .toString(),
                                                widget.job!.id.toString(),
                                                firstnameController.text,
                                                lastnameController.text,
                                                emailController.text,
                                                telephoneController.text,
                                                descriptionController.text,
                                                widget.job!.title.toString())
                                            .then((value) {
                                          setState(() {
                                            isLoading = false;
                                          });
                                        });
                                      } else {
                                        Fluttertoast.showToast(
                                            msg:
                                                "veillez remplir tous les champ");
                                      }
                                    },
                                    style: ButtonStyle(
                                      shape: MaterialStateProperty.all<
                                          RoundedRectangleBorder>(
                                        RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(7.0),
                                        ),
                                      ),
                                    ),
                                    child: Padding(
                                      padding: EdgeInsets.all(10.0),
                                      child: Text(
                                        'Valider ',
                                        style: TextStyle(
                                          fontSize: 20,
                                        ),
                                      ),
                                    ),
                                  ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            )
          : SafeArea(
              child: Padding(
                  padding: EdgeInsets.only(top: 10, bottom: 10),
                  child: Container(
                      height: MediaQuery.of(context).size.height,
                      width: MediaQuery.of(context).size.width,
                      decoration:
                          BoxDecoration(color: AppTheme_App.withPrimary),
                      child: Center(
                        child: Column(
                          children: [
                            Image.asset(
                              "assets/market.png",
                              height: 150,
                              width: 150,
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Text(
                              "Veillez mettre ajour votre pack .",
                              style: GoogleFonts.nunito(
                                  color: AppTheme_App.TextGray),
                            ),
                            SizedBox(
                              height: 20,
                            ),
                            GestureDetector(
                              onTap: _launchURL,
                              child: Container(
                                padding: EdgeInsets.symmetric(
                                    vertical: 10, horizontal: 20),
                                decoration: BoxDecoration(
                                    color: AppTheme_App.primaryColor,
                                    borderRadius: BorderRadius.circular(20)),
                                child: Text(
                                  "Souscrire prémuim",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.withPrimary,
                                      fontWeight: FontWeight.w700,
                                      fontSize: 15),
                                ),
                              ),
                            )
                          ],
                        ),
                      )))),
    );
  }

  _launchURL() async {
    const url =
        baseurl.url_site_web; // Remplacez par l'URL que vous souhaitez ouvrir.
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Impossible d\'ouvrir l\'URL : $url';
    }
  }
}
