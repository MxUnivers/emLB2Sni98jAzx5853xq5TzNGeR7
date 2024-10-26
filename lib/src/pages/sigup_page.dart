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
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  SizedBox(
                                    height: 10,
                                  ),
                                  Text(
                                    "S'inscrire",
                                    textAlign: TextAlign.center,
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
                                      controller: dateNaissanceController,
                                      readOnly:
                                          true, // Empêche la saisie manuelle
                                      style: kBodyText.copyWith(
                                          color: AppTheme_App.TextGray),
                                      keyboardType: TextInputType.datetime,
                                      textInputAction: TextInputAction.next,
                                      validator: (value) {
                                        if (value!.isEmpty) {
                                          return "Date de naissance requise";
                                        }
                                        return null;
                                      },
                                      onTap: () async {
                                        // Affiche le DatePicker lorsque le champ est tapé
                                        DateTime? pickedDate =
                                            await showDatePicker(
                                          context: context,
                                          initialDate: DateTime.now(),
                                          firstDate: DateTime(1900),
                                          lastDate: DateTime.now(),
                                        );
                                        if (pickedDate != null) {
                                          // Format en 'yyyy-MM-dd' pour le stockage conforme à l'input HTML
                                          String formattedDate =
                                              "${pickedDate.year}-${pickedDate.month.toString().padLeft(2, '0')}-${pickedDate.day.toString().padLeft(2, '0')}";
                                          dateNaissanceController.text =
                                              formattedDate;
                                        }
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
                                  "Déja un compte ? ",
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
                                  "J'accepte de m'inscrire ",
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
                                      color: AppTheme_App.primaryColor,
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
                                          // Vérification manuelle des champs importants avant d'envoyer les données
                                          if (emailController.text.isEmpty ||
                                              usernameController.text.isEmpty ||
                                              firstNameController
                                                  .text.isEmpty ||
                                              lastNameController.text.isEmpty ||
                                              dateNaissanceController
                                                  .text.isEmpty ||
                                              telephoneController
                                                  .text.isEmpty) {
                                            ScaffoldMessenger.of(context)
                                                .showSnackBar(
                                              SnackBar(
                                                  content: Text(
                                                      "Tous les champs sont requis.")),
                                            );
                                            return; // Arrête l'exécution si un champ est vide
                                          }

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
                                            descriptionController.text,
                                          ).then((value) {
                                            setState(() {
                                              isLoading = false;
                                            });
                                          }).catchError((error) {
                                            // Gérer les erreurs d'inscription
                                            setState(() {
                                              isLoading = false;
                                            });
                                            ScaffoldMessenger.of(context)
                                                .showSnackBar(
                                              SnackBar(
                                                  content: Text(
                                                      "Erreur lors de l'inscription")),
                                            );
                                          });
                                        } else {
                                          // Message si le formulaire n'est pas valide
                                          ScaffoldMessenger.of(context)
                                              .showSnackBar(
                                            SnackBar(
                                                content: Text(
                                                    "Veuillez vérifier les champs du formulaire.")),
                                          );
                                        }
                                      },
                                      child: Text(
                                        "S'inscrire",
                                        style: kButtonText.copyWith(
                                            color: Colors.white),
                                      ),
                                    ),
                                  ),
                            SizedBox(
                              height: 10,
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
