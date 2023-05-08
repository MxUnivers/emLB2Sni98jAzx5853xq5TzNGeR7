

import 'package:shared_preferences/shared_preferences.dart';

// Enregistrer une valeur
Future<void> saveDataProfileConnexion(
    String id ,
    String firstname,
    String lastname,
    String email,
    String telephone,
    String coverPicture,
    ) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString("idProfileConnexion", id);
  await prefs.setString("lastnameConnexion",lastname );
  await prefs.setString("emailConnexion",email );
  await prefs.setString("telephoneConnexion",telephone );
  await prefs.setString("coverPictureConnexion",coverPicture );
  await prefs.setString("firstnameConnexion",firstname );

}






// Recupérer l'id du candidat
Future<void> getDataIdConnexion(
    String id ,
    ) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.getString('idProfileConnexion');
}
