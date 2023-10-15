import "package:awesome_notifications/awesome_notifications.dart";
import "package:flutter/material.dart";
import "package:offre_emplois_mobile_candidat/src/config/theme.dart";
import "package:offre_emplois_mobile_candidat/src/model/JobModel.dart";
import "package:offre_emplois_mobile_candidat/src/pages/mainPage.dart";
import 'package:fluttertoast/fluttertoast.dart';

class JobConfirmPage extends StatefulWidget {
  final JobModel? job;
  const JobConfirmPage({super.key, this.job});

  @override
  State<JobConfirmPage> createState() => _JobConfirmPageState();
}

class _JobConfirmPageState extends State<JobConfirmPage> {
// Créez des contrôleurs pour chaque champ
  final firstnameController = TextEditingController();
  final lastnameController = TextEditingController();
  final emailController = TextEditingController();
  final telephoneController = TextEditingController();
  final descriptionController = TextEditingController();

  triggleNofication() {
    AwesomeNotifications().createNotification(
        content: NotificationContent(
      id: 10,
      bigPicture: "assets/logo_antigaspi.png",
      channelKey: "basic_channel",
      title:
          "candidature pour le poste ${widget.job?.title.toString()} à été prise en compte , Regarder dans la liste de vos candidatures",
      body: "Merci de faire confiance 😁 . ",
    ));
  }

  void PostCandidature() {
    triggleNofication();
    Fluttertoast.showToast(
      msg:
          "Candidature pour le poste ${widget.job?.title.toString()} a été prise en compte. Regardez dans la liste de vos candidatures",
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.BOTTOM,
      timeInSecForIosWeb: 1,
      backgroundColor: Colors.green.shade200,
      textColor: Colors.grey.shade700,
      fontSize: 16.0,
    );
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => MainPage()),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
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
                            child: Text("${widget.job?.title.toString()}"),
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
                      child: ElevatedButton(
                        onPressed: () {
                          if (Form.of(context).validate()) {
                            // Valider le formulaire et soumettre les données
                          } else {
                            print("Veillez remplir tout les champ");
                            Fluttertoast.showToast(
                            msg: "veillez remplir tous les champ"
                            );
                          }
                        },
                        style: ButtonStyle(
                          shape:
                              MaterialStateProperty.all<RoundedRectangleBorder>(
                            RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(7.0),
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
      ),
    );
  }
}
