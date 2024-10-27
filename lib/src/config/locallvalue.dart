import 'package:shared_preferences/shared_preferences.dart';
import "package:flutter/material.dart";
import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';

//
Map<String, String> storageProfile = {
  "isConnected": "isConnected",
  "isVisited": "isVisited",
  "idUser": "idUser",
  "emailUser": "emailUser",
  "firstnameUser": "firstnameUser",
  "lastnameUser": "lastnameUser",
  "passwordUser": "passwordUser",
  "tokenUser": "tokenUser",
  "phoneNumberUser": "phoneNumberUser",
  "FavoriteUser": "FavoriteUser",
  "RecentUser": "RecentUser",
  "SearchUser": "SearchUser",
  "selectedLanguage": "selectedLanguage",
  "photoUser": "photoUser",
  "adresseUser": "adresseUser",
  "zoneUser": "zoneUser",
  "secteurUser": "secteurUser",
  "lieuUser": "lieuUser",
};

// Enregistrement des donnes de l'utilisateur dans l'application
Future<void> saveDataProfileConnexion(
  String selectedLanguage,
  String id,
  String email,
  String telephone,
  String coverPicture,
) async {
  final SharedPreferences prefs = await SharedPreferences.getInstance();
  await prefs.setBool(storageProfile["isLoggedIn"].toString(), true);
  await prefs.setString(storageProfile["_id"].toString(), id);
  await prefs.setString(storageProfile["email"].toString(), email);
  await prefs.setString(storageProfile["password"].toString(), email);
  await prefs.setString(storageProfile["token"].toString(), email);
  await prefs.setString(storageProfile["telephone"].toString(), telephone);
}

// Sauvegarder la langue
Future<void> saveSelectedLanguage(String language) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  prefs.setString(storageProfile['selectedLanguage'].toString(), language);
}

Future<void> clearSharedPreferences() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  await prefs.setString(storageProfile["FavoriteUser"].toString(), "");
  await prefs.setString(storageProfile["adresseUser"].toString(), "");
  await prefs.setString(storageProfile["zoneUser"].toString(), "");
  await prefs.setString(storageProfile["secteurUser"].toString(), "");
  await prefs.setString(storageProfile["lieuUser"].toString(), "");
}

//
Future<Database> openDatabaseAndCreateTable() async {
  final databasePath = await getDatabasesPath();
  final path = join(databasePath, 'hantigasi.db');

  // Vérifier si la base de données existe déjà
  bool databaseExist = await databaseExists(path);

  if (!databaseExist) {
    // Si la base de données n'existe pas, la créer
    await deleteDatabase(
        path); // Supprimer la base de données existante pour créer une nouvelle
    return await openDatabase(path, version: 1,
        onCreate: (Database db, int version) async {
      // Créer votre table ici en utilisant une requête SQL
      await db.execute('''
        CREATE TABLE annonce (
          id INTEGER PRIMARY KEY,
          title TEXT,
          adverId INTEGER
        )
      ''');
    });
  } else {
    // Si la base de données existe déjà, simplement l'ouvrir et la retourner
    return await openDatabase(path, version: 1);
  }
}

Future<void> insertDataAnnonce(int adverId, String titleAdvert) async {
  final Database db = await openDatabaseAndCreateTable();

  await db.insert(
    'annonce',
    {
      'title': '${titleAdvert}',
      'adverId': adverId,
    },
    conflictAlgorithm: ConflictAlgorithm.replace,
  );
}

// Créer pour les adresse de livraison
Future<Database> openDatabaseAndCreateTableAdresse() async {
  final databasePath = await getDatabasesPath();
  final path = join(databasePath, 'hantigasi.db');

  return await openDatabase(path, version: 1,
      onCreate: (Database db, int version) async {
    // Créez votre table ici en utilisant une requête SQL
    await db.execute('''
      CREATE TABLE addresse (
        id INTEGER PRIMARY KEY,
        zone TEXT,
        secteur TEXT,
        quartier TEXT
      );
    ''');
  });
}

// INSERVER DES DONNES POUR LES ADRESSE
Future<void> insertDataAdresseSlqite(
    String zone, String secteur, String quartier) async {
  final Database db = await openDatabaseAndCreateTable();

  await db.insert(
    'addresse',
    {
      'zone': '${zone}',
      'secteur': '${secteur}',
      'quartier': '${quartier}',
    },
    conflictAlgorithm: ConflictAlgorithm.replace,
  );
}

// GET ADDRESSE
Future<List<Map<String, dynamic>>> getDataAdresseSqlite() async {
  final Database db = await openDatabaseAndCreateTable();

  return await db.query('addresse');
}
