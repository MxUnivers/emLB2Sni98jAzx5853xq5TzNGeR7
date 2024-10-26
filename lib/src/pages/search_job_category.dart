import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman/src/actions/JobAction.dart';
import 'package:jouman/src/config/theme.dart';
import 'package:jouman/src/utils/baseurl.dart';
import 'package:jouman/src/widgets/JobComponent.dart';

import '../model/JobModel.dart';

class SearchCategoryJobPage extends StatefulWidget {
  final String? title;
  SearchCategoryJobPage({Key? key, this.title}) : super(key: key);

  @override
  _SearchCategoryJobPageState createState() => _SearchCategoryJobPageState();
}

class _SearchCategoryJobPageState extends State<SearchCategoryJobPage> {
  List<JobModel> jobList = [];
  List<JobModel> filteredJobList = [];
  bool isLoading = true;
  TextEditingController searchController = TextEditingController();

  @override
  void initState() {
    super.initState();

    // Récupère toutes les offres depuis l'API
    fetchAllJobList(
            "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres")
        .then((jobs) {
      setState(() {
        jobList = jobs;

        // Filtre initial basé sur areaOffre et widget.title
        filteredJobList = jobList.where((job) {
          return job.areaOffre == widget.title;
        }).toList();

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

  // Fonction pour filtrer les offres en fonction de la recherche
  void filterJobs(String query) {
    setState(() {
      filteredJobList = jobList
          .where((job) =>
              job.areaOffre == widget.title &&
              job.title.toString().toLowerCase().contains(query.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
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
              contentPadding: EdgeInsets.symmetric(horizontal: 20, vertical: 0),
              filled: true,
              fillColor: Colors.grey.shade200,
              prefixIcon: Icon(Icons.search, color: Colors.grey),
              border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(50),
                  borderSide: BorderSide.none),
              hintText: "recherche ...",
              hintStyle: TextStyle(fontSize: 14),
            ),
          ),
        ),
      ),
      body: isLoading
          ? Center(child: CircularProgressIndicator()) // Affiche le chargement
          : Container(
              padding: EdgeInsets.only(top: 10, left: 5, right: 5),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  // Titre areaOffre
                  Container(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Container(
                          padding: EdgeInsets.symmetric(horizontal: 10),
                          child: Text(
                            "${widget.title}",
                            style: GoogleFonts.nunito(
                                fontSize: 14,
                                fontWeight: FontWeight.w600,
                                color: AppTheme_App.withGreyOrginal),
                          ),
                        )
                      ],
                    ),
                  ),
                  SizedBox(height: 10),
                  Expanded(
                    child: ListView.builder(
                      itemCount: filteredJobList.length,
                      itemBuilder: (context, index) {
                        var item = filteredJobList[index];
                        return JobComponent(
                          job: item,
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
    );
  }
}
