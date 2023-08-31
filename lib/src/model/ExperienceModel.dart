class ExperienceModel {
  String? idPerson;
  String? title;
  String? entreprise;
  String? dateNow;
  String? coverPicture;
  String? description;

  ExperienceModel({
    this.idPerson,
    this.title,
    this.entreprise,
    this.dateNow,
    this.coverPicture,
    this.description,
  });

  factory ExperienceModel.fromJson(Map<String, dynamic> json) {
    return ExperienceModel(
      idPerson: json['idPerson'],
      title: json['title'],
      entreprise: json['entreprise'],
      dateNow: json['dateNow'],
      coverPicture: json['coverPicture'],
      description: json['description'],
    );
  }
}
