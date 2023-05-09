import "package:flutter/material.dart";
import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/storage/profileStorage.dart';
import 'package:shared_preferences/shared_preferences.dart';
import "package:http/http.dart" as http;
import  "dart:convert";
import  "dart:ui";




class PostCandidaturePage extends StatefulWidget {
  final String id;
  const PostCandidaturePage({Key? key, required this.id}) : super(key: key);

  @override
  State<PostCandidaturePage> createState() => _PostCandidaturePageState();
}

class _PostCandidaturePageState extends State<PostCandidaturePage> {

  bool _isLoading = false;
  @override
  void initState() {
    super.initState();
    getDataProfileConnexion();
  }

  // Récupérer une valeur Profile du candidat
  Future<void> getDataProfileConnexion() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      idConnexion = prefs.getString(storageProfile["_id"].toString()) ?? "";
      firstname = prefs.getString(storageProfile["firstname"].toString()) ?? "";
      lastname = prefs.getString(storageProfile["lastname"].toString()) ?? "";
      email = prefs.getString(storageProfile["email"].toString()) ?? "";
      telephone = prefs.getString(storageProfile["telephone"].toString()) ?? "";
    });
  }


  late String idConnexion;
  late String firstname;
  late String lastname;
  late String email;
  late String telephone;

  late TextEditingController _firstname = TextEditingController(text: firstname.toString());
  late TextEditingController _lastname = TextEditingController(text: lastname.toString());
  late TextEditingController _email = TextEditingController(text: email.toString());
  late TextEditingController _telephone = TextEditingController(text: telephone.toString());
  late TextEditingController _description= TextEditingController(text: "...");



  //Poster candidature au poste de ....
  void _sendData() async {
    if (widget.id.toString() == null && idConnexion == null ) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('Aucune disponible ...'),
        ),
      );
      return;
    }
    final url = Uri.parse("${baseurl["url"].toString()}/api/v1/candidat/get_candidat/${idConnexion.toString()}/postuler/${widget.id.toString()}/offres");
    setState(() {
      _isLoading = true;
    });
    final response = await http.post(
      url,
      headers: {
        'Authorization': "Bearer ${baseurl["token"].toString()}",
        'Content-Type': 'application/json',
      },
    );
    if (response.statusCode == 200 || response.statusCode == 300) {
      // Stopper le chargement de mon bouton
      setState(() {
        _isLoading = false;
      });
      // message du post de mon application
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.green,
          content: Text('Votre demande a été accepter avec succès '),
        ),
      );
      // Redirection vers la page d'accueil de mon application
    } else {
      setState(() {
        _isLoading = false;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.red,
          content: Text("Votre canditure n'a pas pu être poster ! "),
        ),
      );
    }
  }




  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue.shade900,
        leading: IconButton(
          onPressed: (){
            Navigator.pop(context);
          },
          icon: Icon(Icons.arrow_back_ios),
        ),
        title: Text("Poster votre candidature "),
        centerTitle: true,
      ),
        body: SingleChildScrollView(
          scrollDirection: Axis.vertical,
          child: Container(
            width: MediaQuery.of(context).size.height,
            /*
            decoration: BoxDecoration(
                gradient: LinearGradient(colors: [
                  Color(0xFF5883DB),
                  Color(0xFF023293),
                ])
            )
            */

            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(height: 10),
                Image.asset(
                  "assets/images/job1.jpg",
                  height: 100,
                  width: double.infinity,
                ),
                SizedBox(height: 5),
                Text(
                  "Ton Logo",
                  style: TextStyle(color: Colors.white, fontSize: 20),
                ),
                SizedBox(height: 5),
                Container(
                  margin: EdgeInsets.all(10),
                  width: 370,
                  decoration: BoxDecoration(
                      color: Colors.white, borderRadius: BorderRadius.circular(10)),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      SizedBox(height: 30),
                      Text(
                        "Poster votre candidature",
                        style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Text('les informations sur vous ?'),
                      Container(
                        width: 250,
                        child: TextField(
                          controller: _firstname,
                          decoration: InputDecoration(
                              labelText: "Votre Nom ...",
                              suffixIcon: Icon(
                                Icons.person_outline,
                                size: 27,
                              )),
                        ),
                      ),
                      Container(
                        width: 250,
                        child: TextField(
                          controller: _lastname,
                          decoration: InputDecoration(
                              labelText: "Votre Prénoms ...",
                              suffixIcon: Icon(
                                Icons.person_outline,
                                size: 27,
                              )),
                        ),
                      ),
                      Container(
                        width: 250,
                        child: TextField(
                          controller: _email,
                          decoration: InputDecoration(
                              labelText: "Votre addresse email ...",
                              suffixIcon: Icon(
                                Icons.email,
                                size: 27,
                              )),
                        ),
                      ),
                      Container(
                        width: 250,
                        child: TextField(
                          controller: _telephone,
                          decoration: InputDecoration(
                              labelText: "Votre téléphone ...",
                              suffixIcon: Icon(
                                Icons.phone,
                                size: 27,
                              )),
                        ),
                      ),
                      Container(
                        width: 250,
                        child: TextField(
                          maxLines: 3,
                          controller: _description,
                          decoration: InputDecoration(
                              labelText: "Description sur vous / motivation / metier  ...",
                              hintMaxLines: 10,
                              suffixIcon: Icon(
                                Icons.description,
                                size: 27,
                              )),
                        ),
                      ),

                      Padding(
                        padding: EdgeInsets.fromLTRB(20, 20, 40, 20),
                      ),
                      SizedBox(
                        height: 20,
                      ),
                      _isLoading ?
                      MaterialButton(
                        onPressed: (){},
                        color: Colors.blueGrey,
                        child: Center(
                          child: CircularProgressIndicator(

                          ),
                        ),
                      ) :
                      MaterialButton(
                        onPressed: _sendData,
                        child: Container(
                          alignment: Alignment.center,
                          width: 250,
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(50),
                              gradient: LinearGradient(
                                  begin: Alignment.centerLeft,
                                  end: Alignment.centerRight,
                                  colors: [
                                    Color(0xFF8A2387),
                                    Color(0xFFE94057),
                                    Color(0xFFE27121)
                                  ])),
                          child: Padding(
                            padding: EdgeInsets.all(12.0),
                            child: Text(
                              "Poster candidature",
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold),
                            ),
                          ),
                        ),
                      ),
                      SizedBox(
                        height: 30,
                      ),
                      SizedBox(
                        height: 20,
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        ));
  }
}
