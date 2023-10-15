import "dart:convert";

import "package:awesome_notifications/awesome_notifications.dart";
import "package:flutter/material.dart";
import "package:fluttertoast/fluttertoast.dart";
import "package:http/http.dart" as http;
import "package:offre_emplois_mobile_candidat/src/utils/baseurl.dart";

triggleNofication(String jobTitle) {
  AwesomeNotifications().createNotification(
      content: NotificationContent(
    id: 10,
    bigPicture: "assets/logo_antigaspi.png",
    channelKey: "basic_channel",
    title:
        "candidature pour le poste ${jobTitle} à été prise en compte , Regarder dans la liste de vos candidatures",
    body: "Merci de faire confiance 😁 . ",
  ));
}

// Poster son cv

Future<void> postCandidature(
    String idCandidat,
    String idEntreprise,
    String idOffre,
    String firstname,
    String lastname,
    String email,
    String telephone,
    String motif,
    String jobTtile) async {
  final url = Uri.parse(
      "${baseurl.url + baseurl.apiV1}/candidature/add/${idCandidat}/entreprise/${idEntreprise}/offre/${idOffre}"); // Remplacez par l'URL de votre API

  final response = await http.post(
    url,
    headers: {
      "Content-Type":
          "application/json", // Spécifiez le type de contenu de votre requête
      "Authorization":
          "Bearer ${baseurl.token}", // Spécifiez le type de contenu de votre requête
    },
    body: jsonEncode({
      "firstname": firstname,
      "lastname": lastname,
      "email": email,
      "telephone": telephone,
      "description": motif,
    }),
  );

  if (response.statusCode == 200) {
    // La requête a réussi
    print("Candidature postée avec succès");
    triggleNofication(jobTtile);
    Fluttertoast.showToast(
      msg: "Candidature postée avec succès",
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.CENTER,
      backgroundColor: Colors.green.shade200,
      textColor: Colors.grey.shade700,
      fontSize: 16.0,
    );
    // Vous pouvez gérer la réponse ici si nécessaire
  } else {
    // La requête a échoué
    print("Erreur lors de la candidature: ${response.statusCode}");
    print("Réponse du serveur: ${response.body}");
    Fluttertoast.showToast(
      msg: "Erreur lors de la candidature: ${response.statusCode}",
      toastLength: Toast.LENGTH_SHORT,
      gravity: ToastGravity.CENTER,
      backgroundColor: Colors.red.shade200,
      textColor: Colors.grey.shade700,
      fontSize: 16.0,
    );
  }
}
