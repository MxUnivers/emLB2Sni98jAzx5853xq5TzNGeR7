import 'package:flutter/material.dart';
import 'package:mobileoffreemploi/views/emplois/DetailEmploiPage.dart';

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
              id: "",
              titre: "Developpeur web",
              entreprise: "Entreprise SGBCI",
              lieu: "ABidjan",
              logo: "Logo",
              description: "Nous recherchons un developpeur web fullstack"),
        ],
      ),
    );
  }
}

class NotificationCard extends StatelessWidget {
  final String id;
  final String titre;
  final String entreprise;
  final String description;
  final String lieu;
  final String logo;

  NotificationCard({
    required this.id,
    required this.titre,
    required this.entreprise,
    required this.lieu,
    required this.logo,
    required this.description
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      child: Card(
        child: ListTile(
          title: Text(
            titre,
            style: TextStyle(fontWeight: FontWeight.bold),
          ),
          subtitle: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(height: 4),
              Text(description),
              SizedBox(height: 4),
              Text(
                "10/06/2023",
                style: TextStyle(color: Colors.grey),
              ),
            ],
          ),
          trailing: Icon(Icons.arrow_forward_ios),
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => DetailEmploiPage(
                      id:  id,
                      titre: titre,
                      entreprise: entreprise,
                      logo: logo,
                      description: description,
                      lieu: lieu
                  )),
            );
          },
        ),
      ),
    );
  }
}
