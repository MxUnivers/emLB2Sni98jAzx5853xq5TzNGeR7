import "package:flutter/material.dart";
import "package:http/http.dart" as http;
import "dart:convert";
import "dart:core";
import "dart:ui";

import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/views/emplois/DetailEmploiPage.dart';

class SearchEmploisPage extends StatefulWidget {
  const SearchEmploisPage({Key? key}) : super(key: key);
  @override
  State<SearchEmploisPage> createState() => _SearchEmploisPageState();
}

class _SearchEmploisPageState extends State<SearchEmploisPage> {
  bool _isInit = true;
  bool isLoading = false;

  TextEditingController searchController = TextEditingController();
  TextEditingController _searchController = TextEditingController();
  List<Map<String, dynamic>> filteredList = [];

  @override
  void initState() {
    if (_isInit) {
      super.initState();
      _getOffres();
      _isInit = false;
    }
    super.didChangeDependencies();
  }

  List<dynamic> offres = [];
  List<dynamic> offres2 = [];

  Future<void> _getOffres() async {
    final String apiUrl =
        '${baseurl["url"].toString()}/api/v1/offre/get_offres';

    setState(() {
      isLoading = true;
    });
    final response = await http.get(Uri.parse(apiUrl), headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':
          "${baseurl["TypeToken"].toString()} ${baseurl["token"].toString()}"
    });

    if (response.statusCode == 200 || response.statusCode == 300) {
      setState(() {
        isLoading = false;
        Map<String, dynamic> _data = jsonDecode(response.body);
        print(offres);
        offres = _data["data"];
        offres2 = _data["data"];
      });
      offres;
    } else {
      throw Exception('Failed to load offres');
      setState(() {
        isLoading = false;
      });
    }
  }

  List<dynamic> searchResults = [];
  void performSearch(String searchTerm) {
    if (searchTerm == "") {
      offres = offres2;
    }
    setState(() {
      searchResults = offres.where((offre) {
        String titre = offre["titre"].toString().toLowerCase();
        String entreprise = offre["entreprise"].toString().toLowerCase();
        String secteur_activites =
            offre["secteur_activites"].toString().toLowerCase();
        String dateDebut = offre["dateDebut"].toString().toLowerCase();

        return titre.contains(searchTerm.toLowerCase()) ||
            entreprise.contains(searchTerm.toLowerCase()) ||
            secteur_activites.contains(searchTerm.toLowerCase()) ||
            dateDebut.contains(searchTerm.toLowerCase());
      }).toList();
      offres = searchResults;
    });
  }

  @override
  Widget build(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;

    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.blue.shade900,
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.search),
              onPressed: () {},
            ),
          ],
          title: Text("Recherche ..."),
          bottom: PreferredSize(
            preferredSize: Size.fromHeight(48.0),
            child: Padding(
              padding: EdgeInsets.only(left: 16.0, right: 16.0, bottom: 8.0),
              child: TextField(
                controller: _searchController,
                onChanged: (value) {
                  performSearch(
                      value); // Appeler la fonction de recherche à chaque changement de texte
                },
                decoration: InputDecoration(
                  hintText: 'Recherche',
                  suffixIcon: IconButton(
                    icon: Icon(Icons.clear),
                    onPressed: () => _searchController.clear(),
                  ),
                  filled: true,
                  fillColor: Colors.white,
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(25.0)),
                    borderSide: BorderSide.none,
                  ),
                ),
              ),
            ),
          ),
          centerTitle: true,
        ),
        backgroundColor: Colors.grey.shade50,
        body: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Stack(children: [
              // Les éléments de la page
              Container(
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      SizedBox(
                        height: 10,
                      ),
                      Container(
                        child: SingleChildScrollView(
                            scrollDirection: Axis.vertical,
                            child: offres.length > 0
                                ? Container(
                                    child: Column(
                                        children: offres
                                            .map((data) => JobCard(
                                                  id: data["_id"].toString(),
                                                  title:
                                                      data["titre"].toString(),
                                                  description:
                                                      data["description"]
                                                          .toString(),
                                                  location:
                                                      data["lieu"].toString(),
                                                  company: data["entreprise"]
                                                          .toString()
                                                          .substring(0, 10) +
                                                      "...",
                                                  imageUrl: data["logo"]
                                                              .toString() ==
                                                          null
                                                      ? data["logo"].toString()
                                                      : "https://icon-library.com/images/icon-job/icon-job-3.jpg",
                                                ))
                                            .toList()))
                                : Container(
                                    decoration: BoxDecoration(
                                        color: Colors.grey.shade100,
                                        borderRadius:
                                            BorderRadius.circular(10)),
                                    padding: EdgeInsets.symmetric(
                                        horizontal: 10, vertical: 5),
                                    child: Text(
                                        "Rien trouvé dans la recherche .."))),
                      ),
                    ]),
                // Définissez ici le contenu de votre page
              ),
              isLoading
                  ? Container(
                      height: screenHeight,
                      color: Colors.black.withOpacity(0.3),
                      child: Center(
                        child: CircularProgressIndicator(),
                      ),
                    )
                  : SizedBox(),
            ])));
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
      width: double.infinity,
      child: Card(
        margin: EdgeInsets.fromLTRB(3, 5, 3, 5),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(4),
              child: Container(
                color: Colors.blueGrey,
                child: Image.network(
                  imageUrl,
                  height: 70,
                  width: double.infinity,
                  fit: BoxFit.contain,
                ),
              )
            ),
            SizedBox(height: 8),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 4),
                  Text(
                    company,
                    style: TextStyle(
                      color: Colors.grey,
                    ),
                  ),
                  SizedBox(height: 4),
                  Text(
                    location,
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
                onPressed: () {
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
                child: Text('Postuler'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
