import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:offre_emplois_mobile_candidat/src/config/theme.dart";
import "package:offre_emplois_mobile_candidat/src/model/CandidatModel.dart";
import "package:offre_emplois_mobile_candidat/src/pages/home_page.dart";
import "package:offre_emplois_mobile_candidat/src/pages/mainPage.dart";
import "package:shared_preferences/shared_preferences.dart";

import "../config/locallvalue.dart";
import "../widgets/step_compo.dart";


class AppStepScreen extends StatefulWidget {
  @override
  _AppStepScreenState createState() => _AppStepScreenState();
}

class _AppStepScreenState extends State<AppStepScreen> {
  final _pageController = PageController(initialPage: 0);



  @override
  void initState() {
    super.initState();
  }

  late CandidatModel accountUser;
  bool isVisited = false;


  Future<void> setDataProfileConnexion() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    prefs.setBool(storageProfile["isVisited"].toString(), true);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme_App.withPrimary,
      /*appBar: AppBar(
        leading: Padding(
          padding: EdgeInsets.all(3),
          child: Container(
            decoration: 
            BoxDecoration(
              borderRadius: BorderRadius.circular(15),
              image: DecorationImage(image: AssetImage("assets/logo_antigaspi.png"))
            ),
          ),
        ),
        elevation: 0,
        backgroundColor: AppTheme_App.withPrimary,
        title: Text('',style: GoogleFonts.nunito(color: AppTheme_App.TextGray),),
      ),*/
      body: PageView(
        controller: _pageController,
        children: const [
          StepPage(
            imagePath: 'assets/welcome.png',
            title: "Bienvenue ",
            description: "Bienvenue dans Hantigaspi ! Découvrez une nouvelle façon de faire des économies ",
          ),
          StepPage(
            imagePath: 'assets/petis_prix.png',
            title: 'Achetez à petit prix ',
            description: " Parcourez notre catalogue d'invendus et découvrez des offres imbattables sur une variété de produits alimentaires et non alimentaires.",
          ),


          StepPage(
            imagePath: 'assets/livraison.png',
            title: 'Paiement et livraison pratiques',
            description: "Simplifiez votre expérience d'achat avec nos options de paiement sécurisé et nos services de livraison à domicile. Plus besoin de vous déplacer, nous vous apportons vos achats directement chez vous !",
          ),


          StepPage(
            imagePath: 'assets/boutique.png',
            title: 'Retrait en boutique',
            description: "Vous préférez récupérer vos achats en personne ? Optez pour notre service de retrait en boutique et récupérez vos produits à votre convenance.",
          ),
          StepPage(
            imagePath: 'assets/monde.png',
            title: 'Contribuez à un monde meilleur',
            description: "En achetant les invendus, vous participez activement à la lutte contre le gaspillage alimentaire et à la préservation de l'environnement. Ensemble, faisons une différence !",
          ),

          // Ajoutez autant de pages que nécessaire pour chaque étape
        ],
      ),
      bottomNavigationBar: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          TextButton(
            onPressed: () {
              if (_pageController.page!.toInt() > 0) {
                _pageController.previousPage(
                  duration: Duration(milliseconds: 300),
                  curve: Curves.easeInOut,
                );
                print(_pageController.page!.toInt().toString()+" position "+ (_pageController.page!).toString());
              }
            },
            child: Text('Précédent',style: GoogleFonts.nunito(color: AppTheme_App.primaryColor),),
          ),
          TextButton(
            onPressed: () {

              if (_pageController.page!.toInt() < 4 ) {
                _pageController.nextPage(
                  duration: Duration(milliseconds: 300),
                  curve: Curves.easeInOut,
                );
                print(_pageController.page!.toInt().toString() + " position"+ (_pageController.positions.length +1).toString());
              } else {
                // L'utilisateur a terminé le "step", vous pouvez naviguer vers l'écran principal de l'application ici
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(
                    builder: (context) => MainPage(),
                  ),
                );
                setDataProfileConnexion();
              }
            },
            child: Text('Suivant',style: GoogleFonts.nunito(color: AppTheme_App.primaryColor)),
          ),
        ],
      ),
    );
  }
}
