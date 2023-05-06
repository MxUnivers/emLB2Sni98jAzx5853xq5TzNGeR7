import "package:flutter/material.dart";
import 'package:mobileoffreemploi/config/baseurl.dart';
import "package:http/http.dart" as http;
import "dart:convert";
import "dart:core";
import "dart:ui";

import 'package:mobileoffreemploi/views/auth/ConnexionPage.dart';

class InscriptionPage extends StatefulWidget {
  const InscriptionPage({Key? key}) : super(key: key);

  @override
  State<InscriptionPage> createState() => _InscriptionPageState();
}

class _InscriptionPageState extends State<InscriptionPage> {
  // Chargement dut bouton
  bool _isLoading = false;

  // Controlleur des textes
  final TextEditingController firstnameController = TextEditingController();
  final TextEditingController lastnameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController telephoneController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController confirm_passwordController =
      TextEditingController();

  void _sendData() async {
    String firstname = firstnameController.text;
    String lastname = lastnameController.text;
    String telephone = telephoneController.text;
    String email = emailController.text;
    String password = passwordController.text;
    String confirm_password = passwordController.text;

    if (firstname.isEmpty ||
        lastname.isEmpty ||
        telephone.isEmpty ||
        email.isEmpty ||
        password.isEmpty ||
        confirm_password.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text('Veiller remplier tous les champ'),
        ),
      );
      if (password != password.isEmpty) {
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text(
                  "mot de passe et la confirmation doivent être identiques"),
              content: Text(""),
              actions: [
                TextButton(
                  child: Text("OK"),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            );
          },
        );
        return;
      }
      return;
    }

    setState(() {
      _isLoading = true;
    });
    final url = Uri.parse("${baseurl["url"].toString()}/api/v1/candidat/");
    final response = await http.post(
      url,
      headers: {
        'Authorization': "Bearer ${baseurl["token"].toString()}",
        'Content-Type': 'application/json',
      },
      body: json.encode({
        "firstname": firstname,
        "lastname": lastname,
        "telephone": telephone,
        "email": email,
        "password": password,
      }),
    );

    if (response.statusCode == 200 || response.statusCode == 200) {
      setState(() {
        _isLoading = false;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.green,
          content: Text('Inscription réussi avec succès'),
        ),
      );

      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => ConnexionPage()),
      );
    } else {
      setState(() {
        _isLoading = false;
      });
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.redAccent,
          content: Text("Votre inscription à Inscription échouée"),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SingleChildScrollView(
      scrollDirection: Axis.vertical,
      child: Container(
        width: MediaQuery.of(context).size.height,
        decoration: BoxDecoration(
            gradient: LinearGradient(colors: [
          Color(0xFF5883DB),
          Color(0xFF023293),
        ])),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(height: 10),
            Image.asset(
              "assets/images/logo.png",
              height: 50,
            ),
            SizedBox(height: 5),
            Text(
              "Ton Logo",
              style: TextStyle(color: Colors.white, fontSize: 20),
            ),
            SizedBox(height: 20),
            Container(
              margin: EdgeInsets.all(10),
              width: 325,
              decoration: BoxDecoration(
                  color: Colors.white, borderRadius: BorderRadius.circular(10)),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  SizedBox(height: 30),
                  Text(
                    "Inscription",
                    style: TextStyle(fontSize: 35, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(
                    height: 10,
                  ),
                  Text("Veillez vous connecter s'il vous plait !"),
                  Container(
                    width: 250,
                    child: TextField(
                      controller: firstnameController,
                      decoration: InputDecoration(
                          labelText: "Nom ...",
                          suffixIcon: Icon(
                            Icons.person_outline,
                            size: 27,
                          )),
                    ),
                  ),
                  Container(
                    width: 250,
                    child: TextField(
                      controller: lastnameController,
                      decoration: InputDecoration(
                          labelText: "Prénoms ...",
                          suffixIcon: Icon(
                            Icons.person_outline,
                            size: 27,
                          )),
                    ),
                  ),
                  Container(
                    width: 250,
                    child: TextField(
                      controller: emailController,
                      decoration: InputDecoration(
                          labelText: "addresse email ...",
                          suffixIcon: Icon(
                            Icons.email,
                            size: 27,
                          )),
                    ),
                  ),
                  Container(
                    width: 250,
                    child: TextField(
                      controller: telephoneController,
                      decoration: InputDecoration(
                          labelText: "téléphone ...",
                          suffixIcon: Icon(
                            Icons.phone,
                            size: 27,
                          )),
                    ),
                  ),
                  Container(
                    width: 250,
                    child: TextField(
                      controller: passwordController,
                      decoration: InputDecoration(
                          labelText: "mot de passe ...",
                          suffixIcon: Icon(
                            Icons.remove_red_eye,
                            size: 27,
                          )),
                    ),
                  ),
                  Container(
                    width: 250,
                    child: TextField(
                      controller: confirm_passwordController,
                      decoration: InputDecoration(
                          labelText: "confirmer mot de passe ...",
                          suffixIcon: Icon(
                            Icons.remove_red_eye,
                            size: 27,
                          )),
                    ),
                  ),
                  SizedBox(
                    height: 40,
                  ),
                  _isLoading
                      ? ElevatedButton(
                          onPressed: () {}, child: CircularProgressIndicator())
                      : MaterialButton(
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
                  MaterialButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => ConnexionPage()),
                      );
                    },
                    child: Text("se connecter à votre compte",
                        style: TextStyle(fontWeight: FontWeight.bold)),
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
