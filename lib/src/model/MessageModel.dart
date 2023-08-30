import  "package:flutter/material.dart";



class MessageModel {
  String? id;
  String? idSender;
  String? idRecipient;
  String? sender;
  String? recipient;
  String? subject;
  String? content;
  bool? read;

  MessageModel({
    this.id,
    this.idSender,
    this.idRecipient,
    this.sender,
    this.recipient,
    this.subject,
    this.content,
    this.read,
  });

  factory MessageModel.fromJson(Map<String, dynamic> json) {
    return MessageModel(
      id: json['_id'], // You might need to adjust the actual field name from your API
      idSender: json['idSender'],
      idRecipient: json['idRecipient'],
      sender: json['sender'],
      recipient: json['recipient'],
      subject: json['subject'],
      content: json['content'],
      read: json['read'],
    );
  }
}
