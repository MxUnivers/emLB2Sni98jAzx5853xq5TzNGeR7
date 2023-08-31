import "package:awesome_notifications/awesome_notifications.dart";
import  "package:flutter/material.dart";
import "package:offre_emplois_mobile_candidat/src/config/theme.dart";
import "package:offre_emplois_mobile_candidat/src/model/JobModel.dart";
import "package:offre_emplois_mobile_candidat/src/pages/mainPage.dart";
import 'package:fluttertoast/fluttertoast.dart';



class JobConfirmPage extends StatefulWidget {
  final JobModel? job;
  const JobConfirmPage({super.key,this.job});

  @override
  State<JobConfirmPage> createState() => _JobConfirmPageState();
}

class _JobConfirmPageState extends State<JobConfirmPage> {




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
                  padding: EdgeInsets.fromLTRB(20, 50, 20, 10),
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
              Container(
                child: const Padding(
                  padding: EdgeInsets.fromLTRB(20, 5, 20, 5),
                  child: TextField(
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Nom',
                    ),
                  ),
                ),
              ),
              Container(
                child: const Padding(
                  padding: EdgeInsets.fromLTRB(20, 5, 20, 5),
                  child: TextField(
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Prénoms',
                    ),
                  ),
                ),
              ),
              Container(
                child: const Padding(
                  padding: EdgeInsets.fromLTRB(20, 5, 20, 5),
                  child: TextField(
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'email',
                    ),
                  ),
                ),
              ),

              Container(
                child: const Padding(
                  padding: EdgeInsets.fromLTRB(20, 20, 20, 20),
                  child: TextField(
                    maxLines: 10,
                    minLines: 1,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      labelText: 'Motif',
                    ),
                  ),
                ),
              ),
              Container(
                child: Padding(
                  padding: const EdgeInsets.all(15.0),
                  child: ElevatedButton(
                    onPressed: () {
                      triggleNofication();
                      Fluttertoast.showToast(
                          msg: "Candidature envoyer. regarder l'etat de vos candidatures",
                          toastLength: Toast.LENGTH_SHORT,
                          gravity: ToastGravity.BOTTOM,
                          timeInSecForIosWeb: 1,
                          backgroundColor: Colors.green.shade200,
                          textColor: Colors.grey.shade700,
                          fontSize: 16.0);

                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => MainPage()),
                      );
                    },
                    style: ButtonStyle(
                        shape:
                        MaterialStateProperty.all<RoundedRectangleBorder>(
                            RoundedRectangleBorder(
                                borderRadius:
                                BorderRadius.circular(7.0)))),
                    child: const Padding(
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
              ),

            ],
          ),
        ),
      ),
    );
  }
}