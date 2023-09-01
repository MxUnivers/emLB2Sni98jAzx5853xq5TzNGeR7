import "package:flutter/material.dart";

import 'dart:async';

import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:offre_emplois_mobile_candidat/src/config/theme.dart';
import 'package:offre_emplois_mobile_candidat/src/model/CandidatModel.dart';
import '../themes/constants.dart';
import '../themes/theme.dart';
import '../widgets/EditImage.dart';
import '../widgets/EditTextField.dart';
import '../widgets/EditTextFieldDescription.dart';
import '../widgets/display_image_widget.dart';
import '../widgets/my_text_field.dart';

// This class handles the Page to dispaly the user's info on the "Edit Profile" Screen
class ProfileEditPage extends StatefulWidget {
  @override
  _ProfileEditPageState createState() => _ProfileEditPageState();
}

class _ProfileEditPageState extends State<ProfileEditPage> {
  @override
  Widget build(BuildContext context) {
    final candidat = CandidatModel(
        coverPicture:
            "https://img.freepik.com/vecteurs-premium/attrayant-garcon-afro-americain-tete-personnage-vecteur-semi-plat-coupe-cheveux-courte-icone-avatar-dessin-anime-modifiable-emotion-visage-illustration-point-colore-pour-animation-conception-graphique-web_151150-16474.jpg?w=740",
        firstname: "Bly",
        lastname: "Bi Gohi Aymar",
        email: "aymarbly559@gmail.com",
        description: "descriotion sur moi plus en detail sur moi",
        telephone: "92892892829");

    return Scaffold(
      body: Column(
        children: [
          AppBar(
            backgroundColor: Colors.transparent,
            elevation: 0,
            toolbarHeight: 10,
          ),
          Center(
              child: Padding(
                  padding: EdgeInsets.only(bottom: 20),
                  child: Text(
                    'Mettre a jour votre profile',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                      color: AppTheme_App.TextGray,
                    ),
                  ))),
          InkWell(
              onTap: () {
                navigateSecondPage(EditImagePage());
              },
              child: DisplayImage(
                imagePath: candidat.coverPicture.toString(),
                onPressed: () {},
              )),
          Container(
              margin: EdgeInsets.symmetric(horizontal: 10),
              height: 50,
              width: MediaQuery.of(context).size.width,
              child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    children: [
                      Card(
                          elevation: 1,
                          color: AppTheme_App.primaryColor,
                          child: Container(
                            margin: EdgeInsets.symmetric(horizontal: 10),
                            padding: EdgeInsets.symmetric(
                                horizontal: 10, vertical: 10),
                            decoration: BoxDecoration(
                                color: AppTheme_App.primaryColor,
                                borderRadius: BorderRadius.circular(5)),
                            child: Text(
                              "Personnel",
                              style: GoogleFonts.nunito(
                                  color: AppTheme_App.withPrimary),
                            ),
                          )),
                      Card(
                        elevation: 1,
                        color: AppTheme_App.withPrimary,
                        child: Container(
                          margin: EdgeInsets.symmetric(
                            horizontal: 10,
                          ),
                          padding: EdgeInsets.symmetric(
                              horizontal: 10, vertical: 10),
                          decoration: BoxDecoration(
                              color: AppTheme_App.withPrimary,
                              borderRadius: BorderRadius.circular(5)),
                          child: Text(
                            "Compétences",
                            style: GoogleFonts.nunito(
                                color: AppTheme_App.primaryColor),
                          ),
                        ),
                      )
                    ],
                  ))),
          Expanded(
            child: Container(
              margin: EdgeInsets.only(top: 30),
              height: MediaQuery.of(context).size.height,
              child: SingleChildScrollView(
                child: Container(
                  padding: EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    children: [

                      MyTextField(
                          hintText: 'Nom', inputType: TextInputType.text),
                      SizedBox(
                        height: 10,
                      ),
                      MyTextField(
                          hintText: 'Prénoms', inputType: TextInputType.text),
                      SizedBox(
                        height: 10,
                      ),
                      MyTextField(
                          hintText: 'Email', inputType: TextInputType.text),
                      SizedBox(
                        height: 10,
                      ),
                      MyTextField(
                          hintText: 'Téléphone', inputType: TextInputType.text),
                      SizedBox(
                        height: 10,
                      ),
                      Container(
                        height: 40,
                        width: double.infinity,
                        decoration: BoxDecoration(
                          color: AppTheme.primaryColor,
                          borderRadius: BorderRadius.circular(18),
                        ),
                        child: TextButton(
                          style: ButtonStyle(
                            overlayColor: MaterialStateProperty.resolveWith(
                                  (states) => Colors.black12,
                            ),
                          ),
                          onPressed: (){},
                          child: Text(
                            "Modifier ",
                            style: kButtonText.copyWith(
                                color: AppTheme_App.withPrimary),
                          ),
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ),
            flex: 4,
          )
        ],
      ),
    );
  }

  // Refrshes the Page after updating user info.
  FutureOr onGoBack(dynamic value) {
    setState(() {});
  }

  // Handles navigation and prompts refresh.
  void navigateSecondPage(Widget editForm) {
    Route route = MaterialPageRoute(builder: (context) => editForm);
    Navigator.push(context, route).then(onGoBack);
  }
}
