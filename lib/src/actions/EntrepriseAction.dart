import "dart:convert";

import "package:http/http.dart" as http;
import "package:jouman/src/utils/baseurl.dart";

import "../model/EntrepriseModel.dart";

Future<EnterpriseModel> fetchEntrepriseByMessage(String idEntrepise) async {
  print("${baseurl.url + baseurl.apiV1}");
  var headers = {
    'Authorization': 'Bearer ${baseurl.token}',
  };

  var request = http.Request(
      'GET',
      Uri.parse(
          "${baseurl.url + baseurl.apiV1}/entreprise/get_entreprise/${idEntrepise}"));
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  if (response.statusCode == 200) {
    print(response.statusCode);
    var responseBody = await response.stream.bytesToString();
    var jsonData = jsonDecode(responseBody);
    print(jsonData["data"]);

    // Créez une instance de EnterpriseModel en utilisant les données JSON
    EnterpriseModel entreprise = EnterpriseModel.fromJson(jsonData["data"]);
    return entreprise;
  } else {
    print(response.statusCode);
    throw Exception('Failed to load job data');
  }
}
