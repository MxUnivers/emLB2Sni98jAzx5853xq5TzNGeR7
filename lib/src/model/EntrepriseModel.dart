

class EnterpriseModel {
  String? username;
  String? fullName;
  String? firstName;
  String? lastName;
  String? titlePost;
  String? email;
  String? employersCount;
  String? dateNaissance;
  String? dateNaissanceEnterprise;
  String? telephone;
  String? telephoneEnterprise;
  String? address;
  String? enterpriseDescription;
  String? logo;
  String? enterpriseCountry;
  String? enterpriseAddress;
  String? capitalSalary;
  String typeStatus;
  String maps;
  String mapsEnterprise;
  String website;
  String facebookUrl;
  String twitterUrl;
  String linkedinUrl;
  String instagramUrl;
  String? token;
  bool isActive;
  bool access;

  EnterpriseModel({
    this.username,
    this.fullName,
    this.firstName,
    this.lastName,
    this.titlePost,
    this.email,
    this.employersCount,
    this.dateNaissance,
    this.dateNaissanceEnterprise,
    this.telephone,
    this.telephoneEnterprise,
    this.address,
    this.enterpriseDescription,
    this.logo,
    this.enterpriseCountry,
    this.enterpriseAddress,
    this.capitalSalary,
    this.typeStatus = "STARTER",
    this.maps = "false",
    this.mapsEnterprise = "#",
    this.website = "#",
    this.facebookUrl = "#",
    this.twitterUrl = "#",
    this.linkedinUrl = "#",
    this.instagramUrl = "#",
    this.token,
    this.isActive = false,
    this.access = true,
  });

  //Méthode pour désérialiser un JSON en un objet EnterpriseModel
  factory EnterpriseModel.fromJson(Map<String, dynamic> json) {
    return EnterpriseModel(
      username: json['username'],
      fullName: json['full_name'],
      firstName: json['firstname'],
      lastName: json['lastname'],
      titlePost: json['title_post'],
      email: json['email'],
      employersCount: json['employers_count'],
      dateNaissance: json['dateNaissance'],
      dateNaissanceEnterprise: json['dateNaissance_entreprise'],
      telephone: json['telephone'],
      telephoneEnterprise: json['telephone_entreprise'],
      address: json['adresse'],
      enterpriseDescription: json['description_entreprise'],
      logo: json['logo'],
      enterpriseCountry: json['pays_entreprise'],
      enterpriseAddress: json['addresse_entreprise'],
      capitalSalary: json['salaire_capital'],
      typeStatus: json['typeStatut'],
      maps: json['maps'],
      mapsEnterprise: json['maps_entreprise'],
      website: json['site_web'],
      facebookUrl: json['facebook_url'],
      twitterUrl: json['twitter_url'],
      linkedinUrl: json['linkedin_url'],
      instagramUrl: json['instagram_url'],
      token: json['token'],
      isActive: json['is_active'],
      access: json['access'],
    );
  }

  // Méthode pour sérialiser un objet EnterpriseModel en JSON
  Map<String, dynamic> toJson() {
    return {
      'username': username,
      'full_name': fullName,
      'firstname': firstName,
      'lastname': lastName,
      'title_post': titlePost,
      'email': email,
      'employers_count': employersCount,
      'dateNaissance': dateNaissance,
      'dateNaissance_entreprise': dateNaissanceEnterprise,
      'telephone': telephone,
      'telephone_entreprise': telephoneEnterprise,
      'adresse': address,
      'description_entreprise': enterpriseDescription,
      'logo': logo,
      'pays_entreprise': enterpriseCountry,
      'addresse_entreprise': enterpriseAddress,
      'salaire_capital': capitalSalary,
      'typeStatut': typeStatus,
      'maps': maps,
      'maps_entreprise': mapsEnterprise,
      'site_web': website,
      'facebook_url': facebookUrl,
      'twitter_url': twitterUrl,
      'linkedin_url': linkedinUrl,
      'instagram_url': instagramUrl,
      'token': token,
      'is_active': isActive,
      'access': access,
    };
  }




}
