import 'package:flutter/material.dart';
import 'package:mobileoffreemploi/views/auth/ConnexionPage.dart';
import 'package:flutter/services.dart';




void main() {
  SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp, // Orientation portrait uniquement
    DeviceOrientation.portraitDown,
  ]);
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
      home: ConnexionPage(),
    );
  }
}
