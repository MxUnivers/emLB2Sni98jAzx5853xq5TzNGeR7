import 'package:flutter/material.dart';
import 'package:mobileoffreemploi/views/auth/ConnexionPage.dart';
import 'package:mobileoffreemploi/views/auth/InscriptionPage.dart';
import 'package:mobileoffreemploi/views/candidature/PostCandidaturePage.dart';
import 'package:mobileoffreemploi/views/emplois/DetailEmploiPage.dart';
import 'package:mobileoffreemploi/views/emplois/ListEmploisPage.dart';
import 'package:mobileoffreemploi/views/emplois/SearchEmploisPage.dart';
import 'package:mobileoffreemploi/views/profile/ProfilePage.dart';

import 'views/HomePage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: DetailEmploiPage(),
    );
  }
}

