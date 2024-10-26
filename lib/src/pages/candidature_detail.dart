import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:intl/intl.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';

import '../model/CandidatureModel.dart';

class CandidatureDetailPage extends StatefulWidget {
  final CandidatureModel? candidature; // URL de l'image de l'offre d'emploi

  CandidatureDetailPage({this.candidature});

  @override
  _CandidatureDetailPageState createState() => _CandidatureDetailPageState();
}

class _CandidatureDetailPageState extends State<CandidatureDetailPage> {
  Color getStatusColor(String status) {
    switch (status) {
      case 'PENDING':
        return Colors.orange; // Couleur pour "en cours"
      case 'VALIDATE':
        return Colors.green; // Couleur pour "validé"
      case 'CANCEL':
        return Colors.red; // Couleur pour "annulé"
      default:
        return AppTheme_App.withPrimary; // Couleur par défaut
    }
  }

  String getStatusText(String status) {
    switch (status) {
      case 'PENDING':
        return 'En cours';
      case 'VALIDATE':
        return 'Validé';
      case 'CANCEL':
        return 'Annulé';
      default:
        return 'Inconnu'; // Valeur par défaut si aucun statut ne correspond
    }
  }

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
          elevation: 0.5,
          backgroundColor: AppTheme_App.withPrimary,
          title: Text(
            'Détails de la candidature',
            style: GoogleFonts.nunito(color: AppTheme_App.TextGray),
          ),
        ),
        body: Container(
          decoration: BoxDecoration(color: AppTheme_App.withPrimary),
          child: Padding(
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
                          style: TextStyle(
                              fontSize: 18, fontWeight: FontWeight.bold),
                        ),
                        subtitle: Text(
                            'Date : ${formatDateTime(widget.candidature!.createdAt.toString())}'),
                      ),
                    ],
                  ),
                ),
                SizedBox(height: 20),
                Text(
                  'Etat:',
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold),
                ),
                Container(
                    padding: EdgeInsets.symmetric(horizontal: 5, vertical: 3),
                    decoration: BoxDecoration(
                        color: getStatusColor(
                            widget.candidature!.status.toString()),
                        borderRadius: BorderRadius.circular(4)),
                    child: Text(
                      getStatusText(widget.candidature!.status.toString()),
                      style: TextStyle(
                          fontSize: 16, color: AppTheme_App.withPrimary),
                    )),
                SizedBox(height: 20),
                widget.candidature!.description != null
                    ? Text(
                        '',
                        style: TextStyle(
                            fontSize: 12, fontWeight: FontWeight.bold),
                      )
                    : Container(),
                Text(
                  widget.candidature!.description.toString(),
                  style: TextStyle(fontSize: 12),
                ),
              ],
            ),
          ),
        ));
  }
}
