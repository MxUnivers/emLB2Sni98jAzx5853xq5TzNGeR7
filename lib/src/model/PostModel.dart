

class PostModel {
  String? idcustomerId;
  String? customerPhoto;
  String? customerName;
  String? title;
  String? dateNow;
  String? areaPost;
  String? content;
  bool? access;
  bool? visible;
  List<dynamic>? comments;
  num? position;
  String? coverPicture;
  String? createdAt;
  String? updatedAt;

  PostModel({
    this.idcustomerId,
    this.customerPhoto,
    this.customerName,
    this.title,
    this.dateNow,
    this.areaPost,
    this.content,
    this.access,
    this.visible,
    this.comments = const [],
    this.position,
    this.coverPicture,
    this.createdAt,
    this.updatedAt,
  });

  factory PostModel.fromJson(Map<String, dynamic> json) {
    return PostModel(
      idcustomerId: json['idcustomerId'],
      customerPhoto: json['customerPhoto'],
      customerName: json['customerName'],
      title: json['title'],
      dateNow: json['dateNow'] ?? DateTime.now().toString(),
      areaPost: json['areaPost'],
      content: json['content'],
      access: json['access'],
      visible: json['visible'],
      comments: json['comments'] ?? [],
      position: json['position'] ?? 1,
      coverPicture: json['coverPicture'],
      createdAt:json["createdAt"],
      updatedAt:json["updatedAt"],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'idcustomerId': idcustomerId,
      'customerPhoto': customerPhoto,
      'customerName': customerName,
      'title': title,
      'dateNow': dateNow,
      'areaPost': areaPost,
      'content': content,
      'access': access,
      'visible': visible,
      'comments': comments,
      'position': position,
      'coverPicture': coverPicture,
    };
  }
}
