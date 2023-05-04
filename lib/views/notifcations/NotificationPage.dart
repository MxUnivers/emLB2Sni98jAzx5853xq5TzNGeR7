import 'package:flutter/material.dart';

class NotificationPage extends StatelessWidget {
  const NotificationPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue.shade900,
        leading: IconButton(
          onPressed: () {},
          icon: Icon(Icons.arrow_back_ios),
        ),
        title: Text("Notifications"),
        centerTitle: true,
      ),
      body: ListView(
        children: [
          NotificationCard(
            title: 'Nouvelle offre d\'emploi'.substring(0,15)+" ...",
            description: 'Un nouveau poste de Développeur web est disponible.'.substring(0,35)+"...",
            date: 'Hier',
          ),
          NotificationCard(
            title: 'Candidature reçue'.substring(0,15)+" ...",
            description: 'Vous avez reçu une nouvelle candidature pour le poste de Designer graphique.'.substring(0,35)+"...",
            date: 'Avant-hier',
          ),
          NotificationCard(
            title: 'Mise à jour de l\'offre d\'emploi'.substring(0,15)+" ...",
            description: 'L\'offre de Développeur mobile a été mise à jour.'.substring(0,35)+"...",
            date: '2 jours auparavant',
          ),
        ],
      ),
    );
  }
}

class NotificationCard extends StatelessWidget {
  final String title;
  final String description;
  final String date;

  NotificationCard({
    required this.title,
    required this.description,
    required this.date,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      child: Card(
        child: ListTile(
          title: Text(
            title,
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          subtitle: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 4),
              Text(description),
              SizedBox(height: 4),
              Text(
                date,
                style: TextStyle(color: Colors.grey),
              ),
            ],
          ),
          trailing: Icon(Icons.arrow_forward_ios),
          onTap: () {},
        ),
      ),
    );
  }
}
