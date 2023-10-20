import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:intl/intl.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";

import "../model/PostModel.dart";

class PostDetailPage extends StatefulWidget {
  final PostModel? postdetail;

  const PostDetailPage({Key? key, this.postdetail}) : super(key: key);

  @override
  State<PostDetailPage> createState() => _PostDetailPageState();
}

class _PostDetailPageState extends State<PostDetailPage> {
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
    return Scaffold(
        appBar: AppBar(
          backgroundColor: AppTheme_App.withPrimary,
          elevation: 0.1,
          leading: IconButton(
            onPressed: () {
              Navigator.of(context).pop();
            },
            icon: Icon(
              Icons.chevron_left,
              color: AppTheme_App.TextGray,
            ),
          ),
          title: Text("${widget.postdetail!.title.toString()}",style: GoogleFonts.nunito(color: AppTheme_App.TextGray) ),
          actions: [
            Container(
              margin: EdgeInsets.only(right: 10),
            child: IconButton(onPressed: () {}, icon: Icon(Icons.bookmark_add_outlined,color: AppTheme_App.TextGray,))
          )
          ],
        ),
        body: Container(
          height: MediaQuery.of(context).size.height,
          child: SingleChildScrollView(
              child: Column(children: [
            Container(
                width: double.infinity,
                height: 200,
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(10))),
                child: CachedNetworkImage(
                  imageUrl: widget.postdetail!.coverPicture.toString(),
                  progressIndicatorBuilder: (context, url, downloadProgress) =>
                      Center(
                          child: CircularProgressIndicator(
                              value: downloadProgress.progress)),
                  errorWidget: (context, url, error) => Icon(Icons.error),
                  fit: BoxFit.cover,
                )),
          ])),
        ));
  }
}
