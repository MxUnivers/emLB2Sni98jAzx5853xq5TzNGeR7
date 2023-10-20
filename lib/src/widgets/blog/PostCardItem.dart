import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/cupertino.dart";
import "package:flutter/material.dart";
import "package:intl/intl.dart";
import "package:jouman_mobile_mobile/src/pages/post_detail_page.dart";

import "../../model/PostModel.dart";
import 'package:html/parser.dart' show parse;

class PostCardItem extends StatefulWidget {
  final PostModel? post;
  const PostCardItem({Key? key, this.post}) : super(key: key);

  @override
  State<PostCardItem> createState() => _PostCardItemState();
}

class _PostCardItemState extends State<PostCardItem> {
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
    return Container(
        width: MediaQuery.of(context).size.width,
        margin: EdgeInsets.symmetric(
          vertical: 5,
        ),
        child: GestureDetector(
            onTap: () {
              Navigator.push(
                  context,
                  CupertinoPageRoute(
                    builder: (context) =>
                        PostDetailPage(postdetail: widget.post),
                  ));
            },
            child: Container(
                padding: EdgeInsets.only(top: 5, bottom: 15),
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.all(Radius.circular(10))),
                child: Card(
                    elevation: 0.5,
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                              width: double.infinity,
                              height: 200,
                              decoration: BoxDecoration(
                                  borderRadius:
                                      BorderRadius.all(Radius.circular(10))),
                              child: CachedNetworkImage(
                                imageUrl: widget.post!.coverPicture.toString(),
                                progressIndicatorBuilder:
                                    (context, url, downloadProgress) => Center(
                                        child: CircularProgressIndicator(
                                            value: downloadProgress.progress)),
                                errorWidget: (context, url, error) =>
                                    Icon(Icons.error),
                                fit: BoxFit.cover,
                              )),
                          Padding(
                              padding: const EdgeInsets.all(16.0),
                              child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(
                                      widget.post!.title.toString(),
                                      style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 18),
                                    ),
                                    SizedBox(
                                      height: 3,
                                    ),
                                    Row(
                                      children: [
                                        Text(
                                          formatDateTime(widget.post!.createdAt
                                              .toString()),
                                          style: TextStyle(
                                              fontWeight: FontWeight.bold,
                                              fontSize: 12,
                                              color: Colors.grey),
                                        ),
                                        SizedBox(
                                          width: 5,
                                        ),
                                        Container(
                                          padding: EdgeInsets.only(
                                              left: 5,
                                              right: 5,
                                              top: 3,
                                              bottom: 3),
                                          decoration: BoxDecoration(
                                              color: Colors.green,
                                              borderRadius:
                                                  BorderRadius.circular(12)),
                                          child: Text(
                                            widget.post!.areaPost.toString(),
                                            style: TextStyle(
                                                fontWeight: FontWeight.bold,
                                                fontSize: 12,
                                                color: Colors.white),
                                          ),
                                        ),
                                      ],
                                    ),

                                    /*SizedBox(height: 10,),
                        Text("${widget.post!.content.toString()}",maxLines: 2,style: TextStyle(
                          fontSize: 14,
                        ))*/
                                  ]))
                        ])))));
  }

  String extractTextFromHTML(String htmlContent) {
    final document = parse(htmlContent);
    final String text = document.body!.text;
    return text;
  }
}
