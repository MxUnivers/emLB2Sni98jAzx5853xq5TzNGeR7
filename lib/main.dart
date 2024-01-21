import 'package:awesome_notifications/awesome_notifications.dart';
import 'package:flutter/material.dart';
import 'package:jouman_mobile_mobile/src/pages/home_page.dart';
import 'package:jouman_mobile_mobile/src/pages/mainPage.dart';
import 'package:jouman_mobile_mobile/src/pages/splash_page.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:flutter/services.dart';
import 'src/themes/theme.dart';

void main() {
  
  AwesomeNotifications().initialize(
    null,
    [
      NotificationChannel(
        channelKey: "basic_channel",
        channelDescription: "Basic notifcations",
        channelName: "Notification channel for basic tests"
      )
    ],
    debug: true,
  );
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);

  runApp(MyApp());

}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      supportedLocales: [
        Locale('en', 'US'), // Anglais
        Locale('fr', 'FR'), // Français
        // Ajoutez d'autres locales prises en charge ici
      ],
      // Définissez la locale par défaut de votre application
      // Vous pouvez utiliser une fonction ou des préférences de l'utilisateur pour récupérer la locale sélectionnée
      locale: Locale('en', 'US'), // Anglais par défaut
      localizationsDelegates: [
        // Ajoutez les délégués de localisation pour chaque langue que vous prenez en charge
        // Ajoutez d'autres délégués de localisation si nécessaire
      ],
      // Définissez le callback pour récupérer la locale sélectionnée
      // Si vous enregistrez la locale sélectionnée dans les préférences, vous pouvez la récupérer ici
      localeResolutionCallback: (locale, supportedLocales) {
        // Retourne la locale par défaut si la locale sélectionnée n'est pas prise en charge
        // Vous pouvez implémenter ici la logique pour récupérer la locale à partir des préférences
        return locale;
      },
      title: "HantiGaspi",
      theme: AppTheme.lightTheme.copyWith(
        textTheme: GoogleFonts.mulishTextTheme(
          Theme.of(context).textTheme,
        ),
      ),
      debugShowCheckedModeBanner: false,
      home: MainPage(),
      // Affiche l'écran de lancement au démarrage de l'application

    );
  }
}
