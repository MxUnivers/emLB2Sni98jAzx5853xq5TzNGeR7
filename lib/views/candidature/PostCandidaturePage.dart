import "package:flutter/material.dart";

class PostCandidaturePage extends StatelessWidget {
  const PostCandidaturePage({Key? key}) : super(key: key);

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
                      /*
                      * GestureDetector(
                        onTap: () {},
                        child: Text(
                          "se connecter à votre compte",
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      * */
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
