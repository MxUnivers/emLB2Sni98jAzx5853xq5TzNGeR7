import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:jouman/src/utils/baseurl.dart';

class JobModel {
  String? id;
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
