import  "package:flutter/material.dart";

class ProjectModel {
  String? idPerson;
  String? title;
  String? entreprise;
  String? dateNow;
  String? description;
  String? coverPicture;

  ProjectModel({
    this.idPerson,
    this.title,
    this.entreprise,
    this.dateNow,
    this.description,
    this.coverPicture,
  });

  factory ProjectModel.fromJson(Map<String, dynamic> json) {
    return ProjectModel(
      idPerson: json['idPerson'],
      title: json['title'],
      entreprise: json['entreprise'],
      dateNow: json['dateNow'],
      description: json['description'],
      coverPicture: json['coverPicture'],
    );
  }
}
