import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman_mobile_mobile/src/actions/CandidatAction.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/pages/mainPage.dart';
import 'package:jouman_mobile_mobile/src/pages/sigin_page.dart';
import 'package:jouman_mobile_mobile/src/themes/constants.dart';
import 'package:jouman_mobile_mobile/src/themes/theme.dart';
//import 'package:flutter_svg_provider/flutter_svg_provider.dart';
import '../widgets/widget.dart';

class SignUpPage extends StatefulWidget {
  @override
  _SignUpPageState createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  bool isLoading = false;
  final _formKey = GlobalKey<FormState>();

  bool isPasswordVisible = true;

  TextEditingController usernameController = TextEditingController();
  TextEditingController firstNameController = TextEditingController();
  TextEditingController lastNameController = TextEditingController();
  TextEditingController emailController = TextEditingController();
  TextEditingController telephoneController = TextEditingController();
  TextEditingController descriptionController = TextEditingController();
  TextEditingController dateNaissanceController = TextEditingController();

  @override
  void dispose() {
    usernameController.dispose();
    emailController.dispose();
    lastNameController.dispose();
    firstNameController.dispose();
    telephoneController.dispose();
    descriptionController.dispose();
    dateNaissanceController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: AppTheme_App.withPrimary,
        elevation: 0,
        leading: Image(
          width: 24,
          color: Colors.white,
          image: NetworkImage(
              'https://img.freepik.com/vecteurs-libre/concept-entretien-embauche-idee-emploi-procedure-embauche-recruteur-recherche-candidat-emploi-illustration-vectorielle-plane-isolee_613284-2727.jpg?w=740&t=st=1693512229~exp=1693512829~hmac=4f36a10e99a81aad89069960bc26f0f1c90c45ebbb2c10baa3bcfe279cfdf0e7'),
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
                    child: Form(
                        key: _formKey,
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
                                    style: GoogleFonts.nunito(
                                        color: AppTheme.primaryColor),
                                  ),
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Text(
                                    "Créer votre compte !",
                                    style: GoogleFonts.nunito(
                                        fontSize: 28,
                                        fontWeight: FontWeight.w500,
                                        color: AppTheme_App.primaryColor),
                                  ),
                                  SizedBox(
                                    height: 20,
                                  ),

                                  // nom
                                  Padding(
                                    padding:
                                        const EdgeInsets.symmetric(vertical: 5),
                                    child: TextFormField(
                                      controller: usernameController,
                                      style: kBodyText.copyWith(
                                          color: AppTheme_App.TextGray),
                                      keyboardType: TextInputType.text,
                                      textInputAction: TextInputAction.next,
                                      validator: (value) {
                                        if (value!.isEmpty) {
                                          return "Nom d'utilisateur requis";
                                        }
                                        return null; // La validation a réussi
                                      },
                                      decoration: InputDecoration(
                                        contentPadding: EdgeInsets.all(15),
                                        hintText: "Nom utilisateur",
                                        hintStyle: kBodyText,
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Colors.grey,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: AppTheme_App.withGreyOrginal,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                      ),
                                    ),
                                  ),

                                  Padding(
                                    padding:
                                        const EdgeInsets.symmetric(vertical: 5),
                                    child: TextFormField(
                                      controller: firstNameController,
                                      style: kBodyText.copyWith(
                                          color: AppTheme_App.TextGray),
                                      keyboardType: TextInputType.text,
                                      textInputAction: TextInputAction.next,
                                      validator: (value) {
                                        if (value!.isEmpty) {
                                          return "Ce champ est requis";
                                        }
                                        return null; // La validation a réussi
                                      },
                                      decoration: InputDecoration(
                                        contentPadding: EdgeInsets.all(15),
                                        hintText: "Nom",
                                        hintStyle: kBodyText,
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Colors.grey,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: AppTheme_App.withGreyOrginal,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                      ),
                                    ),
                                  ),

                                  // Prénoms
                                  Padding(
                                    padding:
                                        const EdgeInsets.symmetric(vertical: 5),
                                    child: TextFormField(
                                      controller: lastNameController,
                                      style: kBodyText.copyWith(
                                          color: AppTheme_App.TextGray),
                                      keyboardType: TextInputType.text,
                                      textInputAction: TextInputAction.next,
                                      validator: (value) {
                                        if (value!.isEmpty) {
                                          return "Prénoms est requis";
                                        }
                                        return null; // La validation a réussi
                                      },
                                      decoration: InputDecoration(
                                        contentPadding: EdgeInsets.all(15),
                                        hintText: "Prénoms",
                                        hintStyle: kBodyText,
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Colors.grey,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: AppTheme_App.withGreyOrginal,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                      ),
                                    ),
                                  ),

                                  // email
                                  Padding(
                                    padding:
                                        const EdgeInsets.symmetric(vertical: 5),
                                    child: TextFormField(
                                      controller: emailController,
                                      style: kBodyText.copyWith(
                                          color: AppTheme_App.TextGray),
                                      keyboardType: TextInputType.emailAddress,
                                      textInputAction: TextInputAction.next,
                                      validator: (value) {
                                        if (value!.isEmpty) {
                                          return "Ce champ est requis";
                                        }
                                        return null; // La validation a réussi
                                      },
                                      decoration: InputDecoration(
                                        contentPadding: EdgeInsets.all(15),
                                        hintText: "Email",
                                        hintStyle: kBodyText,
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Colors.grey,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: AppTheme_App.withGreyOrginal,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                      ),
                                    ),
                                  ),

                                  // telephone
                                  Padding(
                                    padding:
                                        const EdgeInsets.symmetric(vertical: 5),
                                    child: TextFormField(
                                      controller: telephoneController,
                                      style: kBodyText.copyWith(
                                          color: AppTheme_App.TextGray),
                                      keyboardType: TextInputType.number,
                                      textInputAction: TextInputAction.next,
                                      validator: (value) {
                                        if (value!.isEmpty) {
                                          return "Telephone requis";
                                        }
                                        return null; // La validation a réussi
                                      },
                                      decoration: InputDecoration(
                                        contentPadding: EdgeInsets.all(15),
                                        hintText: "Téléphone",
                                        hintStyle: kBodyText,
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Colors.grey,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: AppTheme_App.withGreyOrginal,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                      ),
                                    ),
                                  ),

                                  Padding(
                                    padding:
                                        const EdgeInsets.symmetric(vertical: 5),
                                    child: TextFormField(
                                      style: kBodyText.copyWith(
                                          color: AppTheme_App.TextGray),
                                      keyboardType: TextInputType.text,
                                      textInputAction: TextInputAction.next,
                                      validator: (value) {
                                        if (value!.isEmpty) {
                                          return "Date de naissance requis";
                                        }
                                        return null; // La validation a réussi
                                      },
                                      decoration: InputDecoration(
                                        contentPadding: EdgeInsets.all(15),
                                        hintText: "Date de naissance",
                                        hintStyle: kBodyText,
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Colors.grey,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: AppTheme_App.withGreyOrginal,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                      ),
                                    ),
                                  ),

                                  // Description
                                  Padding(
                                    padding:
                                        const EdgeInsets.symmetric(vertical: 5),
                                    child: TextFormField(
                                      controller: descriptionController,
                                      style: kBodyText.copyWith(
                                          color: AppTheme_App.TextGray),
                                      keyboardType: TextInputType.multiline,
                                      textInputAction: TextInputAction.next,
                                      validator: (value) {
                                        if (value!.isEmpty) {
                                          return "Description requis";
                                        }
                                        return null; // La validation a réussi
                                      },
                                      minLines: 3,
                                      maxLines: 100,
                                      decoration: InputDecoration(
                                        contentPadding: EdgeInsets.all(15),
                                        hintText: "Description sur profile",
                                        hintStyle: kBodyText,
                                        enabledBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: Colors.grey,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                        focusedBorder: OutlineInputBorder(
                                          borderSide: BorderSide(
                                            color: AppTheme_App.withGreyOrginal,
                                            width: 1,
                                          ),
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                      ),
                                    ),
                                  )
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
                                isLoading
                                    ? Container()
                                    : GestureDetector(
                                        onTap: () {
                                          Navigator.push(
                                            context,
                                            CupertinoPageRoute(
                                              builder: (context) =>
                                                  SignInPage(),
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
                                Checkbox(
                                  value: true,
                                  onChanged: (value) {
                                    setState(() {
                                      value = !value!;
                                    });
                                  },
                                ),
                                Text(
                                  "J'accepte les condition utilisation ? ",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.primaryColor),
                                ),
                              ],
                            ),
                            SizedBox(
                              height: 20,
                            ),
                            isLoading == true
                                ? CircularProgressIndicator()
                                : Container(
                                    height: 40,
                                    width: double.infinity,
                                    decoration: BoxDecoration(
                                      color: AppTheme.primaryColor,
                                      borderRadius: BorderRadius.circular(18),
                                    ),
                                    child: TextButton(
                                      style: ButtonStyle(
                                        overlayColor:
                                            MaterialStateProperty.resolveWith(
                                          (states) => Colors.black12,
                                        ),
                                      ),
                                      onPressed: () {
                                        if (_formKey.currentState!.validate()) {
                                          setState(() {
                                            isLoading = true;
                                          });
                                          registerCandidat(
                                                  context,
                                                  emailController.text,
                                                  usernameController.text,
                                                  firstNameController.text,
                                                  lastNameController.text,
                                                  dateNaissanceController.text,
                                                  telephoneController.text,
                                                  descriptionController.text)
                                              .then((value) {
                                            setState(() {
                                              isLoading = false;
                                            });
                                          });
                                        } else {}
                                      },
                                      child: Text(
                                        "S'inscrire",
                                        style: kButtonText.copyWith(
                                            color: Colors.white),
                                      ),
                                    ),
                                  ),
                            SizedBox(
                              height: 150,
                            )
                          ],
                        )),
                  )),
            ),
          ],
        ),
      ),
    );
  }
}
