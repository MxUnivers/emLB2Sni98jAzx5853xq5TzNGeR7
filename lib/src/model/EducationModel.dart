import  "package:flutter/material.dart";

class EducationModel {
   String? idPerson;
   String? title;
   String? entreprise;
   String? coverPicture;
   String? description;

  EducationModel({
     this.idPerson,
     this.title,
     this.entreprise,
     this.coverPicture,
     this.description,
  });

  factory EducationModel.fromJson(Map<String, dynamic> json) {
    return EducationModel(
      idPerson: json['idPerson'],
      title: json['title'],
      entreprise: json['entreprise'],
      coverPicture: json['coverPicture'],
      description: json['description'],
    );
  }
}
