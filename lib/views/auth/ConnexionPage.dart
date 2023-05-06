import "package:flutter/material.dart";
import "package:font_awesome_flutter/font_awesome_flutter.dart";
import "package:http/http.dart" as http;
import "dart:convert";
import "dart:core";
import "dart:ui";
import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/views/auth/InscriptionPage.dart';

class ConnexionPage extends StatefulWidget {
  const ConnexionPage({Key? key}) : super(key: key);
  @override
  State<ConnexionPage> createState() => _ConnexionPageState();
}

class _ConnexionPageState extends State<ConnexionPage> {
  // Controller de text
  final TextEditingController _textEditingController = TextEditingController();
  final TextEditingController _otherTextEditingController =
      TextEditingController();

  void _sendData() async {
    String value = _textEditingController.text;
    String otherValue = _otherTextEditingController.text;
    if (value.isEmpty || otherValue.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('Veuillez remplir tous les champs'),
        ),
      );
      return;
    }

    final url =
        Uri.parse("${baseurl["url"].toString()}/api/v1/auth/candidat/login/");
    final response = await http.post(
      url,
      headers: {
        'Authorization': "Bearer ${baseurl["token"].toString()}",
        'Content-Type': 'application/json',
      },
      body: json.encode({
        'email': value,
        'password': otherValue,
      }),
    );

    if (response.statusCode == 200 || response.statusCode == 200) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.greenAccent,
          content: Text('Connexion réussi'),
        ),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('Une erreur est survenue lors de l\'envoi des données'),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
      child: Container(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
            gradient: LinearGradient(colors: [
          Color(0xFF5883DB),
          Color(0xFF023293),
        ])),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(height: 80),
            Image.asset(
              "assets/images/logo.png",
              height: 100,
            ),
            SizedBox(height: 15),
            Text(
              "Ton Logo",
              style: TextStyle(color: Colors.white, fontSize: 20),
            ),
            SizedBox(height: 30),
            Container(
              height: 430,
              width: 325,
              decoration: BoxDecoration(
                  color: Colors.white, borderRadius: BorderRadius.circular(10)),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(height: 30),
                  Text(
                    "Connexion",
                    style: TextStyle(fontSize: 35, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Text("Veillez vous connecter s'il vous plait !"),
                  Container(
                    width: 250,
                    child: TextField(
                      controller: _textEditingController,
                      decoration: InputDecoration(
                          labelText: "addresse email ...",
                          suffixIcon: Icon(
                            FontAwesomeIcons.envelope,
                            size: 27,
                          )),
                    ),
                  ),
                  Container(
                    width: 250,
                    child: TextField(
                      controller: _otherTextEditingController,
                      decoration: InputDecoration(
                          labelText: "mot de passe ...",
                          suffixIcon: Icon(
                            FontAwesomeIcons.eyeSlash,
                            size: 27,
                          )),
                    ),
                  ),
                  Padding(
                    padding: EdgeInsets.fromLTRB(20, 20, 40, 20),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Text(
                          "Mot de passe oublié",
                          style: TextStyle(color: Colors.blue.shade600),
                        )
                      ],
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  GestureDetector(
                    onTap: _sendData,
                    child: Container(
                      alignment: Alignment.center,
                      width: 250,
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(50),
                          gradient: LinearGradient(
                              begin: Alignment.centerLeft,
                              end: Alignment.centerRight,
                              colors: [Color(0xFF0042ff), Color(0xFF00c6ff)])),
                      child: Padding(
                        padding: EdgeInsets.all(12.0),
                        child: Text(
                          "Connexion",
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
                  GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => InscriptionPage()),
                      );
                    },
                    child: Text(
                      "Or créer votre compte",
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  /*
                  * Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Icon(Icons.facebook,color:Colors.blue[700]),
                      Icon(Icons.facebook,color:Colors.blue[700]),
                      Icon(Icons.facebook,color:Colors.blue[700]),
                    ],
                  )
                  * */
                ],
              ),
            )
          ],
        ),
      ),
    ));
  }
}
