import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';

import '../model/CandidatureModel.dart';

class CandidatureDetailPage extends StatefulWidget {
  final CandidatureModel? candidature; // URL de l'image de l'offre d'emploi

  CandidatureDetailPage({this.candidature});

  @override
  _CandidatureDetailPageState createState() => _CandidatureDetailPageState();
}

class _CandidatureDetailPageState extends State<CandidatureDetailPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0.5,
        backgroundColor: AppTheme_App.withPrimary,
        title: Text(
          'Détails de la candidature',
          style: GoogleFonts.nunito(color: AppTheme_App.TextGray),
        ),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Card(
              elevation: 2,
              child: Column(
                children: <Widget>[
                  Image.network(
                    widget.candidature!.coverPicture
                        .toString(), // Afficher l'image de l'offre d'emploi depuis l'URL
                    fit: BoxFit.cover,
                  ),
                  ListTile(
                    title: Text(
                      widget.candidature!.title.toString(),
                      style:
                          TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                    ),
                    subtitle: Text('Date : ${widget.candidature?.createdAt}'),
                  ),
                ],
              ),
            ),
            SizedBox(height: 20),
            Text(
              'Statut de la candidature:',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            Container(
                padding: EdgeInsets.symmetric(horizontal: 5, vertical: 3),
                decoration: BoxDecoration(
                    color: AppTheme_App.primaryColor,
                    borderRadius: BorderRadius.circular(4)),
                child: Text(
                  widget.candidature!.status.toString(),
                  style:
                      TextStyle(fontSize: 16, color: AppTheme_App.withPrimary),
                )),
            SizedBox(height: 20),
            Text(
              'Description de candidatutre:',
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            Text(
              widget.candidature!.description.toString(),
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}
