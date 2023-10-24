import "package:flutter/material.dart";
import "package:cached_network_image/cached_network_image.dart";
import "package:html/parser.dart" show parse;
import "package:jouman_mobile_mobile/src/actions/CommentAction.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:jouman_mobile_mobile/src/model/CandidatModel.dart";
import "package:jouman_mobile_mobile/src/utils/baseurl.dart";
import "package:jouman_mobile_mobile/src/utils/storage.dart";
import "package:url_launcher/url_launcher.dart";
import "package:webview_flutter/webview_flutter.dart";
import "package:google_fonts/google_fonts.dart";
import "package:intl/intl.dart";
import "../model/CommentModel.dart";
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
  @override
  void initState() {
    // Assurez-vous de disposer du contrôleur quand vous n'en avez plus besoin.
    super.initState();

    SharedPreferencesService.getCandidatDataFromSharedPreferences().then((value){
      candidat = value;
    });

    fetchAllCommentList(widget.postdetail!.id.toString()).then((values) {
      setState(() {
        comments = values;
      });
    });
  }

  String formatDateTime(String dateTimeString) {
    final dateTime = DateTime.parse(dateTimeString);
    final dateFormat = DateFormat.yMMMMd();
    final timeFormat = DateFormat.Hm();

    final formattedDate = dateFormat.format(dateTime);
    final formattedTime = timeFormat.format(dateTime);

    return '$formattedDate à $formattedTime';
  }

  final TextEditingController commentController = TextEditingController();
  @override
  void dispose() {
    commentController
        .dispose(); // Assurez-vous de disposer du contrôleur quand vous n'en avez plus besoin.
    super.dispose();
  }

  List<CommentModel> comments = [];
  late CandidatModel candidat = CandidatModel(
    account: AccountCandidatModel(
      pack: "",
      dateEnd: "",
      countSms: 0,
      dateNow: "",
      solde: 0
    )
  );

  Future<void> _showCommentsDialog() async {
    return showDialog<void>(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text("Commentaires"),
          content: Container(
            width: double.maxFinite,
            child: ListView.builder(
              itemCount: comments.length,
              itemBuilder: (context, index) {
                return ListTile(
                  leading: CircleAvatar(
                    backgroundImage:
                        NetworkImage(comments[index].customerPhoto.toString()),
                  ),
                  title: Text(comments[index].customerName.toString()),
                  subtitle: Text(comments[index].content.toString()),
                );
              },
            ),
          ),
          actions: <Widget>[
            TextButton(
              child: Text('Fermer'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return
    Scaffold(
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
          title: Text(
              candidat.account!.pack.toString() == "DIAMOND" ?
              "${widget.postdetail!.title.toString()}"
              :
              "${candidat.account!.pack.toString()}",
              style: GoogleFonts.nunito(color: AppTheme_App.TextGray)),
          actions: [
            candidat.account!.pack.toString() == "DIAMOND"?
            Container(
                margin: EdgeInsets.only(right: 10),
                child: IconButton(
                    onPressed: () {},
                    icon: Icon(
                      Icons.bookmark_add_outlined,
                      color: AppTheme_App.TextGray,
                    ))):
                Container()
          ],
        ),
        body:
        candidat.account!.pack.toString() == "DIAMOND"?

        Container(
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
        )
            :

        Container(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            decoration: BoxDecoration(
              color: AppTheme_App.withPrimary
            ),
            child: Center(
              child: Column(
                children: [
                  Image.asset("assets/market.png",height: 150, width: 150,),
                  SizedBox(height: 10,),
                  SizedBox(height: 20,),
                  GestureDetector(
                    onTap: _launchURL,
                    child: Container(
                      padding: EdgeInsets.symmetric(vertical: 10 ,horizontal: 20),
                      decoration: BoxDecoration(
                        color: AppTheme_App.primaryColor,
                        borderRadius: BorderRadius.circular(20)
                      ),
                      child: Text("Souscrire prémuim",style: GoogleFonts.nunito(color: AppTheme_App.withPrimary, fontWeight: FontWeight.w700,fontSize: 15),),
                    ),
                  )
                ],
              ),
            )
        )
        ,

        // Floating Button

        floatingActionButton: candidat.account!.pack.toString() == "DIAMOND"
        ?FloatingActionButton(
          onPressed: () {
            // Gérez l'envoi du commentaire ici en utilisant commentController.text
            String commentText = commentController.text;
            // Faites ce que vous souhaitez avec le commentaire (envoi au serveur, traitement, etc.)
            print('Commentaire envoyé : $commentText');
            // Effacez le champ de texte après l'envoi du commentaire
            commentController.clear();
            _showCommentsDialog();
          },
          child: Icon(Icons.comment),
        )
        :
        Container(),
        floatingActionButtonLocation: FloatingActionButtonLocation.endFloat,
        bottomNavigationBar: candidat.account!.pack.toString() == "DIAMOND"
        ?BottomAppBar(
          shape: CircularNotchedRectangle(),
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: 16.0),
            child: Row(
              children: <Widget>[
                Expanded(
                  child: TextField(
                    controller: commentController,
                    decoration: InputDecoration(
                      hintText: 'Rédiger un commentaire...',
                    ),
                  ),
                ),
                IconButton(
                  icon: Icon(Icons.send),
                  onPressed: () {
                    // Gérez également l'envoi du commentaire ici si vous le souhaitez
                    String commentText = commentController.text;
                    // Faites ce que vous souhaitez avec le commentaire
                    print('Commentaire envoyé : $commentText');
                    if (commentController.text.length > "".length) {
                      SharedPreferencesService
                          .getCandidatDataFromSharedPreferences()
                          .then((candidatValue) {
                        setState(() {
                          candidat = candidatValue;
                        });
                        postComment(
                          context,
                          candidat.id.toString(),
                          widget.postdetail!.id.toString(),
                          commentController.text,
                          widget.postdetail!.areaPost.toString(),
                        );
                      });
                    }else{
                      ScaffoldMessenger.of(context).showSnackBar(
                        SnackBar(
                          backgroundColor: Colors.red.shade500,
                          content: Text("Champ de commentaire est vide",style: GoogleFonts.nunito(color: AppTheme_App.withPrimary), textAlign: TextAlign.center),
                        ),
                      );
                    }
                  },
                ),
              ],
            ),
          ),
        ):
            BottomAppBar()
    );
  }



  _launchURL() async {
    const url = baseurl.url_site_web;  // Remplacez par l'URL que vous souhaitez ouvrir.
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Impossible d\'ouvrir l\'URL : $url';
    }
  }


}
