import "package:flutter/material.dart";
import "package:iconly/iconly.dart";
import "dart:ui";
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:iconly/iconly.dart';
import 'package:mobileoffreemploi/storage/profileStorage.dart';
import 'package:mobileoffreemploi/views/candidature/PostCandidaturePage.dart';
import "package:shared_preferences/shared_preferences.dart";


class DetailEmploiPage extends StatefulWidget {
  final String  id ;
  final String  titre ;
  final String  entreprise ;
  final String  logo ;
  final String  description ;
  final String  lieu ;

  const DetailEmploiPage({Key? key,
    required this.id ,
    required this.titre ,
    required this.entreprise,
    required this.logo ,
    required this.description ,
    required this.lieu
  }) : super(key: key);

  @override
  State<DetailEmploiPage> createState() => _DetailEmploiPageState();
}

class _DetailEmploiPageState extends State<DetailEmploiPage> {

  @override
  void initState() {
    super.initState();
    getDataProfileConnexion();
  }
  late String idConnexion;
  // Récupérer une valeur Profile du candidat
  Future<void> getDataProfileConnexion() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      idConnexion = prefs.getString(storageProfile["_id"].toString()) ?? "";
    });
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
      body: Stack(
        children: [
          SizedBox(
            width: double.infinity,
            child: Image.network("${widget.logo == null ?
            "644598cf98348dba517c689d":
                widget.logo
         }"),
          ),
          buttonArrow(context),
          scroll(),
        ],
      ),
    ));
  }

  buttonArrow(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20.0),
      child: InkWell(
        onTap: () {
          Navigator.pop(context);
        },
        child: Container(
          clipBehavior: Clip.hardEdge,
          height: 55,
          width: 55,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(25),
          ),
          child: BackdropFilter(
            filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
            child: Container(
              height: 55,
              width: 55,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(25),
              ),
              child: const Icon(
                Icons.arrow_back_ios,
                size: 20,
                color: Colors.white,
              ),
            ),
          ),
        ),
      ),
    );
  }

  scroll() {
    return DraggableScrollableSheet(
        initialChildSize: 0.6,
        maxChildSize: 1.0,
        minChildSize: 0.6,
        builder: (context, scrollController) {
          return Container(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            clipBehavior: Clip.hardEdge,
            decoration: const BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.only(
                  topLeft: const Radius.circular(20),
                  topRight: const Radius.circular(20)),
            ),
            child: SingleChildScrollView(
              controller: scrollController,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(top: 10, bottom: 25),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Container(
                          height: 5,
                          width: 35,
                          color: Colors.black12,
                        ),
                      ],
                    ),
                  ),
                  Text(
                    "${widget.titre}",
                    style: Theme.of(context).textTheme.headline5,
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Text(
                    "publié le :  10/06/23 ",
                    style: Theme.of(context)
                        .textTheme
                        .bodyText2!
                        .copyWith(color: Colors.grey.shade800),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  Row(
                    children: [
                      const SizedBox(
                        width: 5,
                      ),
                      Text(
                        "${widget.entreprise}",
                        style: Theme.of(context)
                            .textTheme
                            .headline6!
                            .copyWith(color: Colors.blue.shade900),
                      ),
                      const Spacer(),
                      const CircleAvatar(
                        radius: 25,
                        backgroundColor: Colors.blue,
                        child: Icon(
                          Icons.favorite_outline,
                          color: Colors.white,
                        ),
                      ),
                      const SizedBox(
                        width: 5,
                      ),
                      Text(
                        "273 Likes",
                        style: Theme.of(context)
                            .textTheme
                            .headline6!
                            .copyWith(color: Colors.grey.shade500),
                      ),
                    ],
                  ),
                  const Padding(
                    padding: EdgeInsets.symmetric(vertical: 15),
                    child: Divider(
                      height: 4,
                    ),
                  ),
                  Text(
                    "Description",
                    style: Theme.of(context).textTheme.headline6,
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Text(
                    "${widget.description}",
                    style: Theme.of(context)
                        .textTheme
                        .bodyText1!
                        .copyWith(color: Colors.grey.shade700),
                  ),
                  const Padding(
                    padding: EdgeInsets.symmetric(vertical: 15),
                    child: Divider(
                      height: 4,
                    ),
                  ),
                  Text(
                    "Autres infos",
                    style: Theme.of(context).textTheme.headline5,
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    child: Row(
                      children: [
                        const CircleAvatar(
                          radius: 10,
                          backgroundColor: Color(0xFFE3FFF8),
                          child: Icon(
                            Icons.done,
                            size: 15,
                            color: Colors.black12,
                          ),
                        ),
                        const SizedBox(
                          width: 10,
                        ),
                        Text(
                          "Lieu : ${widget.lieu}",
                          style: Theme.of(context).textTheme.bodyText2,
                        ),
                      ],
                    ),
                  ),
                  const Padding(
                    padding: EdgeInsets.symmetric(vertical: 15),
                    child: Divider(
                      height: 4,
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  // Botton pour poster à l'offre
                  MaterialButton(
                    onPressed:(){
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => PostCandidaturePage(id: widget.id.toString(),)),
                      );
                    },
                    child:
                    Container(
                    width: double.infinity,
                    height: 50.0,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(25.0),
                      gradient: LinearGradient(
                        colors: [Color(0xFF0072ff), Color(0xFF00c6ff)],
                        begin: Alignment.topLeft,
                        end: Alignment.bottomRight,
                      ),
                    ),
                    child: Center(
                      child: Text(
                        "Postuler à l'offre ",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 20.0,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  )
                  )
                ],
              ),
            ),
          );
        });
  }


}
