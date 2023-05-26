import 'package:flutter/material.dart';
import "package:http/http.dart" as http;
import "dart:convert";
import "package:get/get.dart";
import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/storage/profileStorage.dart';
import 'package:mobileoffreemploi/views/auth/ConnexionPage.dart';
import 'package:mobileoffreemploi/views/candidature/PostCandidaturePage.dart';
import 'package:mobileoffreemploi/views/emplois/DetailEmploiPage.dart';
import 'package:mobileoffreemploi/views/emplois/ListEmploisPage.dart';
import 'package:mobileoffreemploi/views/emplois/SearchEmploisPage.dart';
import 'package:mobileoffreemploi/views/notifcations/NotificationPage.dart';
import 'package:mobileoffreemploi/views/profile/ProfilePage.dart';
import "package:shared_preferences/shared_preferences.dart";

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  DateTime? _lastPressedAt; // variable pour enregistrer l'heure de la dernière pression du bouton retour

  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();


  @override
  void initState() {
    super.initState();
    getDataProfileConnexion();
    _getOffres();
    // Charger les données de l'utilisateur ici
  }

  late String id;
  late String firstname;
  late String lastname;
  late String email;
  late String telephone;
  late String coverPicture;
  // Récupérer une valeur Profile du candidat
  Future<void> getDataProfileConnexion() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      id = prefs.getString(storageProfile["_id"].toString()) ?? "";
      firstname = prefs.getString(storageProfile["firstname"].toString()) ?? "";
      lastname = prefs.getString(storageProfile["lastname"].toString()) ?? "";
      email = prefs.getString(storageProfile["email"].toString()) ?? "";
      telephone = prefs.getString(storageProfile["telephone"].toString()) ?? "";
      coverPicture =
          prefs.getString(storageProfile["coverPicture"].toString()) ?? "";
    });
  }

  List<dynamic> offres = [];
  List<dynamic> _data = [];

  Future<List<dynamic>> _getOffres() async {
    final String apiUrl =
        '${baseurl["url"].toString()}/api/v1/offre/get_offres';

    final response = await http.get(Uri.parse(apiUrl), headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':
          "${baseurl["TypeToken"].toString()} ${baseurl["token"].toString()}"
    });

    if (response.statusCode == 200 || response.statusCode == 300) {
      setState(() {
        Map<String, dynamic> _data = jsonDecode(response.body);
        print(offres);
        offres = _data["data"];
      });
      return offres;
    } else {
      throw Exception('Failed to load offres');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        key: _scaffoldKey,
        appBar: AppBar(
          backgroundColor: Colors.blue.shade900,
          title: Text('Offres d\'emploi'),
          centerTitle: true,
          leading: IconButton(
            onPressed: () {
              _scaffoldKey.currentState?.openDrawer();
            },
            icon: Icon(Icons.menu_rounded),
          ),
        ),

        drawer: Drawer(
          child: ListView(
            children: <Widget>[
              UserAccountsDrawerHeader(
                decoration: BoxDecoration(color: Colors.blue.shade900),
                accountName:
                    Text("${firstname.toString()} ${lastname.toString()}"),
                accountEmail: Text(email.toString()),
                currentAccountPicture: CircleAvatar(
                  child: Image.network("${coverPicture.toString()}",
                      fit: BoxFit.contain),
                ),
              ),
              ListTile(
                leading: Icon(Icons.notifications_outlined),
                title: Text('Alertes'),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => NotificationPage()),
                  );
                },
              ),
              ListTile(
                leading: Icon(Icons.person_outline),
                title: Text('Profile'),
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => UserProfilePage()),
                  );
                },
              ),
            ],
          ),
        ),
        body: SingleChildScrollView(
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
              Container(
                height: 200,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: AssetImage('assets/images/banner.jpg'),
                    fit: BoxFit.cover,
                  ),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Bienvenue sur',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 24,
                      ),
                    ),
                    SizedBox(height: 8),
                    Text(
                      'Offres d\'emploi',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 32,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 16),
              Padding(
                  padding: EdgeInsets.symmetric(horizontal: 16),
                  child: MaterialButton(
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => SearchEmploisPage()),
                      );
                    },
                    child: TextField(
                      enabled: false,
                      onTap: () {},
                      decoration: InputDecoration(
                        border: OutlineInputBorder(),
                        hintText: 'Rechercher un emploi',
                        suffixIcon: Icon(Icons.search),
                      ),
                    ),
                  )),
              SizedBox(height: 16),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 16),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Offres d\'emploi populaires',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    TextButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => ListEmploisPage()),
                        );
                      },
                      child: Text('Voir plus'),
                    ),
                  ],
                ),
              ),
              SizedBox(height: 16),
              offres.length > 0
                  ? SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: Container(
                          child: Container(
                        child: Row(
                            children: offres
                                .map((data) => JobCard(
                                      id: data["_id"].toString(),
                                      title: data["titre"].toString(),
                                      description:
                                          data["description"].toString(),
                                      location: data["lieu"].toString(),
                                      company: data["entreprise"]
                                              .toString()
                                              .substring(0, 14) +
                                          "...",
                                      imageUrl: data["logo"].toString() == null
                                          ? data["logo"].toString()
                                          : "https://icon-library.com/images/icon-job/icon-job-3.jpg",
                                    ))
                                .toList()),
                      )))
                  : Container(
                      child: Center(
                        child: CircularProgressIndicator(
                          color: Colors.blue,
                        ),
                      ),
                    ),
            ])));
  }
  
  

  // Candidat
  Future<bool> _onWillPop() async {
    if (_lastPressedAt == null ||
        DateTime.now().difference(_lastPressedAt!) > Duration(seconds: 2)) {
      // Si l'utilisateur appuie sur le bouton retour pour la première fois ou s'il a attendu plus de 2 secondes depuis la dernière pression du bouton retour, on affiche un message pour lui demander de confirmer la sortie de l'application
      _lastPressedAt = DateTime.now();
      return false;
    }
    return true; // Si l'utilisateur appuie sur le bouton retour deux fois en moins de 2 secondes, on autorise la sortie de l'application
  }

  //Redirection page
  void redirectToPage(BuildContext context) {
    if(id== null){
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => ConnexionPage()),
    );}
    return;
  }


}















class JobCard extends StatelessWidget {
  final String id;
  final String title;
  final String location;
  final String description;
  final String company;
  final String imageUrl;

  JobCard({
    required this.id,
    required this.title,
    required this.location,
    required this.description,
    required this.company,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.symmetric(horizontal: 8),
        width: 250,
        child: GestureDetector(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => DetailEmploiPage(
                      id: id,
                      titre: title,
                      entreprise: company,
                      logo: imageUrl,
                      description: description,
                      lieu: location)),
            );
          },
          child: Card(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(4),
                  child: Image.network(
                    imageUrl,
                    height: 150,
                    width: double.infinity,
                    fit: BoxFit.cover,
                  ),
                ),
                SizedBox(height: 8),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 8),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "${title}",
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 4),
                      Text(
                        company + "...",
                        style: TextStyle(
                          color: Colors.grey,
                        ),
                      ),
                      SizedBox(height: 4),
                      Text(
                        location + "...",
                        style: TextStyle(
                          color: Colors.grey,
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 8),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 8),
                  child: ElevatedButton(
                    onPressed: () {},
                    child: Text('Postuler'),
                  ),
                ),
              ],
            ),
          ),
        ));
  }

}
