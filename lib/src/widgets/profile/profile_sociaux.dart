import "package:flutter/material.dart";
import "package:jouman/src/model/CandidatModel.dart";

class ProfileSociaux extends StatefulWidget {
  final CandidatModel? candidat;
  const ProfileSociaux({Key? key, this.candidat}) : super(key: key);

  @override
  State<ProfileSociaux> createState() => _ProfileSociauxState();
}

class _ProfileSociauxState extends State<ProfileSociaux> {
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal: 20),
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        child: SingleChildScrollView(
          child: Container(
              padding: EdgeInsets.only(top: 10, bottom: 30),
              child: Column(
                children: [
                  Container(
                    child: Card(
                      elevation: 0.5,
                      child: Container(
                        child: Row(
                          children: [
                            Icon(Icons.facebook),
                            Text("${widget.candidat?.facebookUrl}")
                          ],
                        ),
                      ),
                    ),
                  ),
                  Divider(
                    height: 10,
                  ),
                  Container(
                    child: Card(
                      elevation: 0.5,
                      child: Container(
                        child: Row(
                          children: [
                            Icon(Icons.linked_camera_rounded),
                            Text("${widget.candidat?.linkedinUrl}")
                          ],
                        ),
                      ),
                    ),
                  ),
                  Divider(height: 10),
                  Container(
                    child: Card(
                      elevation: 0.5,
                      child: Container(
                        child: Row(
                          children: [
                            Icon(Icons.integration_instructions),
                            Text("${widget.candidat?.instagramUrl}")
                          ],
                        ),
                      ),
                    ),
                  ),
                  Divider(height: 10),
                  Container(
                    child: Card(
                      elevation: 0.5,
                      child: Container(
                        child: Row(
                          children: [
                            Icon(Icons.sports_soccer),
                            Text("${widget.candidat?.twitterUrl}")
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              )),
        ));
  }
}
