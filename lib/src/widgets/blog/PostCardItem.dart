import "package:flutter/material.dart";

import "../../model/PostModel.dart";
import 'package:html/parser.dart' show parse;



class PostCardItem extends StatefulWidget {
  final PostModel? post ;
  const PostCardItem({Key? key,this.post}) : super(key: key);

  @override
  State<PostCardItem> createState() => _PostCardItemState();
}

class _PostCardItemState extends State<PostCardItem> {





  @override
  Widget build(BuildContext context) {
    return
      Container(
        width: MediaQuery.of(context).size.width,
        margin: EdgeInsets.symmetric(vertical: 1),
        child: Card(
          elevation: 0.5,
          child: ListTile(
            leading: Container(
                height: 50 ,
                width: 50,
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(10),
                    image: DecorationImage(
                        image: NetworkImage(
                            "${widget.post!.coverPicture.toString()}"
                        ),
                        fit: BoxFit.cover
                    )
                )
            ),
            title: Text("${widget.post!.title.toString()}",maxLines: 2,),
            subtitle: Text("${parse(widget.post!.content).body!.text}",maxLines: 1,),
            trailing: IconButton(
                onPressed: (){},
                icon: Icon(Icons.favorite_outline_rounded,size: 12)
            ),
          ),
        ),
      );
    }

  String extractTextFromHTML(String htmlContent) {
    final document = parse(htmlContent);
    final String text = document.body!.text;
    return text;
  }

}
