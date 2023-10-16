import "dart:convert";

import "package:awesome_notifications/awesome_notifications.dart";
import "package:flutter/material.dart";
import "package:fluttertoast/fluttertoast.dart";
import "package:http/http.dart" as http;
import "package:jouman_mobile_mobile/src/utils/baseurl.dart";

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
    BuildContext context,
    String idCandidat,
    String idEntreprise,
    String idOffre,
    String firstname,
    String lastname,
    String email,
    String telephone,
    String motif,
    String jobTtile) async {

  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${baseurl.token}'
  };
  var request = http.Request(
      'POST', Uri.parse("${baseurl.url + baseurl.apiV1}/candidature/add/${idCandidat}/entreprise/${idEntreprise}/offre/${idOffre}"));
  request.body = json.encode({
    "firstname": firstname,
    "lastname": lastname,
    "email": email,
    "telephone": telephone,
    "description": motif,
  });
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  print('${baseurl.url + baseurl.apiV1}/auth/candidat/login/');

  if (response.statusCode == 200) {
    // La requête a réussi
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    triggleNofication(jobTtile);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    // Vous pouvez gérer la réponse ici si nécessaire
  } else if (response.statusCode==407) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('Veillez vous reconnecter pour poster votre candidature', textAlign: TextAlign.center),
      ),
    );
  }
  else if (response.statusCode==409) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
  }
  // les candidat à deja postuler à l'offre
  else if (response.statusCode==410) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
  }
  else if (response.statusCode==500) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
  }
}
