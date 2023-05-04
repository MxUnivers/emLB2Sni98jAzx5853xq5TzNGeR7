import "package:flutter/material.dart";

class InscriptionPage extends StatelessWidget {
  const InscriptionPage({Key? key}) : super(key: key);

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
                      decoration: InputDecoration(
                          labelText: "confirmer mot de passe ...",
                          suffixIcon: Icon(
                            Icons.remove_red_eye,
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
                  GestureDetector(
                    onTap: () {},
                    child: Text(
                      "se connecter à votre compte",
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
