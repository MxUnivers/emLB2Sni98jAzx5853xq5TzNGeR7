import "package:flutter/material.dart";

import "../model/MessageModel.dart";


class MessageDetailPage extends StatefulWidget {
  final MessageModel? message;
  MessageDetailPage({Key? key, this.message}) : super(key: key);

  @override
  State<MessageDetailPage> createState() => _MessageDetailPageState();
}

class _MessageDetailPageState extends State<MessageDetailPage> {
  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView(
        padding: const EdgeInsets.all(16.0),
        children: [
          CircleAvatar(
            radius: 50,
            backgroundImage: NetworkImage(widget.message!.coverPicture.toString()),
          ),
          SizedBox(height: 16),
          Text(
            widget.message!.subject.toString(),
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          Text(
            'Date: ${widget.message!.createdAt!}',
            style: TextStyle(fontSize: 16),
          ),
          Divider(),
          Text(
            widget.message!.content.toString(),
            style: TextStyle(fontSize: 16),
          ),
          Divider(),
        ],
      )
    );
  }
}


