import 'dart:convert';
import 'package:jouman/src/utils/baseurl.dart';
import "package:http/http.dart" as http;
import 'package:jouman/src/model/PostModel.dart';

Future<List<PostModel>> fetchAllPostList() async {
  var headers = {
    'Authorization': 'Bearer ${baseurl.token}',
  };
  var request = http.Request(
      'GET', Uri.parse("${baseurl.url + baseurl.apiV1}/blog/get_posts"));
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();
  print("${baseurl.url + baseurl.apiV1}/blog/get_posts");

  if (response.statusCode == 200) {
    print(response.statusCode);
    var responseBody = await response.stream.bytesToString();
    var jsonData = jsonDecode(responseBody);
    print(jsonData["data"]);

    List<PostModel> postList = [];

    if (jsonData["data"] is List) {
      for (var item in jsonData["data"]) {
        if (item is Map<String, dynamic>) {
          postList.add(PostModel.fromJson(item));
        } else {
          // Gérer le cas où un élément n'est pas un objet JSON valide, par exemple, en sautant cet élément ou en lançant une exception.
        }
      }
    }
    return postList;
  } else {
    print(response.statusCode);
    throw Exception('Failed to load job data');
  }
}
