import "package:flutter/cupertino.dart";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:intl/intl.dart";
import "package:jouman/src/actions/CandidatureAction.dart";

import "../config/theme.dart";
import "../model/CandidatModel.dart";
import "../model/CandidatureModel.dart";
import "../utils/storage.dart";
import "candidature_detail.dart";

class CandidaturesPage extends StatefulWidget {
  const CandidaturesPage({Key? key}) : super(key: key);

  @override
  State<CandidaturesPage> createState() => _CandidaturesPageState();
}

class _CandidaturesPageState extends State<CandidaturesPage> {
  void initState() {
    // TODO: implement initState
    super.initState();

    SharedPreferencesService.getCandidatDataFromSharedPreferences()
        .then((candidat) {
      setState(() {
        this.candidat = candidat;
      });
      fetchAllCandidatureList(this.candidat.id.toString()).then((candidatures) {
        setState(() {
          // Mettre à jour la liste des offres récupérées
          candidaturesList = candidatures;
        });
      }).then((s) {
        setState(() {
          isLoading = false;
        });
      });
    });
  }

  late CandidatModel candidat;

  bool isLoading = true;
  List<CandidatureModel> candidaturesList = [];

  String formatDateTime(String dateTimeString) {
    final dateTime = DateTime.parse(dateTimeString);
    final dateFormat = DateFormat.yMMMMd();
    final timeFormat = DateFormat.Hm();

    final formattedDate = dateFormat.format(dateTime);
    final formattedTime = timeFormat.format(dateTime);

    return '$formattedDate à $formattedTime';
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(
          color: AppTheme_App.TextGray,
        ),
        backgroundColor: AppTheme_App.withPrimary,
        title: Text("Candidatures",
            style: GoogleFonts.nunito(color: AppTheme_App.TextGray)),
        elevation: 0.2,
      ),
      body: Container(
          decoration: BoxDecoration(color: AppTheme_App.withPrimary),
          height: MediaQuery.of(context).size.height,
          child: isLoading == true
              ? Center(
                  child: CircularProgressIndicator(
                    color: AppTheme_App.primaryColor,
                  ),
                )
              : candidaturesList.length > 0
                  ? ListView(
                      children: candidaturesList.map((candidature) {
                        return Card(
                          margin: EdgeInsets.all(8),
                          child: ListTile(
                            onTap: () {
                              Navigator.push(
                                context,
                                CupertinoPageRoute(
                                  builder: (context) => CandidatureDetailPage(
                                      candidature: candidature),
                                ),
                              );
                            },
                            leading: Image.network(
                                candidature.coverPicture.toString()),
                            title: Text(candidature.title.toString()),
                            subtitle: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  candidature.description.toString(),
                                  maxLines: 1,
                                ),
                                Text(formatDateTime(
                                    candidature.createdAt.toString())),
                              ],
                            ),
                          ),
                        );
                      }).toList(),
                    )
                  : Center(
                      child: Text("Aucunes candidatures pour l'instant"),
                    )),
    );
  }
}
