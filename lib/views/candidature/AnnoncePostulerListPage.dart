import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/storage/profileStorage.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:http/http.dart' as http;

class AnnoncePostulerListPage extends StatefulWidget {
  const AnnoncePostulerListPage({Key? key}) : super(key: key);

  @override
  State<AnnoncePostulerListPage> createState() => _AnnoncePostulerListPageState();
}

class _AnnoncePostulerListPageState extends State<AnnoncePostulerListPage> {
  bool isLoading = false;

  List<dynamic> candidatures = [
    // Ajoutez d'autres candidatures ici
  ];
  List<dynamic> candidatures2 = [
    // Ajoutez d'autres candidatures ici
  ];

  @override
  void initState() {
    super.initState();
    _getCandidatiures();
    // Charger les données de l'utilisateur ici
  }

  late String id;

  // Récupérer une valeur Profile du candidat

  Future<List<dynamic>> _getCandidatiures() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(()  {
      id = prefs.getString(storageProfile["_id"].toString()) ?? "";
    });
    setState(() {
      isLoading = true;
    });

    final String apiUrl =
        '${baseurl["url"].toString()}/api/v1/candidat/get_candidat/${id}/annonces';

    final response = await http.get(Uri.parse(apiUrl), headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':
          "${baseurl["TypeToken"].toString()} ${baseurl["token"].toString()}"
    });

    if (response.statusCode == 200 || response.statusCode == 300) {
      setState(() {
        isLoading = false;
      });
      setState(() {
        Map<String, dynamic> _data = jsonDecode(response.body);
        print(_data);
        candidatures = _data["data"];
        candidatures2 = _data["data"];
      });
      return candidatures;
    } else {
      setState(() {
        isLoading = false;
      });
      throw Exception('Failed to load offres');
    }
  }

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    return Scaffold(
        appBar: AppBar(
          title: Text("Annonces postulées"),
          centerTitle: true,
          backgroundColor: Colors.blue.shade800,
        ),
        body: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Stack(children: [
              Container(
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Container(
                        child: Column(
                            children: candidatures
                                .map((data) => Card(
                                    child: ListTile(
                                        title: Text(data["titre"].toString()+"..."),
                                        subtitle: Container(
                                          child: Container(
                                            decoration: BoxDecoration(
                                              borderRadius: BorderRadius.circular(10),
                                              color: Colors.lightGreen.shade800
                                            ),
                                            child: Text(
                                              "offre d'emplois",textAlign: TextAlign.center,
                                              style: TextStyle(color:Colors.white),),
                                          ),
                                        ),
                                        leading: FadeInImage(
                                              placeholder: AssetImage('assets/images/logo.png'), // Image de chargement à afficher pendant le chargement de l'image
                                              image: NetworkImage('https://avatars.githubusercontent.com/u/107148545?v=4'), // URL de l'image à charger
                                          fit: BoxFit.cover, // Ajustement de l'image
                                          ),
                                        onTap: () {
                                          showDialog(
                                            context: context,
                                            builder: (BuildContext context) {
                                              return AlertDialog(
                                                scrollable: true,
                                                title:
                                                Container(
                                                  decoration: BoxDecoration(
                                                      color: Colors.blue
                                                  ),
                                                  child: Text(
                                                    data["titre"].toString(), style: TextStyle(color:Colors.white),),
                                                ),
                                                content: SingleChildScrollView(
                                                  scrollDirection: Axis.vertical,
                                                  child: Container(

                                                    decoration: BoxDecoration(
                                                        color: Colors.grey.shade100,
                                                        borderRadius:BorderRadius.circular(10)
                                                    ),
                                                    child: Text(data["description"].toString(),
                                                      textAlign: TextAlign.center,
                                                    ),
                                                  ),
                                                ),
                                                actions: [
                                                  TextButton(
                                                    onPressed: () {
                                                      Navigator.of(context)
                                                          .pop();
                                                    },
                                                    child: Text('Fermer'),
                                                  ),
                                                  IconButton(

                                                    onPressed: (){},
                                                    icon: Icon(Icons.send),color: Colors.indigo.shade900,
                                                  ),
                                                ],
                                              );
                                            },
                                          );
                                        })))
                                .toList()),
                      ),
                      isLoading
                          ? Container(
                        height: screenHeight,
                        color: Colors.black.withOpacity(0.3),
                        child: Center(
                          child: CircularProgressIndicator(),
                        ),
                      )
                          : SizedBox()
                    ]),
              ),
            ])));
  }
}
