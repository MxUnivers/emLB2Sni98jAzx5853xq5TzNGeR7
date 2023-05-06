import "package:flutter/material.dart";
import "package:http/http.dart" as http;
import "dart:convert";
import "dart:core";
import "dart:ui";

import 'package:mobileoffreemploi/config/baseurl.dart';

class SearchEmploisPage extends StatefulWidget {
  const SearchEmploisPage({Key? key}) : super(key: key);
  @override
  State<SearchEmploisPage> createState() => _SearchEmploisPageState();
}

class _SearchEmploisPageState extends State<SearchEmploisPage> {

  bool _isInit = true;

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
  List<dynamic> _data = [];

  Future<void> _getOffres() async {
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
      offres;
    } else {
      throw Exception('Failed to load offres');
    }
  }


  void filterSearchResults(String query) {
    List<dynamic> searchList = [];
    searchList.addAll(offres);
    if (query.isNotEmpty) {
      List<Map<String, dynamic>> tempList = [];
      searchList.forEach((item) {
        if (item['titre'].toLowerCase().contains(query.toLowerCase())) {
          tempList.add(item);
        }
      });
      setState(() {
        filteredList = tempList;
      });
      return;
    } else {
      List<Map<String,dynamic>> offres = [];
      setState(() {
        filteredList = offres;
      });
    }
  }




  @override
  Widget build(BuildContext context) {
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
                onSubmitted: (value) {
                  filterSearchResults(value);
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
        backgroundColor: Colors.blue.shade100,
        body: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  SizedBox(height: 10,),
                  Container(
                    child: SingleChildScrollView(
                      scrollDirection: Axis.vertical,
                      child:
                          offres.length > 0 ?
                          Container(
                            child:
                            Column(
                              children:
                            offres.map((e) =>
                                JobCard(
                                  title: 'Développeur web',
                                  location: 'Montréal, QC',
                                  company: 'Google',
                                  imageUrl: 'assets/images/job1.jpg',
                                )
                            ).toList()

                          )
                    ):

                              Container(
                                child:Text("Rien trouvé dans la recherche ..")
                              )

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
      width: double.infinity,
      child: Card(
        margin: EdgeInsets.fromLTRB(3, 5, 3, 5),
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
                onPressed: () {},
                child: Text('Postuler'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
