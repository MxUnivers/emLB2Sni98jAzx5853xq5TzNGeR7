import "package:flutter/material.dart";
import 'package:jouman/src/actions/JobAction.dart';
import 'package:jouman/src/config/theme.dart';
import 'package:jouman/src/utils/baseurl.dart';
import '../model/JobModel.dart';
import '../widgets/JobComponent.dart';

class SearchPage extends StatefulWidget {
  SearchPage({Key? key, this.title}) : super(key: key);
  final String? title;

  @override
  _SearchPageState createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  bool isLoading = true;
  List<JobModel> jobList = [];
  List<JobModel> filteredJobList =
      []; // Liste pour les résultats de la recherche
  TextEditingController searchController = TextEditingController();

  @override
  void initState() {
    super.initState();

    // Récupère toutes les offres depuis l'API
    fetchAllJobList(
      "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres",
    ).then((jobs) {
      setState(() {
        jobList = jobs;
        filteredJobList =
            jobList; // Initialise filteredJobList avec toutes les offres
        isLoading = false;
      });
    });

    // Ajoute un écouteur pour la recherche
    searchController.addListener(() {
      filterJobs(searchController.text);
    });
  }

  @override
  void dispose() {
    searchController.dispose(); // Libère le contrôleur de recherche
    super.dispose();
  }

  // Fonction de filtre pour la recherche dans jobList
  void filterJobs(String query) {
    setState(() {
      filteredJobList = jobList
          .where((job) =>
              job.title.toString().toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return PageView(
      physics: NeverScrollableScrollPhysics(),
      children: [
        Scaffold(
          backgroundColor: AppTheme_App.withPrimary,
          appBar: AppBar(
            backgroundColor: AppTheme_App.withPrimary,
            elevation: 0.5,
            leadingWidth: 40,
            leading: BackButton(
              color: AppTheme_App.withGreyOrginal,
            ),
            title: Container(
              height: 45,
              child: TextField(
                controller: searchController,
                cursorColor: Colors.grey,
                decoration: InputDecoration(
                  contentPadding:
                      EdgeInsets.symmetric(horizontal: 20, vertical: 0),
                  filled: true,
                  fillColor: Colors.grey.shade200,
                  prefixIcon: Icon(Icons.search, color: Colors.grey),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(50),
                    borderSide: BorderSide.none,
                  ),
                  hintText: "recherche ...",
                  hintStyle: TextStyle(fontSize: 14),
                ),
              ),
            ),
          ),
          body: isLoading
              ? Center(
                  child:
                      CircularProgressIndicator()) // Indicateur de chargement
              : Container(
                  padding: EdgeInsets.only(top: 10, left: 5, right: 5),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      SizedBox(height: 10),
                      Expanded(
                        child: SingleChildScrollView(
                          scrollDirection: Axis.vertical,
                          child: Container(
                            child: ListView.builder(
                              shrinkWrap: true,
                              physics: NeverScrollableScrollPhysics(),
                              itemCount: filteredJobList.length,
                              itemBuilder: (context, index) {
                                var item = filteredJobList[index];
                                return JobComponent(
                                  job: item,
                                );
                              },
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
        )
      ],
    );
  }
}
