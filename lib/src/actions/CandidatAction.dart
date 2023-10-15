import "package:flutter/material.dart";
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:offre_emplois_mobile_candidat/src/pages/home_page.dart';
import 'package:offre_emplois_mobile_candidat/src/utils/baseurl.dart';

import '../model/CandidatModel.dart';
import '../utils/storage.dart';

Future<void> connectCandidat(
    BuildContext context, String email, String password) async {
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${baseurl.token}'
  };
  print(email + " " + password);
  var request = http.Request(
      'POST', Uri.parse('${baseurl.url}${baseurl.apiV1}/auth/candidat/login/'));
  request.body = json.encode({"email": email, "password": password});
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  print('${baseurl.url + baseurl.apiV1}/auth/candidat/login/');

  if (response.statusCode == 200) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    CandidatModel candidat = CandidatModel(
        email: jsonData["data"]["email"],
        telephone: jsonData["data"]["telephone"],
        username: jsonData["data"]["username"],
        firstname: jsonData["data"]["firstname"],
        lastname: jsonData["data"]["lastname"],
        isTokenActive: null,
        account: AccountCandidatModel(
          solde: jsonData["data"]["account"]["solde"],
          countSms: jsonData["data"]["account"]["count_sms"],
          dateNow: jsonData["data"]["account"]["dateNow"],
          dateEnd: jsonData["data"]["account"]["dateEnd"],
          pack: jsonData["data"]["account"]["pack"],
        ));
    SharedPreferencesService.saveCandidatDataToSharedPreferences(candidat);
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => MyHomePage()),
    );
  } else {
    // La connexion a échoué, vous pouvez gérer les différentes réponses d'erreur ici.
  }
}
