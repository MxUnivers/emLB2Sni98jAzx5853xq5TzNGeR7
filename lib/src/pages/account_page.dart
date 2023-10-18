import "package:flutter/cupertino.dart";
import  "package:flutter/material.dart";

import "candidatures_page.dart";
import "message_page.dart";
import "offre_postules.dart";


class ProfileCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
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
        onTap: (){
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
        onTap: (){
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
        onTap: (){
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

class LogoutCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: Icon(Icons.exit_to_app),
        title: Text('Déconnexion'),
        subtitle: Text('Se déconnecter de l\'application'),
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
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0.2,
        title: Text('Compte',style: TextStyle(color: Colors.black),),
      ),
      body: ListView(
        children: [
          ProfileCard(),
          ApplicationCard(),
          MessageCard(),
          PostulatedAnnouncementCard(),
          LogoutCard(),
        ],
      ),
    );
  }
}
