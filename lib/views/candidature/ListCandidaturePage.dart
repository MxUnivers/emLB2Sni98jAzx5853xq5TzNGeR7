import 'package:flutter/material.dart';

class ListCandidaturePage extends StatefulWidget {
  const ListCandidaturePage({Key? key}) : super(key: key);

  @override
  State<ListCandidaturePage> createState() => _ListCandidaturePageState();
}

class _ListCandidaturePageState extends State<ListCandidaturePage> {
  List<dynamic> candidatures = [
    {
      "id": "1",
      "titre": "Candidature 1",
      "description": "Description de la candidature 1",
    },
    {
      "id": "2",
      "titre": "Candidature 2",
      "description": "Description de la candidature 2",
    },
    // Ajoutez d'autres candidatures ici
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Candidature"),
          centerTitle: true,
          backgroundColor: Colors.blue.shade800,
        ),
        body: Container(
          child: Column(
              children: candidatures
                  .map((data) => Card(
                      child: ListTile(
                          title: Text(data["titre"].toString()),
                          subtitle: Container(
                            child: Text(data["description"].toString()),
                          ),
                          trailing: Container(
                            child: Text("En attente"),
                          ),
                          leading: Image.network("https://avatars.githubusercontent.com/u/107148545?v=4",),
                          onTap: () {
                            showDialog(
                              context: context,
                              builder: (BuildContext context) {
                                return AlertDialog(
                                  title: Text(data["titre"].toString()),
                                  content: Text(data["description"].toString()),
                                  actions: [
                                    TextButton(
                                      onPressed: () {
                                        Navigator.of(context).pop();
                                      },
                                      child: Text('Fermer'),
                                    ),
                                  ],
                                );
                              },
                            );
                          })))
                  .toList()),
        ));
  }
}
