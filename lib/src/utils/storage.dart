


import 'package:shared_preferences/shared_preferences.dart';

import '../model/CandidatModel.dart';

class StorageUser {
  static const String idKey = "id";
  static const String firstNameKey = "firstname";
  static const String lastNameKey = "lastname";
  static const String emailKey = "email";
  static const String usernameKey = "username";
  static const String descriptionKey = "description";
  static const String is_activeKey = "connected";
  static const String accountPackKey = "account.pack";
  static const String accountSoldeKey = "account.solde";
  static const String accountCountSmsKey = "account.count_sms";
  static const String accountDateNowKey = "account.dateNow";
  static const String accountDateEndKey = "account.dateEnd";
}

class SharedPreferencesService {
  static Future<void> saveCandidatDataToSharedPreferences(CandidatModel candidat) async {
    final prefs = await SharedPreferences.getInstance();
    prefs.setString(StorageUser.idKey, candidat.id ?? "");
    prefs.setBool(StorageUser.is_activeKey, candidat.is_active);
    prefs.setString(StorageUser.firstNameKey, candidat.firstname ?? "");
    prefs.setString(StorageUser.lastNameKey, candidat.lastname ?? "");
    prefs.setString(StorageUser.emailKey, candidat.email ?? "");
    prefs.setString(StorageUser.usernameKey, candidat.username ?? "");
    prefs.setString(StorageUser.descriptionKey, candidat.description ?? "");
    prefs.setString(StorageUser.accountPackKey, candidat.account.pack ?? "");
    prefs.setInt(StorageUser.accountSoldeKey, candidat.account.solde ?? 0);
    prefs.setInt(StorageUser.accountCountSmsKey, candidat.account.countSms ?? 0);
    prefs.setString(StorageUser.accountDateNowKey, candidat.account.dateNow ?? "");
    prefs.setString(StorageUser.accountDateEndKey, candidat.account.dateEnd ?? "");
  }

  static Future<CandidatModel> getCandidatDataFromSharedPreferences() async {
    final prefs = await SharedPreferences.getInstance();
    final id = prefs.getString(StorageUser.idKey) ?? "";
    final firstname = prefs.getString(StorageUser.firstNameKey) ?? "";
    final is_active = prefs.getBool(StorageUser.is_activeKey) ?? false;
    final lastname = prefs.getString(StorageUser.lastNameKey) ?? "";
    final email = prefs.getString(StorageUser.emailKey) ?? "";
    final username = prefs.getString(StorageUser.usernameKey) ?? "";
    final description = prefs.getString(StorageUser.descriptionKey) ?? "";
    final pack = prefs.getString(StorageUser.accountPackKey) ?? "";
    final solde = prefs.getInt(StorageUser.accountSoldeKey) ?? 0;
    final countSms = prefs.getInt(StorageUser.accountCountSmsKey) ?? 0;
    final dateNow = prefs.getString(StorageUser.accountDateNowKey) ?? "";
    final dateEnd = prefs.getString(StorageUser.accountDateEndKey) ?? "";

    return CandidatModel(
      id: id,
      is_active: is_active,
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: username,
      description: description,
      account: AccountCandidatModel(
        pack: pack,
        solde: solde,
        countSms: countSms,
        dateNow: dateNow,
        dateEnd: dateEnd,
      )
    );
  }
}
