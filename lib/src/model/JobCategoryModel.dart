import "dart:convert";

import "package:flutter/material.dart";
import "package:jouman/src/utils/baseurl.dart";

import "package:http/http.dart" as http;

import "JobModel.dart";

class JobCategoryModel {
  String? id;
  String? title;

  JobCategoryModel({this.id, this.title});
}

Future<List<JobCategoryModel>> fetchAllCategoriesOffres(String apiUrl) async {
  var headers = {
    'Authorization': 'Bearer ${baseurl.token}',
  };

  var request = http.Request('GET', Uri.parse(apiUrl));
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  if (response.statusCode == 200) {
    var responseBody = await response.stream.bytesToString();
    var jsonData = jsonDecode(responseBody);

    List<JobCategoryModel> categoryList = [];

    if (jsonData["data"] is List) {
      for (var item in jsonData["data"]) {
        if (item is Map<String, dynamic>) {
          JobModel jobModel = JobModel.fromJson(item);
          if (jobModel.areaOffre != null) {
            // Vérifiez si la catégorie existe déjà dans la liste
            bool categoryExists = categoryList
                .any((category) => category.title == jobModel.areaOffre);
            if (!categoryExists) {
              // Si la catégorie n'existe pas, ajoutez-la à la liste
              categoryList.add(JobCategoryModel(
                  id: jobModel.areaOffre, title: jobModel.areaOffre));
            }
          }
        }
      }
    }

    return categoryList;
  } else {
    throw Exception('Failed to load job data');
  }
}
