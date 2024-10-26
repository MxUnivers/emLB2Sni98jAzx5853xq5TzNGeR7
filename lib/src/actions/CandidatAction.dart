import 'package:flutter/cupertino.dart';
import "package:flutter/material.dart";
import 'package:fluttertoast/fluttertoast.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/pages/mainPage.dart';
import 'package:jouman_mobile_mobile/src/pages/sigin_page.dart';
import 'package:jouman_mobile_mobile/src/utils/baseurl.dart';
import 'package:redux/redux.dart';

import '../../main.dart';
import '../model/CandidatModel.dart';
import '../utils/storage.dart';

Future<void> connectCandidat(BuildContext context, Store<AppState> store,
    String email, String password) async {
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
        id: jsonData["data"]["_id"],
        email: jsonData["data"]["email"],
        telephone: jsonData["data"]["telephone"],
        username: jsonData["data"]["username"],
        firstname: jsonData["data"]["firstname"],
        lastname: jsonData["data"]["lastname"],
        is_active: jsonData["data"]["is_active"],
        account: AccountCandidatModel(
          solde: jsonData["data"]["account"]["solde"],
          countSms: jsonData["data"]["account"]["count_sms"],
          dateNow: jsonData["data"]["account"]["dateNow"],
          dateEnd: jsonData["data"]["account"]["dateEnd"],
          pack: jsonData["data"]["account"]["pack"],
        ));
    SharedPreferencesService.saveCandidatDataToSharedPreferences(candidat);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    Navigator.push(
      context,
      CupertinoPageRoute(
        builder: (context) => MainPage(
          store: store,
        ),
      ),
    );
  } else if (response.statusCode == 402) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.red,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    // La connexion a échoué, vous pouvez gérer les différentes réponses d'erreur ici.
  } else if (response.statusCode == 410) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.red,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    // La connexion a échoué, vous pouvez gérer les différentes réponses d'erreur ici.
  } else if (response.statusCode == 409) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.red,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    // La connexion a échoué, vous pouvez gérer les différentes réponses d'erreur ici.
  } else {
    print(response.statusCode);
    SnackBar(
      backgroundColor: Colors.red,
      content: Text('Connexion impossible', textAlign: TextAlign.center),
    );
    // La connexion a échoué, vous pouvez gérer les différentes réponses d'erreur ici.
  }
}

/// Inscription de l'utilisateur
Future<void> registerCandidat(
    BuildContext context,
    String email,
    String username,
    String firstName,
    String lastName,
    String dateNaissance,
    String telephone,
    String description) async {
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${baseurl.token}'
  };

  print('${baseurl.url + baseurl.apiV1}/candidat/');

  print({
    "username": username,
    "email": email,
    "firstname": firstName,
    "lastname": lastName,
    "telephone": telephone,
    "dateNaissance": dateNaissance,
    "description": description,
  });
  var request = http.Request(
      'POST', Uri.parse('${baseurl.url + baseurl.apiV1}/candidat/'));
  request.body = json.encode({
    "username": username,
    "email": email,
    "firstname": firstName,
    "lastname": lastName,
    "telephone": telephone,
    "dateNaissance": telephone,
    "description": description,
  });
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  if (response.statusCode == 200) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["message"]);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => SignInPage()),
    );
  } else if (response.statusCode == 400) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.red,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
  } else if (response.statusCode == 500) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.red,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    throw Exception('Failed to load job data');
    // L'inscription a échoué, vous pouvez gérer les différentes réponses d'erreur ici.
    // Par exemple, afficher un message d'erreur à l'utilisateur.
  }
}

// recuprer le profile du candidat .

Future<CandidatModel> CandidatGetProfile(
    BuildContext context, String idCandidat) async {
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${baseurl.token}'
  };
  var request = http.Request(
      'GET',
      Uri.parse(
          '${baseurl.url}${baseurl.apiV1}/candidat/get_candidat/${idCandidat}'));
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();
  print('${baseurl.url}${baseurl.apiV1}/candidat/get_candidat/${idCandidat}');

  if (response.statusCode == 200) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    CandidatModel candidat = CandidatModel.fromJson(jsonData["data"]);
    SharedPreferencesService.saveCandidatDataToSharedPreferences(candidat);
    return candidat;
  } else {
    print(response.statusCode);
    SnackBar(
      backgroundColor: Colors.red,
      content: Text('Profile non charger', textAlign: TextAlign.center),
    );
    throw Exception('Failed to load job data');
  }
}

// Edit Profile
Future<void> UpdateCandidat(
  BuildContext context,
  String idCandidat,
  //Info compte
  String email,
  String username,
  String firstName,
  String lastName,
  String dateNaissance,
  String telephone,
  String titlePost,
  String pays,
  String addresse,

  // Compétences
  List<Map<String, String?>> competences,
  List<Map<String, String?>> langues,
  String level_school,
  String salaire,
  String description,

  // Réseaux sociaux
  String site_web,
  String facebook_url,
  String linkedin_url,
  String instagram_url,
  String twitter_url,
) async {
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${baseurl.token}'
  };

  print('${baseurl.url + baseurl.apiV1}/candidat/');

  print({
    "username": username,
    "email": email,
    "firstname": firstName,
    "lastname": lastName,
    "telephone": telephone,
    "title_post": titlePost,
    "dateNaissance": dateNaissance,
    "pays": pays,
    "adresse": addresse,
    "competences": competences,
    "langues": langues,
    "level_school": level_school,
    "salaire": salaire,
    "description": description,
    "site_web": site_web,
    "facebook_url": facebook_url,
    "linkedin_url": linkedin_url,
    "twitter_url": twitter_url,
    "instagram_url": instagram_url,
  });
  var request = http.Request('PUT',
      Uri.parse('${baseurl.url + baseurl.apiV1}/candidat/edit/${idCandidat}'));
  request.body = json.encode({
    "username": username,
    "email": email,
    "firstname": firstName,
    "lastname": lastName,
    "telephone": telephone,
    "title_post": titlePost,
    "dateNaissance": dateNaissance,
    "pays": pays,
    "adresse": addresse,
    "competences": competences,
    "langues": langues,
    "level_school": level_school,
    "salaire": salaire,
    "description": description,
    "site_web": site_web,
    "facebook_url": facebook_url,
    "linkedin_url": linkedin_url,
    "twitter_url": twitter_url,
    "instagram_url": instagram_url,
  });
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  if (response.statusCode == 200) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["message"]);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('Profile mis à jour', textAlign: TextAlign.center),
      ),
    );
  } else if (response.statusCode == 500) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.red,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    throw Exception('Failed to load job data');
    // L'inscription a échoué, vous pouvez gérer les différentes réponses d'erreur ici.
    // Par exemple, afficher un message d'erreur à l'utilisateur.
  }
}
