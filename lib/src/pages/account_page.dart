import "package:flutter/cupertino.dart";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:jouman_mobile_mobile/src/model/CandidatModel.dart";
import "package:jouman_mobile_mobile/src/pages/profile_page.dart";
import "package:jouman_mobile_mobile/src/pages/sigin_page.dart";
import "package:jouman_mobile_mobile/src/utils/storage.dart";

import "candidatures_page.dart";
import "message_page.dart";
import "offre_postules.dart";

class ProfileCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        onTap: () {
          Navigator.push(
            context,
            CupertinoPageRoute(
              builder: (context) => ProfilePage(),
            ),
          );
        },
        leading: Icon(Icons.person),
        title: Text('Profil'),
        subtitle: Text('Voir votre profil'),
      ),
    );
  }
}

class ApplicationCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        onTap: () {
          Navigator.push(
            context,
            CupertinoPageRoute(
              builder: (context) => CandidaturesPage(),
            ),
          );
        },
        leading: Icon(Icons.assignment),
        title: Text('Candidatures'),
        subtitle: Text('Voir vos candidatures'),
      ),
    );
  }
}

class MessageCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        onTap: () {
          Navigator.push(
            context,
            CupertinoPageRoute(
              builder: (context) => ReceivedMessagesPage(),
            ),
          );
        },
        leading: Icon(Icons.message),
        title: Text('Messages'),
        subtitle: Text('Voir vos messages'),
      ),
    );
  }
}

class PostulatedAnnouncementCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        onTap: () {
          Navigator.push(
            context,
            CupertinoPageRoute(
              builder: (context) => OffrePostulesPage(),
            ),
          );
        },
        leading: Icon(Icons.post_add),
        title: Text('Annonces Postulées'),
        subtitle: Text('Voir les annonces auxquelles vous avez postulé'),
      ),
    );
  }
}

class AccountPage extends StatefulWidget {
  const AccountPage({Key? key}) : super(key: key);

  @override
  State<AccountPage> createState() => _AccountPageState();
}

class _AccountPageState extends State<AccountPage> {
  late CandidatModel candidat;

  void _showConnectedAuthDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Desconnexion'),
          content: Text('Souhaiter vous vous deconnecter ?'),
          actions: <Widget>[
            TextButton(
              child: Text('Annuler'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
            TextButton(
              style: TextButton.styleFrom(
                  backgroundColor: AppTheme_App.favoriteColor,
                elevation: 0.5
              ),
              child: Text(
                'Autoriser',
                style: GoogleFonts.nunito(color: AppTheme_App.withPrimary),
              ),
              onPressed: () {
                // Ajoutez ici le code pour gérer l'autorisation.
                Navigator.of(context).pop();
                SharedPreferencesService.removeCandidatDataFromSharedPreferences()
                    .then((cand) {
                  Navigator.pushReplacement(
                    context,
                    CupertinoPageRoute(
                      builder: (context) => SignInPage(),
                    )
                  );
                }); // Ferme la boîte de dialogue.
              }
            )
          ]
        );
      }
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme_App.withPrimary,
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.2,
        title: Text(
          'Compte',
          style: TextStyle(color: Colors.black),
        ),
      ),
      body: ListView(
        padding: EdgeInsets.symmetric(horizontal: 10),
        children: [
          ProfileCard(),
          ApplicationCard(),
          MessageCard(),
          PostulatedAnnouncementCard(),
          Card(
              child: ListTile(
            leading: Icon(Icons.exit_to_app),
            title: Text('Déconnexion'),
            subtitle: Text('Se déconnecter de l\'application'),
            onTap: (){
              _showConnectedAuthDialog(context);
            },
          ))
        ],
      ),
    );
  }
}
