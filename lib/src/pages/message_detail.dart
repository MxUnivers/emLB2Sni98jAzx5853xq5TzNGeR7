import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman/src/actions/EntrepriseAction.dart';
import 'package:jouman/src/config/theme.dart';
import 'package:intl/intl.dart'; // Importez la bibliothèque intl

import '../model/EntrepriseModel.dart';
import '../model/MessageModel.dart';

class MessageDetailPage extends StatefulWidget {
  final MessageModel? message;
  MessageDetailPage({Key? key, this.message}) : super(key: key);

  @override
  State<MessageDetailPage> createState() => _MessageDetailPageState();
}

class _MessageDetailPageState extends State<MessageDetailPage> {
  void initState() {
    // TODO: implement initState
    super.initState();
    fetchEntrepriseByMessage(widget.message!.idSender!).then((ent) {
      setState(() {
        entreprise = ent;
      });
    });
  }

  late EnterpriseModel entreprise = EnterpriseModel(fullName: "");

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
    final formattedDateTime =
        formatDateTime(widget.message!.createdAt.toString());

    return Scaffold(
      appBar: AppBar(
        leading: BackButton(
          color: AppTheme_App.TextGray,
        ),
        backgroundColor: AppTheme_App.withPrimary,
        title: Text(
          'Détails du message',
          style: GoogleFonts.nunito(color: AppTheme_App.TextGray),
        ),
        elevation: 0.2,
      ),
      body: Container(
        decoration: BoxDecoration(color: AppTheme_App.withPrimary),
        height: MediaQuery.of(context).size.height,
        child: SingleChildScrollView(
            child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                widget.message!.subject.toString(),
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
              SizedBox(height: 8),
              Row(
                children: [
                  CircleAvatar(
                    radius: 24,
                    backgroundColor: Colors.transparent,
                    backgroundImage:
                        NetworkImage(widget.message!.coverPicture.toString()),
                  ),
                  SizedBox(width: 8),
                  Text(
                    'De: ${entreprise.fullName}',
                    style: TextStyle(fontSize: 16),
                  ),
                ],
              ),
              SizedBox(height: 8),
              Text(
                'Date: $formattedDateTime', // Affichez la date et l'heure formatées
                style: TextStyle(fontSize: 16),
              ),
              SizedBox(height: 16),
              Divider(),
              SizedBox(height: 16),
              Text(
                widget.message!.content.toString(),
                style: TextStyle(fontSize: 16),
              ),
              // Vous pouvez ajouter d'autres éléments ou personnaliser davantage la mise en page ici
            ],
          ),
        )),
      ),
    );
  }
}
