import "package:flutter/material.dart";
import "package:http/http.dart" as http;
import 'dart:ui';
import 'dart:convert';

import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/views/emplois/DetailEmploiPage.dart';
import "package:carousel_slider/carousel_slider.dart";
import "package:mobileoffreemploi/config/options/optionSuggestions.dart";
import 'package:mobileoffreemploi/views/emplois/SearchEmploisPage.dart';

class ListEmploisPage extends StatefulWidget {
  @override
  _ListEmploisPageState createState() => _ListEmploisPageState();
}

class _ListEmploisPageState extends State<ListEmploisPage> {
  bool _isInit = true;

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
        appBar: AppBar(
          backgroundColor: Colors.blue.shade900,
          leading: IconButton(
            onPressed: () {
              Navigator.pop(context);
            },
            icon: Icon(Icons.arrow_back_ios),
          ),
          title: Text("Listes des offres d'emplois"),
          centerTitle: true,
          actions: [
            IconButton(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => SearchEmploisPage()),
                  );
                },
                icon: Icon(Icons.search))
          ],
        ),
        body: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Suggestion de recherche
                  CarouselSlider(
                    options: CarouselOptions(
                      height: 50.0,
                      enlargeCenterPage: true,
                      enableInfiniteScroll: false,
                    ),
                    items: suggestions.map((suggestion) {
                      return Builder(
                        builder: (BuildContext context) {
                          return Container(
                            decoration: BoxDecoration(
                                color: Colors.grey,
                                borderRadius: BorderRadius.circular(5)),
                            padding: EdgeInsets.symmetric(horizontal: 20),
                            margin: EdgeInsets.symmetric(
                                horizontal: 8.0, vertical: 5),
                            child: Center(
                                child: MaterialButton(
                              onPressed: () {},
                              child: Text(
                                "${suggestion}",
                                style: TextStyle(
                                    fontSize: 16.0, color: Colors.white),
                              ),
                            )),
                          );
                        },
                      );
                    }).toList(),
                  ),
                  SingleChildScrollView(
                      scrollDirection: Axis.vertical,
                      child: Column(children: [
                        offres.length > 0
                            ? Container(
                                child: Column(
                                    children: offres
                                        .map((data) => JobCard(
                                              id: data["_id"].toString(),
                                              title: data["titre"].toString(),
                                              description: data["description"]
                                                  .toString(),
                                              location: data["lieu"].toString(),
                                              company: data["entreprise"]
                                                      .toString()
                                                      .substring(0, 20) +
                                                  "...",
                                              imageUrl: data["logo"]
                                                          .toString() ==
                                                      null
                                                  ? data["logo"].toString()
                                                  : "https://icon-library.com/images/icon-job/icon-job-3.jpg",
                                            ))
                                        .toList()))
                            : Container(
                                color: Colors.grey.shade100,
                                padding: EdgeInsets.all(10),
                                child: Center(
                                  child: CircularProgressIndicator(
                                    color: Colors.white,
                                    backgroundColor: Colors.blue,
                                  ),
                                ))
                      ]))
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
    return MaterialButton(
      onPressed: () {},
      child: Container(
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
                    height: 150,
                    width: double.infinity,
                    fit: BoxFit.contain,
                  ),
                ),
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
                      company == null ? "Aucune" : company,
                      style: TextStyle(
                        color: Colors.grey,
                      ),
                    ),
                    SizedBox(height: 4),
                    Row(
                      children: [
                        Icon(Icons.maps_home_work),
                        SizedBox(
                          width: 10,
                        ),
                        Text(
                          location,
                          style: TextStyle(
                            color: Colors.grey,
                          ),
                        ),
                      ],
                    )
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
      ),
    );
  }
}
