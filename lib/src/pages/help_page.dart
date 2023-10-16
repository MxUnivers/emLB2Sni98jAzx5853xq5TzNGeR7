import  "package:flutter/material.dart";


class HelpPage extends StatefulWidget {
  const HelpPage({Key? key}) : super(key: key);

  @override
  State<HelpPage> createState() => _HelpPageState();
}

class _HelpPageState extends State<HelpPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Aide'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            HelpCard(
              title: "Politique d'utilisation",
              description: "Consultez notre politique d'utilisation",
            ),
            HelpCard(
              title: "Centre d'assistance",
              description: "Obtenez de l'aide de notre équipe d'assistance",
            ),
            HelpCardWithButton(
              title: "Notification avec bouton",
              description: "Recevez des notifications avec un bouton d'action",
              buttonText: "Activer les notifications",
            ),
          ],
        ),
      ),
    );
  }
}



class HelpCard extends StatelessWidget {
  final String title;
  final String description;

  HelpCard({required this.title, required this.description});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        title: Text(title),
        subtitle: Text(description),
      ),
    );
  }
}

class HelpCardWithButton extends StatelessWidget {
  final String title;
  final String description;
  final String buttonText;

  HelpCardWithButton(
      {required this.title, required this.description, required this.buttonText});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        children: [
          ListTile(
            title: Text(title),
            subtitle: Text(description),
          ),
          ElevatedButton(
            onPressed: () {
              // Ajoutez ici le code pour le bouton
            },
            child: Text(buttonText),
          ),
        ],
      ),
    );
  }
}


