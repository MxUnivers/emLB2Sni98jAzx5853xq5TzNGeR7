import 'dart:js';

import 'package:flutter/material.dart';
import 'dart:js';

class Alert_Hantigaspi extends StatefulWidget {
  @override
  _Alert_HantigaspiState createState() => _Alert_HantigaspiState();
}

class _Alert_HantigaspiState extends State<Alert_Hantigaspi> {
  @override
  Champ_requis(BuildContext context) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Tous les Champs sont requis'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Icon(
                  Icons.warning_amber,
                  size: 20,
                )
              ],
            ),
          ),
          actions: <Widget>[
            ElevatedButton(
              style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.red.shade700),
              child: Text('Fermer'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    throw UnimplementedError();
  }
}
