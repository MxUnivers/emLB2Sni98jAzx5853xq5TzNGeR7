


class CommentModel {
  String? idcustomerId;
  String? idPostId;
  String? customerPhoto;
  String? customerName;
  String? title;
  String? dateNow;
  String? areaPost;
  String? content;
  bool? access;
  bool? visible;
  int? position;
  String? coverPicture;

  CommentModel({
    this.idcustomerId,
    this.idPostId,
    this.customerPhoto,
    this.customerName,
    this.title,
    this.dateNow,
    this.areaPost,
    this.content,
    this.access,
    this.visible,
    this.position,
    this.coverPicture,
  });

  factory CommentModel.fromJson(Map<String, dynamic> json) {
    return CommentModel(
      idcustomerId: json['idcustomerId'],
      idPostId: json['idPostId'],
      customerPhoto: json['customerPhoto'],
      customerName: json['customerName'],
      title: json['title'],
      dateNow: json['dateNow'],
      areaPost: json['areaPost'],
      content: json['content'],
      access: json['access'],
      visible: json['visible'],
      position: json['position'],
      coverPicture: json['coverPicture'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'idcustomerId': idcustomerId,
      'idPostId': idPostId,
      'customerPhoto': customerPhoto,
      'customerName': customerName,
      'title': title,
      'dateNow': dateNow,
      'areaPost': areaPost,
      'content': content,
      'access': access,
      'visible': visible,
      'position': position,
      'coverPicture': coverPicture,
    };
  }
}
