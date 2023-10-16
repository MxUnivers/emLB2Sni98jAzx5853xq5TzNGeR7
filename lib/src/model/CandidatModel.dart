import "dart:ffi";

import "package:flutter/material.dart";
import "package:jouman_mobile_mobile/src/model/JobModel.dart";

class CandidatModel {
  String? id;
  String? username;
  String? firstname;
  String? lastname;
  String? description;
  String? coverPicture;
  String? dateNaissance;
  String? email;
  String? titlePost;
  String? salaire;
  String? telephone;
  String? adresse;
  String? pays;
  String? levelSchool;
  String? siteWeb;
  String? yearsExperience;
  List<CompetenceModel>? competences; // Utilisez le bon modèle pour competences
  List<LangueModel>? langues; // Utilisez le bon modèle pour langues
  String? cv;
  bool isActive;
  String? facebookUrl;
  String? linkedinUrl;
  String? twitterUrl;
  String? instagramUrl;
  List<String>? offres;
  List<String>? bourses;
  List<String>? bookmarks;
  int likes;
  AccountCandidatModel account;
  String? password;
  bool is_active;
  bool access;
  String? token;

  CandidatModel({
    this.id,
    this.username,
    this.firstname,
    this.lastname,
    this.description,
    this.coverPicture,
    this.dateNaissance,
    this.email,
    this.titlePost,
    this.salaire,
    this.telephone,
    this.adresse,
    this.pays,
    this.levelSchool,
    this.siteWeb,
    this.yearsExperience,
    this.competences,
    this.langues,
    this.cv,
    this.isActive = false,
    this.facebookUrl,
    this.linkedinUrl,
    this.twitterUrl,
    this.instagramUrl,
    this.offres,
    this.bourses,
    this.bookmarks,
    this.likes = 5,
    required this.account,
    this.password,
    this.is_active = false,
    this.access = true,
    this.token,
    required isTokenActive,
  });

  factory CandidatModel.fromJson(Map<String, dynamic> json) {
    return CandidatModel(
      id: json['id'],
      username: json['username'],
      firstname: json['firstname'],
      lastname: json['lastname'],
      description: json['description'],
      coverPicture: json['coverPicture'],
      dateNaissance: json['dateNaissance'],
      email: json['email'],
      titlePost: json['title_post'],
      salaire: json['salaire'],
      telephone: json['telephone'],
      adresse: json['adresse'],
      pays: json['pays'],
      levelSchool: json['level_school'],
      siteWeb: json['site_web'],
      yearsExperience: json['years_experience'],
      competences: (json['competences'] as List<dynamic>?)!
          .map((e) => CompetenceModel.fromJson(e as Map<String, dynamic>))
          .toList(),
      langues: (json['langues'] as List<dynamic>?)
          ?.map((e) => LangueModel.fromJson(e as Map<String, dynamic>))
          .toList(),
      cv: json['cv'],
      isActive: json['is_active'],
      facebookUrl: json['facebook_url'],
      linkedinUrl: json['linkedin_url'],
      twitterUrl: json['twitter_url'],
      instagramUrl: json['instagram_url'],
      offres: json['offres'].cast<String>(),
      bourses: json['bourses'].cast<String>(),
      bookmarks: json['bookmarks'].cast<String>(),
      likes: json['likes'],
      account: AccountCandidatModel.fromJson(json['account']),
      password: json['password'],
      isTokenActive: json['is_active'],
      access: json['access'],
      token: json['token'],
    );
  }
}

class CompetenceModel {
  String? label;
  String? value;

  CompetenceModel({
    this.label,
    this.value,
  });

  factory CompetenceModel.fromJson(Map<String, dynamic> json) {
    return CompetenceModel(
      label: json['label'],
      value: json['value'],
    );
  }
}

class LangueModel {
  String? value;
  String? label;

  LangueModel({
    this.value,
    this.label,
  });

  factory LangueModel.fromJson(Map<String, dynamic> json) {
    return LangueModel(
      value: json['value'],
      label: json['label'],
    );
  }
}

class AccountCandidatModel {
  int solde;
  String pack;
  String dateNow;
  String? dateEnd;
  int countSms;

  AccountCandidatModel({
    required this.solde,
    required this.pack,
    required this.dateNow,
    required this.dateEnd,
    required this.countSms,
  });
  factory AccountCandidatModel.fromJson(Map<String, dynamic> json) {
    return AccountCandidatModel(
      solde: json['solde'],
      pack: json['pack'],
      dateNow: json['dateNow'],
      dateEnd: json['dateEnd'],
      countSms: json['count_sms'],
    );
  }
}
