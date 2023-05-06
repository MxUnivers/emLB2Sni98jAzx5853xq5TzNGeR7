import 'package:flutter/material.dart';
import "package:http/http.dart" as http;
import "dart:convert";
import "package:get/get.dart";
import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/views/candidature/PostCandidaturePage.dart';
import 'package:mobileoffreemploi/views/emplois/DetailEmploiPage.dart';
import 'package:mobileoffreemploi/views/emplois/ListEmploisPage.dart';
import 'package:mobileoffreemploi/views/emplois/SearchEmploisPage.dart';
import "package:get/get.dart";

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
    _getOffres();
  }

  List<dynamic> offres = [];
  List<dynamic> _data= [];

  Future<List<dynamic>> _getOffres() async {
    final String apiUrl = '${baseurl["url"].toString()}/api/v1/offre/get_offres';

    final response = await http.get(Uri.parse(apiUrl), headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': "${baseurl["TypeToken"].toString()} ${baseurl["token"].toString()}"
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
          title: Text('Offres d\'emploi'),
          centerTitle: true,
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
                                      title: data["titre"].toString(),
                                      location: 'Montréal, QC',
                                      company: 'Google',
                                      imageUrl: 'assets/images/job1.jpg',
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
}

class JobCard extends StatelessWidget {
  final String title;
  final String location;
  final String company;
  final String imageUrl;

  JobCard({
    required this.title,
    required this.location,
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
              MaterialPageRoute(builder: (context) => DetailEmploiPage()),
            );
          },
          child: Card(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(4),
                  child: Image.asset(
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
                            builder: (context) => PostCandidaturePage()),
                      );
                    },
                    child: Text('Postuler'),
                  ),
                ),
              ],
            ),
          ),
        ));
  }
}
