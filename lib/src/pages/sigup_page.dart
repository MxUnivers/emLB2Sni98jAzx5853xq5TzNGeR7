import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:offre_emplois_mobile_candidat/src/config/theme.dart';
import 'package:offre_emplois_mobile_candidat/src/pages/mainPage.dart';
import 'package:offre_emplois_mobile_candidat/src/pages/sigin_page.dart';
import 'package:offre_emplois_mobile_candidat/src/themes/constants.dart';
import 'package:offre_emplois_mobile_candidat/src/themes/theme.dart';
//import 'package:flutter_svg_provider/flutter_svg_provider.dart';
import '../widgets/widget.dart';





class SignUpPage extends StatefulWidget {
  @override
  _SignUpPageState createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  bool isPasswordVisible = true;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppTheme_App.withPrimary,
        elevation: 0,
        leading: Image(
          width: 24,
          color: Colors.white,
          image: NetworkImage('https://img.freepik.com/vecteurs-libre/concept-entretien-embauche-idee-emploi-procedure-embauche-recruteur-recherche-candidat-emploi-illustration-vectorielle-plane-isolee_613284-2727.jpg?w=740&t=st=1693512229~exp=1693512829~hmac=4f36a10e99a81aad89069960bc26f0f1c90c45ebbb2c10baa3bcfe279cfdf0e7'),
        ),
      ),
      body: SafeArea(
        //to make page scrollable
        child: CustomScrollView(
          reverse: true,
          slivers: [
            SliverFillRemaining(
              hasScrollBody: false,
              child: Container(
                decoration: BoxDecoration(color: AppTheme_App.withPrimary),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Flexible(
                        fit: FlexFit.loose,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "Bienvenue sur l'application offre enmplois",
                              style: GoogleFonts.nunito(color: AppTheme.primaryColor),
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Text(
                              "Créer votre compte !",
                              style: GoogleFonts.nunito(fontSize: 28, fontWeight: FontWeight.w500, color: AppTheme_App.primaryColor),
                            ),
                            SizedBox(
                              height: 60,
                            ),
                            MyTextField(
                                hintText: 'Nom ',
                                inputType: TextInputType.text
                            ),
                            MyTextField(
                                hintText: 'Prénoms',
                                inputType: TextInputType.text
                            ),
                            MyTextField(
                                hintText: 'Email',
                                inputType: TextInputType.text
                            ),
                            MyTextField(
                                hintText: 'Télephone',
                                inputType: TextInputType.text
                            ),
                            MyTextField(
                                hintText: 'Description sur vous',
                                inputType: TextInputType.text
                            ),
                            MyPasswordField(
                                isPasswordVisible: isPasswordVisible,
                                onTap: () {
                                  setState(() {
                                    isPasswordVisible = !isPasswordVisible;
                                  });
                                }
                            ),
                          ],
                        ),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            "Si vous avez un compte ? ",
                            style: kBodyText,
                          ),
                          GestureDetector(
                            onTap: () {
                              Navigator.push(
                                context,
                                CupertinoPageRoute(
                                  builder: (context) => SignInPage(),
                                ),
                              );
                            },
                            child: Text(
                              'Se Connecter',
                              style: kBodyText.copyWith(
                                color: AppTheme_App.primaryColor,
                              ),
                            ),
                          )
                        ],
                      ),


                      Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          Checkbox(value: true, onChanged: (value){
                            setState(() {
                              value=!value!;
                            });
                          },),
                          Text(
                            "J'accepte les condition utilisation ? ",
                            style: GoogleFonts.nunito(color: AppTheme_App.primaryColor),
                          ),
                        ],
                      ),

                      SizedBox(
                        height: 20,
                      ),
                      MyTextButton(
                          buttonName: 'Inscription',
                          onTap: () {},
                          bgColor: Colors.white,
                          textColor: Colors.black87
                      ),
                      SizedBox(
                        height: 150,
                      )
                    ],
                  ),
                )
              ),
            ),
          ],
        ),
      ),
    );
  }
}