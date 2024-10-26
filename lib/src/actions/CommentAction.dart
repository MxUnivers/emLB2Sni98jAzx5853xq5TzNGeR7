import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:jouman/src/model/CommentModel.dart';
import 'package:jouman/src/model/JobModel.dart';
import 'package:jouman/src/utils/baseurl.dart';
import "package:http/http.dart" as http;

Future<List<CommentModel>> fetchAllCommentList(String idBlog) async {
  print(idBlog);
  print("${baseurl.url + baseurl.apiV1}/comment/blog/${idBlog}/comments");
  var headers = {
    'Authorization': 'Bearer ${baseurl.token}',
  };

  var request = http.Request('GET',
      Uri.parse("${baseurl.url + baseurl.apiV1}/blog/${idBlog}/comments"));
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  if (response.statusCode == 200) {
    print(response.statusCode);
    var responseBody = await response.stream.bytesToString();
    var jsonData = jsonDecode(responseBody);
    print(jsonData["data"]);
    List<CommentModel> commentList = [];
    if (jsonData["data"] is List) {
      for (var item in jsonData["data"]) {
        if (item is Map<String, dynamic>) {
          commentList.add(CommentModel.fromJson(item));
        } else {
          // Gérer le cas où un élément n'est pas un objet JSON valide, par exemple, en sautant cet élément ou en lançant une exception.
        }
      }
    }
    return commentList;
  } else {
    print(response.statusCode);
    throw Exception('Failed to load job data');
  }
}

// Poster votre commenataire

Future<void> postComment(
  BuildContext context,
  String idCandidat,
  String idBlog,
  String content,
  String areaPost,
) async {
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${baseurl.token}'
  };
  var request = http.Request(
      'POST',
      Uri.parse(
          "${baseurl.url + baseurl.apiV1}/comment/post/${idCandidat}/blog/${idBlog}"));
  request.body = json.encode({
    "content": content,
    "areaPost": areaPost,
  });
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  print(
      "${baseurl.url + baseurl.apiV1}/comment/post/${idCandidat}/blog/${idBlog}");

  if (response.statusCode == 200) {
    // La requête a réussi
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
    // Vous pouvez gérer la réponse ici si nécessaire
  } else if (response.statusCode == 407) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    print(jsonData["data"]);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
  } else if (response.statusCode == 409) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
  } else if (response.statusCode == 500) {
    print(response.statusCode);
    var jsonData = json.decode(await response.stream.bytesToString());
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: Colors.green,
        content: Text('${jsonData["message"]}', textAlign: TextAlign.center),
      ),
    );
  }
}
