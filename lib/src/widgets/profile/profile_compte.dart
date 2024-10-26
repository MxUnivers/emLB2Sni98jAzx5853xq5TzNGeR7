import "package:flutter/material.dart";
import "package:jouman_mobile_mobile/src/model/CandidatModel.dart";

class ProfileCompte extends StatefulWidget {
  final CandidatModel? candidat;
  const ProfileCompte({Key? key, this.candidat}) : super(key: key);

  @override
  State<ProfileCompte> createState() => _ProfileCompteState();
}

class _ProfileCompteState extends State<ProfileCompte> {
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal: 10),
        margin: EdgeInsets.only(top: 10),
        child: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Column(
              children: [
                // Nom Prénoms
                Card(
                    elevation: 0.2,
                    child: Container(
                        padding:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        child: Row(
                          children: [
                            Icon(Icons.person),
                            Text("${widget.candidat!.username}")
                          ],
                        ))),
                // firstname , lastname
                SizedBox(
                  height: 5,
                ),
                Card(
                    elevation: 0.2,
                    child: Container(
                        padding:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        child: Row(
                          children: [
                            Icon(Icons.person),
                            Text(
                                "${widget.candidat!.firstname} ${widget.candidat!.lastname}")
                          ],
                        ))),

                SizedBox(
                  height: 5,
                ),
                Card(
                    elevation: 0.2,
                    child: Container(
                        padding:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        child: Row(
                          children: [
                            Icon(Icons.mail_outline),
                            Text("${widget.candidat!.email}")
                          ],
                        ))),
                //Numéro
                Card(
                    elevation: 0.2,
                    child: Container(
                        padding:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        child: Row(
                          children: [
                            Icon(Icons.phone_android_outlined),
                            Text("${widget.candidat!.telephone}")
                          ],
                        ))),

                //Naissances
                Card(
                    elevation: 0.2,
                    child: Container(
                        padding:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        child: Row(
                          children: [
                            Icon(Icons.browse_gallery),
                            Text("${widget.candidat!.dateNaissance}")
                          ],
                        ))),
                // Titre tu poste
                Card(
                    elevation: 0.2,
                    child: Container(
                        padding:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        child: Row(
                          children: [
                            Icon(Icons.work),
                            Text("${widget.candidat!.titlePost}")
                          ],
                        ))),
                Card(
                    elevation: 0.2,
                    child: Container(
                        padding:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        child: Row(
                          children: [
                            Icon(Icons.landscape),
                            Text("${widget.candidat!.pays}")
                          ],
                        )))
                // Pays
                // Addresse précise
              ],
            )));
  }
}
