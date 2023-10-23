import "package:flutter/material.dart";
import "package:cached_network_image/cached_network_image.dart";
import "package:html/parser.dart" show parse;
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:webview_flutter/webview_flutter.dart";
import "package:google_fonts/google_fonts.dart";
import "package:intl/intl.dart";
import "../model/PostModel.dart";
import "dart:convert";
import "dart:core";
import 'package:flutter_html/flutter_html.dart';

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
          title: Text("${widget.postdetail!.title.toString()}",
              style: GoogleFonts.nunito(color: AppTheme_App.TextGray)),
          actions: [
            Container(
                margin: EdgeInsets.only(right: 10),
                child: IconButton(
                    onPressed: () {},
                    icon: Icon(
                      Icons.bookmark_add_outlined,
                      color: AppTheme_App.TextGray,
                    )))
          ],
        ),
        body: Container(
          height: MediaQuery.of(context).size.height,
          width: MediaQuery.of(context).size.height,
          child: SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: Container(
                  child: Column(children: <Widget>[
                Container(
                    width: double.infinity,
                    height: 200,
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.all(Radius.circular(10))),
                    child: CachedNetworkImage(
                      imageUrl: widget.postdetail!.coverPicture.toString(),
                      progressIndicatorBuilder:
                          (context, url, downloadProgress) => Center(
                              child: CircularProgressIndicator(
                                  value: downloadProgress.progress)),
                      errorWidget: (context, url, error) => Icon(Icons.error),
                      fit: BoxFit.cover,
                    )),
                Container(
                    child: Card(
                        elevation: 0.3,
                        child: ListTile(
                            leading: Container(
                                width: 30,
                                height: 30,
                                decoration: BoxDecoration(
                                    borderRadius:
                                        BorderRadius.all(Radius.circular(20))),
                                child: CachedNetworkImage(
                                  imageUrl: widget.postdetail!.customerPhoto
                                      .toString(),
                                  progressIndicatorBuilder:
                                      (context, url, downloadProgress) =>
                                          CircularProgressIndicator(
                                              value: downloadProgress.progress),
                                  errorWidget: (context, url, error) =>
                                      Icon(Icons.error),
                                  fit: BoxFit.cover,
                                )),
                            title: Text(
                                "${widget.postdetail!.customerName.toString()}"),
                            subtitle: Text(formatDateTime(
                                widget.postdetail!.createdAt.toString())),
                            trailing: Container(
                                child: Stack(children: [
                              Icon(
                                Icons.remove_red_eye_outlined,
                                color: Colors.grey.shade500,
                                size: 15,
                              )
                            ]))))),
                Container(
                  width: MediaQuery.of(context).size.width,
                  child: Html(
                    data: widget.postdetail!.content
                        .toString(), // Le contenu HTML à afficher
                    /*onLinkTap: (url, context, attributes, element) {
    // Gérez le tap sur les liens si nécessaire
    },*/
                    style: {
                      'body': Style(
                        fontSize: FontSize(16.0),
                      ),
                    },
                  ),
                )
              ]))),
        ));
  }
}
