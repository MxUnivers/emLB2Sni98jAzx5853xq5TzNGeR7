

import 'package:shared_preferences/shared_preferences.dart';


Map<String, String> storageProfile =
{
  "_id":"idConnexion",
  "firstname":"firsnameConnexion",
  "lastname":"lastnameConnexion",
  "email":"emailConnexion",
  "telephone":"telephoneConnexion",
  "coverPicture":"coverPictureConnexion",
  //"url":"https://localhost:1000",
};


// Enregistrer une valeur
Future<void> saveDataProfileConnexion(
    String id ,
    String firstname,
    String lastname,
    String email,
    String telephone,
    String coverPicture,
    ) async {
  final SharedPreferences prefs = await SharedPreferences.getInstance();
  await prefs.setString(storageProfile["_id"].toString(), id);
  await prefs.setString(storageProfile["firstname"].toString(),firstname );
  await prefs.setString(storageProfile["lastname"].toString(),lastname );
  await prefs.setString(storageProfile["email"].toString(),email );
  await prefs.setString(storageProfile["telephone"].toString(),telephone );
  await prefs.setString(storageProfile["coverPicture"].toString(),coverPicture );

}






// Recupérer l'id du candidat
Future<void> getDataIdConnexion(
    String id ,
    ) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.getString('idProfileConnexion');
}
