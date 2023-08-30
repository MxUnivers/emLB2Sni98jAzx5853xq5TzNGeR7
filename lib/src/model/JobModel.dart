import "package:flutter/material.dart";
import "package:offre_emplois_mobile_candidat/src/model/CandidatModel.dart";

class JobModel {
   String? idEntreprise;
   String? title;
   String? email;
   String? coverPicture;
   String? titlePost;
   String? areaOffre;
   String? dispobility;
   String? typeContrat;
   String? addresse;
   String? description;
   String? experience;
   String? dateNow;
   String? salaire;
   bool? access;
   bool? is_favorite = false;
   List<CandidatModel>? candidats;

  JobModel({
     this.idEntreprise,
     this.title,
     this.email,
     this.coverPicture,
     this.titlePost,
     this.areaOffre,
    this.addresse,
    this.dateNow,
     this.dispobility,
    this.typeContrat,
    this.description,
    this.experience,
     this.salaire,
    this.access,
    this.is_favorite,
     this.candidats,
  });

  factory JobModel.fromJson(Map<String, dynamic> json) {
    return JobModel(
      idEntreprise: json['idEntreprise'],
      title: json['title'],
      email: json['email'],
      coverPicture: json['coverPicture'],
      titlePost: json['title_post'],
      areaOffre: json['areaOffre'],
      dispobility: json['dispobility'],
      description: json['description'],
      salaire: json['salaire'],
      access: json['access'],
      is_favorite: json['is_favorite'],
      candidats: json['candidats'],
    );
  }

}

