import "package:flutter/material.dart";

class DetailEmploiPage extends StatelessWidget {
  const DetailEmploiPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue.shade900,
        title: Text("titre de l'offre"),
        centerTitle: true,
        leading:
            IconButton(onPressed: () {}, icon: Icon(Icons.backspace_outlined)),
      ),
      body: SingleChildScrollView(
        scrollDirection: Axis.vertical,
        child:
        Container(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              SizedBox(
                  width: double.infinity,
                  height: 250,
                  child: Image.asset("assets/images/job1.jpg")),
              Container(
                margin: EdgeInsets.all(10),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                ),
                padding: const EdgeInsets.only(top: 8, left: 8, right: 8),
                child: Text(
                  "Titre de l'offre",
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.start,
                ),
              ),
              Container(
                child: Center(
                  child: Column(
                    children: [
                      Container(
                        padding: EdgeInsets.fromLTRB(20, 50, 20, 30),
                        decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(20),
                            boxShadow: [
                              BoxShadow(
                                  color: Colors.grey.shade200, blurRadius: 3)
                            ]),
                        child: Column(
                          children: [
                            Container(
                                margin: EdgeInsets.fromLTRB(3, 10, 3, 5),
                                child: Center(
                                  child: Column(
                                    children: [
                                      Padding(
                                        padding: EdgeInsets.symmetric(
                                            vertical: 10, horizontal: 10),
                                        child: Container(
                                          child: Row(
                                            children: [
                                              Text("Salaire  : ",style: TextStyle(fontWeight: FontWeight.bold)),
                                              Text("   19992 Francs cfa",textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20 )),
                                            ],
                                          ),
                                        ),
                                      ),
                                      Padding(
                                        padding: EdgeInsets.symmetric(
                                            vertical: 5, horizontal: 10),
                                        child: Container(
                                          child: Row(
                                            children: [
                                              Text("Lieu  : ",style: TextStyle(fontWeight: FontWeight.bold)),
                                              Text("   Abidjan , Cocody ",textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20 )),
                                            ],
                                          ),
                                        ),
                                      )
                                    ],
                                  ),
                                )
                            ),


                            Container(
                              color: Colors.grey.shade200,

                              child: Column(
                                children: [
                                  Container(
                                    child: Text(
                                      "Le Digital Marketing Manager v"
                                          "ise à mettre en place une stratégie pour optimiser "
                                          "la visibilité du site web de son entreprise sur d'autres "
                                          "supports digitaux. Pour y parvenir, il utilise des techniques"
                                          " comme l'achat de mots-clés, le référencement naturel, "
                                          "le développemen"
                                          "t de partenariats ou de bandeaux publicitaires.",
                                      style: TextStyle(
                                          fontSize: 18, fontWeight: FontWeight.w400),
                                    ),
                                  ),
                                  SizedBox(height: 8),

                                ],
                              ),
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
                                    "postuler maintenant",
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontSize: 20,
                                        fontWeight: FontWeight.bold),
                                  ),
                                ),
                              ),
                            )
                          ],
                        ),
                      )
                    ],
                  ),
                ),
              )
            ],
          ),
        )
      )
    );
  }
}
