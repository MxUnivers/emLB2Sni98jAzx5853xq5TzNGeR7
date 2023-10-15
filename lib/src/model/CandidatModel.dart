import "package:flutter/material.dart";
import "package:offre_emplois_mobile_candidat/src/model/JobModel.dart";


class CandidatModel {
  final String? username;
  late final String? firstname;
  final String? lastname;
  late final String? description;
  final String? coverPicture;
  final String? dateNaissance;
  final String? email;
  final String? password;
  final String? telephone;
  final String? adresse;
  final String? pays;
  final String? levelSchool;
  final String? siteWeb;
  final int? yearsExperience;
  final List<String>? competences;
  final List<String>? langues;
  final String? cv;
  final String? token;
  final bool? isActive;
  final String? facebookUrl;
  final String? linkedinUrl;
  final String? twitterUrl;
  final String? instagramUrl;
  final List<String>? offres;
  final List<String>? bookmarks;
  final int? likes;
  final bool? access;

  CandidatModel({
     this.username,
     this.firstname,
     this.lastname,
     this.description,
     this.coverPicture,
     this.dateNaissance,
     this.email,
     this.password,
     this.telephone,
     this.adresse,
     this.pays,
     this.levelSchool,
     this.siteWeb,
     this.yearsExperience,
     this.competences,
     this.langues,
     this.cv,
     this.token,
     this.isActive,
     this.facebookUrl,
     this.linkedinUrl,
     this.twitterUrl,
     this.instagramUrl,
     this.offres,
     this.bookmarks,
     this.likes,
     this.access,
  });

  factory CandidatModel.fromJson(Map<String?, dynamic> json) {
    return CandidatModel(
      username: json['username'],
      firstname: json['firstname'],
      lastname: json['lastname'],
      description: json['description'],
      coverPicture: json['coverPicture'],
      dateNaissance: json['dateNaissance'],
      email: json['email'],
      password: json['password'],
      telephone: json['telephone'],
      adresse: json['adresse'],
      pays: json['pays'],
      levelSchool: json['level_school'],
      siteWeb: json['site_web'],
      yearsExperience: json['years_experience'],
      competences: json['competences'].cast<String?>(),
      langues: json['langues'].cast<String?>(),
      cv: json['cv'],
      token: json['token'],
      isActive: json['is_active'],
      facebookUrl: json['facebook_url'],
      linkedinUrl: json['linkedin_url'],
      twitterUrl: json['twitter_url'],
      instagramUrl: json['instagram_url'],
      offres: json['offres'],
      bookmarks: json['bookmarks'],
      likes: json['likes'],
      access: json['access'],
    );
  }
}
