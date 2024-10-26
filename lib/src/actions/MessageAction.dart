// recupérer toutes les candidatures du candidats
import 'dart:convert';
import 'package:jouman/src/model/MessageModel.dart';
import 'package:jouman/src/utils/baseurl.dart';
import "package:http/http.dart" as http;

Future<List<MessageModel>> fetchAllMessageList(String idCandidat) async {
  print(idCandidat);
  var headers = {
    'Authorization': 'Bearer ${baseurl.token}',
  };
  var request = http.Request(
      'GET',
      Uri.parse(
          '${baseurl.url + baseurl.apiV1}/message/get_message/candidat/${idCandidat}/messages'));
  request.headers.addAll(headers);
  http.StreamedResponse response = await request.send();
  if (response.statusCode == 200) {
    print(response.statusCode);
    var responseBody = await response.stream.bytesToString();
    var jsonData = jsonDecode(responseBody);
    print(jsonData["data"]);
    List<MessageModel> messageList = [];
    if (jsonData["data"] is List) {
      for (var item in jsonData["data"]) {
        if (item is Map<String, dynamic>) {
          messageList.add(MessageModel.fromJson(item));
        } else {
          // Gérer le cas où un élément n'est pas un objet JSON valide, par exemple, en sautant cet élément ou en lançant une exception.
        }
      }
    }
    return messageList;
  } else {
    print(response.statusCode);
    throw Exception('Failed to load job data');
  }
}
