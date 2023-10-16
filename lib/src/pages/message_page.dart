import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';

import '../actions/MessageAction.dart';
import '../model/CandidatModel.dart';
import '../model/MessageModel.dart';

import 'package:flutter/material.dart';

import '../utils/storage.dart';
import 'message_detail.dart';

class ReceivedMessagesPage extends StatefulWidget {
  @override
  _ReceivedMessagesPageState createState() => _ReceivedMessagesPageState();
}

class _ReceivedMessagesPageState extends State<ReceivedMessagesPage> {
  void initState() {
    // TODO: implement initState
    super.initState();

    SharedPreferencesService.getCandidatDataFromSharedPreferences()
        .then((candidat) {
      setState(() {
        this.candidat = candidat;
      });
      fetchAllMessageList(this.candidat.id.toString()).then((messages) {
        setState(() {
          // Mettre à jour la liste des offres récupérées
          receivedMessages = messages;
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
  List<MessageModel> receivedMessages = [];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        elevation: 0.5,
        backgroundColor: AppTheme_App.withPrimary,
        title: Text(
          'Messages Recues des offres',
          style: GoogleFonts.nunito(color: AppTheme_App.TextGray),
        ),
      ),
      body: Container(
          height: MediaQuery.of(context).size.height,
          child: isLoading == true
              ? Center(
                  child: CircularProgressIndicator(
                  color: AppTheme_App.primaryColor,
                ))
              : receivedMessages.length > 0
                  ? ListView(
                      scrollDirection: Axis.vertical,
                      children: receivedMessages.map((message) {
                        return ListTile(
                          onTap: () {
                            Navigator.push(
                              context,
                              CupertinoPageRoute(
                                builder: (context) => MessageDetailPage(
                                  message: message,
                                ),
                              ),
                            );
                          },
                          leading: CircleAvatar(
                            backgroundImage:
                                NetworkImage(message.coverPicture!),
                          ),
                          title: Text(message.subject!),
                          subtitle: Text(message.createdAt.toString()),
                          trailing: message.read!
                              ? Icon(
                                  Icons.check,
                                  color: Colors.blue,
                                )
                              : Icon(Icons.circle),
                        );
                      }).toList(),
                    )
                  : Center(
                      child: Text("Aucun message recues",style:GoogleFonts.nunito(color: AppTheme_App.TextGray)),
                    )),
    );
  }
}
