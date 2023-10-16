class CandidatureModel {
  String? idOffre;
  String? idCandidat;
  String? idEntreprise;
  String? coverPicture;
  String? title;
  String? logo;
  String? firstname;
  String? lastname;
  String? email;
  String? telephone;
  String? description;
  String? cv;
  String? areaCandidature;
  String? status;
  String? createdAt;
  String? updateAt;

  CandidatureModel(
      {this.idOffre,
      this.idCandidat,
      this.idEntreprise,
      this.coverPicture,
      this.title,
      this.logo,
      this.firstname,
      this.lastname,
      this.email,
      this.telephone,
      this.description,
      this.cv,
      this.areaCandidature,
      this.status,
      this.createdAt,
      this.updateAt});

  factory CandidatureModel.fromJson(Map<String?, dynamic> json) {
    return CandidatureModel(
        idOffre: json['idOffre'],
        idCandidat: json['idCandidat'],
        idEntreprise: json['idEntreprise'],
        coverPicture: json['coverPicture'],
        title: json['title'],
        logo: json['logo'],
        firstname: json['firstname'],
        lastname: json['lastname'],
        email: json['email'],
        telephone: json['telephone'],
        description: json['description'],
        cv: json['cv'],
        areaCandidature: json['areaCandidature'],
        status: json['status'],
        createdAt: json['createdAt'],
        updateAt: json['updateAt']);
  }
  Map<String?, dynamic> toJson() {
    return {
      'idOffre': idOffre,
      'idCandidat': idCandidat,
      'idEntreprise': idEntreprise,
      'coverPicture': coverPicture,
      'title': title,
      'logo': logo,
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'telephone': telephone,
      'description': description,
      'cv': cv,
      'areaCandidature': areaCandidature,
      'status': status,
    };
  }
}
