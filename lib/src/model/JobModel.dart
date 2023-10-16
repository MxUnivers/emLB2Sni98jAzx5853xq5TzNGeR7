import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:jouman_mobile_mobile/src/utils/baseurl.dart';

class JobModel {
  String?id;
  String? idEntreprise;
  String? title;
  String? email;
  String? coverPicture;
  String? titlePost;
  String? areaOffre;
  String? typeContrat;
  String? addresse;
  String? description;
  String? dateNow;
  String? salaire;
  bool? access;
  bool? is_favorite = false;
  List<dynamic>? candidats;

  JobModel({
    this.id,
    this.idEntreprise,
    this.title,
    this.email,
    this.coverPicture,
    this.titlePost,
    this.areaOffre,
    this.addresse,
    this.dateNow,
    this.typeContrat,
    this.description,
    this.salaire,
    this.access,
    this.is_favorite,
    this.candidats,
  });

  factory JobModel.fromJson(Map<String, dynamic> json) {
    return JobModel(
      id: json['_id'],
      idEntreprise: json['idEntreprise'],
      title: json['title'],
      email: json['email'],
      coverPicture: json['coverPicture'],
      titlePost: json['title_post'],
      areaOffre: json['areaOffre'],
      description: json['description'],
      typeContrat: json['typeContrat'],
      addresse: json['addresse'],
      salaire: json['salaire'],
      access: json['access'],
      candidats: json['candidats'],
    );
  }
}

Future<List<JobModel>> fetchAllJobList(String apiUrl) async {
  print(apiUrl);
  var headers = {
    'Authorization': 'Bearer ${baseurl.token}',
  };

  var request = http.Request('GET', Uri.parse(apiUrl));
  request.headers.addAll(headers);

  http.StreamedResponse response = await request.send();

  if (response.statusCode == 200) {
    print(response.statusCode);
    var responseBody = await response.stream.bytesToString();
    var jsonData = jsonDecode(responseBody);
    print(jsonData["data"]);

    List<JobModel> jobList = [];

    if (jsonData["data"] is List) {
      for (var item in jsonData["data"]) {
        if (item is Map<String, dynamic>) {
          jobList.add(JobModel.fromJson(item));
        } else {
          // Gérer le cas où un élément n'est pas un objet JSON valide, par exemple, en sautant cet élément ou en lançant une exception.
        }
      }
    }

    return jobList;
  } else {
    print(response.statusCode);
    throw Exception('Failed to load job data');
  }
}




