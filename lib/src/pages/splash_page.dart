import 'package:flutter/material.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatModel.dart';
import 'package:jouman_mobile_mobile/src/pages/app_step_page.dart';
import 'package:jouman_mobile_mobile/src/pages/home_page.dart';
import 'package:jouman_mobile_mobile/src/pages/mainPage.dart';
import 'package:jouman_mobile_mobile/src/pages/sigin_page.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../config/locallvalue.dart';
import '../utils/storage.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {


  void initState() {
    super.initState();
    SharedPreferencesService.getCandidatDataFromSharedPreferences().then((candidat) {
      setState(() {
        this.candidat = candidat;
      });
    });
  }
  late CandidatModel candidat = CandidatModel(account: AccountCandidatModel(),
      is_active: false
  ) ;

  bool isConnect = false;
  bool isVisited = true;





  @override
  Widget build(BuildContext context) {
    Future.delayed(Duration(seconds: 4), () async {
      final SharedPreferences prefs = await SharedPreferences.getInstance();
      if(candidat.is_active==false){
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => SignInPage()),
        );// Naviguer vers la page d'accueil
      }else if (candidat.is_active==true){
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => MainPage()),
        );
      }
    });

    return Scaffold(
      backgroundColor: AppTheme_App.primaryColor,
      body: Center(
        child: Container(
          height: 105, width: 105,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(52.5),
            color: AppTheme_App.withPrimary,
            image: DecorationImage(image: AssetImage(
              "assets/ic_launcher.png"
            ))
          ),
        ) // Remplacez le chemin par le chemin vers votre icône
      ),
    );
  }
}
