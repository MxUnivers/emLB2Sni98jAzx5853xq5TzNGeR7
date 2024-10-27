import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman/src/actions/CandidatAction.dart';
import 'package:jouman/src/config/theme.dart';
import 'package:jouman/src/pages/sigin_page.dart';
import 'package:jouman/src/themes/constants.dart';

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
      backgroundColor: AppTheme_App.withPrimary,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Form(
            key: _formKey,
            child: Column(
              children: [
                SizedBox(height: 40),
                Text(
                  "S'inscrire",
                  textAlign: TextAlign.center,
                  style: GoogleFonts.nunito(
                    fontSize: 28,
                    fontWeight: FontWeight.w500,
                    color: AppTheme_App.primaryColor,
                  ),
                ),
                SizedBox(height: 20),
                buildTextField("Nom utilisateur", usernameController),
                buildTextField("Nom", firstNameController),
                buildTextField("Prénoms", lastNameController),
                buildTextField("Email", emailController,
                    keyboardType: TextInputType.emailAddress),
                buildTextField("Téléphone", telephoneController,
                    keyboardType: TextInputType.phone),
                buildDateField("Date de naissance", dateNaissanceController),
                buildTextField("Description", descriptionController,
                    maxLines: 3),
                SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text("Déjà un compte ? "),
                    GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          CupertinoPageRoute(
                              builder: (context) => SignInPage()),
                        );
                      },
                      child: Text(
                        'Se Connecter',
                        style: TextStyle(
                          color: AppTheme_App.primaryColor,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  children: [
                    Checkbox(value: true, onChanged: (value) {}),
                    Expanded(
                      child: Text(
                        "J'accepte de m'inscrire et d'accepter les termes d'utilisation.",
                        style: TextStyle(color: AppTheme_App.primaryColor),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                isLoading
                    ? CircularProgressIndicator()
                    : SizedBox(
                        width: double.infinity,
                        child: ElevatedButton(
                          style: ElevatedButton.styleFrom(
                            padding: EdgeInsets.symmetric(vertical: 12),
                            backgroundColor: AppTheme_App.primaryColor,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(18),
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
                                descriptionController.text,
                              ).then((value) {
                                setState(() {
                                  isLoading = false;
                                });
                              }).catchError((error) {
                                setState(() {
                                  isLoading = false;
                                });
                                ScaffoldMessenger.of(context).showSnackBar(
                                  SnackBar(
                                      content:
                                          Text("Erreur lors de l'inscription")),
                                );
                              });
                            } else {
                              ScaffoldMessenger.of(context).showSnackBar(
                                SnackBar(
                                    content: Text(
                                        "Veuillez vérifier les champs du formulaire.")),
                              );
                            }
                          },
                          child: Text(
                            "S'inscrire",
                            style: TextStyle(color: Colors.white, fontSize: 18),
                          ),
                        )),
                SizedBox(height: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget buildTextField(String hintText, TextEditingController controller,
      {TextInputType keyboardType = TextInputType.text, int maxLines = 1}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: TextFormField(
        controller: controller,
        style: TextStyle(color: AppTheme_App.TextGray),
        keyboardType: keyboardType,
        maxLines: maxLines,
        validator: (value) {
          if (value == null || value.isEmpty) {
            return "$hintText requis";
          }
          return null;
        },
        decoration: InputDecoration(
          hintText: hintText,
          hintStyle: TextStyle(color: Colors.grey),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(18),
            borderSide: BorderSide(color: Colors.grey),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(18),
            borderSide: BorderSide(color: AppTheme_App.primaryColor),
          ),
        ),
      ),
    );
  }

  Widget buildDateField(String hintText, TextEditingController controller) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: TextFormField(
        controller: controller,
        style: TextStyle(color: AppTheme_App.TextGray),
        readOnly: true,
        onTap: () async {
          DateTime? pickedDate = await showDatePicker(
            context: context,
            initialDate: DateTime.now(),
            firstDate: DateTime(1900),
            lastDate: DateTime.now(),
          );
          if (pickedDate != null) {
            controller.text =
                "${pickedDate.year}-${pickedDate.month.toString().padLeft(2, '0')}-${pickedDate.day.toString().padLeft(2, '0')}";
          }
        },
        validator: (value) {
          if (value == null || value.isEmpty) {
            return "$hintText requis";
          }
          return null;
        },
        decoration: InputDecoration(
          hintText: hintText,
          hintStyle: TextStyle(color: Colors.grey),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(18),
            borderSide: BorderSide(color: Colors.grey),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(18),
            borderSide: BorderSide(color: AppTheme_App.primaryColor),
          ),
        ),
      ),
    );
  }
}
