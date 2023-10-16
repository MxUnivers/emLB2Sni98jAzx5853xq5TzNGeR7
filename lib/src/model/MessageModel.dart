import  "package:flutter/material.dart";


class MessageModel {
  String? id;
  String? idSender;
  String? idRecipient;
  String? idAdministrateur;
  String? coverPicture;
  String? sender;
  String? recipient;
  String? subject;
  String? content;
  DateTime? timestamp;
  bool? read;
  DateTime? createdAt;
  DateTime? updatedAt;



  MessageModel({
    this.id,
    this.idSender,
    this.idRecipient,
    this.idAdministrateur,
    this.coverPicture,
    this.sender,
    this.recipient,
    this.subject,
    this.content,
    this.timestamp,
    this.read,
    this.createdAt,
    this.updatedAt,
  });

  factory MessageModel.fromJson(Map<String, dynamic> json) {
    return MessageModel(
      id: json['_id'],
      idSender: json['idSender'],
      idRecipient: json['idRecipient'],
      idAdministrateur: json['idAdministrateur'],
      coverPicture: json['coverPicture'],
      sender: json['sender'],
      recipient: json['recipient'],
      subject: json['subject'],
      content: json['content'],
      timestamp: DateTime.parse(json['timestamp']),
      read: json['read'],
      createdAt: DateTime.parse(json['createdAt']),
      updatedAt: DateTime.parse(json['updatedAt']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'idSender': idSender,
      'idRecipient': idRecipient,
      'idAdministrateur': idAdministrateur,
      'coverPicture': coverPicture,
      'sender': sender,
      'recipient': recipient,
      'subject': subject,
      'content': content,
      'timestamp': timestamp?.toIso8601String(),
      'read': read,
      'createdAt': createdAt?.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
    };
  }
}
