import "package:flutter/cupertino.dart";
import "package:flutter/material.dart";
import "package:intl/intl.dart";
import "package:jouman/src/config/theme.dart";
import "package:jouman/src/model/MessageModel.dart";
import "package:jouman/src/pages/account_page.dart";

import "../../pages/message_detail.dart";

class MessageCardItem extends StatefulWidget {
  final MessageModel? message;
  const MessageCardItem({Key? key, this.message}) : super(key: key);

  @override
  State<MessageCardItem> createState() => _MessageCardItemState();
}

class _MessageCardItemState extends State<MessageCardItem> {
  String formatDateTime(String dateTimeString) {
    final dateTime = DateTime.parse(dateTimeString);
    final dateFormat = DateFormat.yMMMMd();
    final timeFormat = DateFormat.Hm();

    final formattedDate = dateFormat.format(dateTime);
    final formattedTime = timeFormat.format(dateTime);

    return '$formattedDate à $formattedTime';
  }

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
          backgroundColor: Colors.transparent,
        ),
        title: Text(widget.message!.subject!),
        subtitle: Text(formatDateTime(widget.message!.createdAt.toString())),
        trailing: widget.message!.read!
            ? Icon(Icons.check, color: Colors.blue)
            : Icon(
                Icons.circle,
                size: 10,
                color: AppTheme_App.secondary,
              ));
  }
}
