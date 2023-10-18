import "package:flutter/cupertino.dart";
import "package:flutter/material.dart";
import "package:jouman_mobile_mobile/src/model/MessageModel.dart";
import "package:jouman_mobile_mobile/src/pages/account_page.dart";

import "../../pages/message_detail.dart";

class MessageCardItem extends StatefulWidget {
  final MessageModel? message;
  const MessageCardItem({Key? key, this.message}) : super(key: key);

  @override
  State<MessageCardItem> createState() => _MessageCardItemState();
}

class _MessageCardItemState extends State<MessageCardItem> {
  @override
  Widget build(BuildContext context) {
    return ListTile(
        onTap: () {
          Navigator.push(
            context,
            CupertinoPageRoute(
              builder: (context) => MessageDetailPage(
                message: widget.message,
              ),
            ),
          );
        },
        leading: CircleAvatar(
          backgroundImage: NetworkImage(widget.message!.coverPicture!),
        ),
        title: Text(widget.message!.subject!),
        subtitle: Text(widget.message!.createdAt.toString()),
        trailing: widget.message!.read!
            ? Icon(Icons.check, color: Colors.blue)
            : Icon(Icons.circle, size: 10)
    );
  }
}
