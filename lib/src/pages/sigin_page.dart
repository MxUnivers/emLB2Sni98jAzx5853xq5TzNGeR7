import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman/src/config/theme.dart';
import 'package:jouman/src/pages/mainPage.dart';
import 'package:jouman/src/pages/sigup_page.dart';
import 'package:jouman/src/store/reducers.dart';
import 'package:jouman/src/themes/constants.dart';
import 'package:jouman/src/themes/theme.dart';
import 'package:redux/redux.dart';
import '../../main.dart';
import '../actions/CandidatAction.dart';
import '../widgets/widget.dart';

class SignInPage extends StatefulWidget {
  @override
  _SignInPageState createState() => _SignInPageState();
}

class _SignInPageState extends State<SignInPage> {
  late final Store<AppState> store = Store<AppState>(
    combineReducers<AppState>([
      (state, action) => AppState(
          jobs: jobListReducer(state.jobs, action),
          jobCategorys: jobCategoryListReducer(state.jobCategorys, action),
          candidats: candidatListReducer(state.candidats, action),
          candidat: candidatReducer(state.candidat, action),
          job: jobReducer(state.job, action),
          messages: [],
          posts: postListReducer(state.posts, action),
          candidatures: candidatureListReducer(state.candidatures, action)),
    ]),
    initialState: AppState.initialState(),
  );

  bool isLoading = false;
  bool isPasswordVisible = false;
  late TextEditingController emailController;
  late TextEditingController passwordController;

  @override
  void initState() {
    super.initState();
    emailController = TextEditingController();
    passwordController = TextEditingController();
  }

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          // Image de fond en haut de la page
          Container(
            height: MediaQuery.of(context).size.height * 0.3,
          ),
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Column(
                children: [
                  SizedBox(height: 20), // Espace pour l'image de fond
                  Expanded(
                    child: Card(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(15),
                      ),
                      elevation: 4,
                      child: Padding(
                        padding: const EdgeInsets.all(20),
                        child: Column(
                          children: [
                            Text(
                              "Se Connecter",
                              style: GoogleFonts.nunito(
                                fontSize: 28,
                                fontWeight: FontWeight.bold,
                                color: AppTheme_App.primaryColor,
                              ),
                            ),
                            SizedBox(height: 20),
                            // Champ email
                            TextField(
                              controller: emailController,
                              style: kBodyText.copyWith(
                                  color: AppTheme_App.TextGray),
                              keyboardType: TextInputType.emailAddress,
                              decoration: InputDecoration(
                                hintText: "Email",
                                hintStyle: kBodyText,
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(18),
                                  borderSide: BorderSide(color: Colors.grey),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(18),
                                  borderSide: BorderSide(
                                      color: AppTheme_App.primaryColor),
                                ),
                              ),
                            ),
                            SizedBox(height: 15),
                            // Champ mot de passe avec visibilité toggle
                            TextField(
                              controller: passwordController,
                              style: kBodyText.copyWith(
                                  color: AppTheme_App.TextGray),
                              obscureText: !isPasswordVisible,
                              decoration: InputDecoration(
                                hintText: "Mot de passe",
                                hintStyle: kBodyText,
                                suffixIcon: IconButton(
                                  icon: Icon(
                                    isPasswordVisible
                                        ? Icons.visibility
                                        : Icons.visibility_off,
                                    color: Colors.grey,
                                  ),
                                  onPressed: () {
                                    setState(() {
                                      isPasswordVisible = !isPasswordVisible;
                                    });
                                  },
                                ),
                                enabledBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(18),
                                  borderSide: BorderSide(color: Colors.grey),
                                ),
                                focusedBorder: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(18),
                                  borderSide: BorderSide(
                                      color: AppTheme_App.primaryColor),
                                ),
                              ),
                            ),
                            SizedBox(height: 20),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                GestureDetector(
                                  onTap: () {
                                    Navigator.push(
                                      context,
                                      CupertinoPageRoute(
                                        builder: (context) => SignUpPage(),
                                      ),
                                    );
                                  },
                                  child: Text(
                                    "Pas encore inscrit ? S'inscrire",
                                    style: kBodyText.copyWith(
                                      color: AppTheme_App.primaryColor,
                                      fontSize: 14,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            Spacer(),
                            isLoading
                                ? CircularProgressIndicator()
                                : SizedBox(
                                    width: double.infinity,
                                    child: ElevatedButton(
                                      style: ElevatedButton.styleFrom(
                                        padding:
                                            EdgeInsets.symmetric(vertical: 12),
                                        backgroundColor:
                                            AppTheme_App.primaryColor,
                                        shape: RoundedRectangleBorder(
                                          borderRadius:
                                              BorderRadius.circular(18),
                                        ),
                                      ),
                                      onPressed: () async {
                                        if (emailController.text.isEmpty ||
                                            passwordController.text.isEmpty) {
                                          ScaffoldMessenger.of(context)
                                              .showSnackBar(
                                            SnackBar(
                                              content: Text(
                                                  "Veuillez remplir tous les champs."),
                                            ),
                                          );
                                          return;
                                        }
                                        setState(() {
                                          isLoading = true;
                                        });

                                        try {
                                          await connectCandidat(
                                              context,
                                              store,
                                              emailController.text,
                                              passwordController.text);
                                        } catch (error) {
                                          ScaffoldMessenger.of(context)
                                              .showSnackBar(
                                            SnackBar(
                                              content:
                                                  Text("Échec de la connexion"),
                                              backgroundColor: Colors.red,
                                            ),
                                          );
                                        } finally {
                                          setState(() {
                                            isLoading = false;
                                          });
                                        }
                                      },
                                      child: Text(
                                        "Connexion",
                                        style: kButtonText.copyWith(
                                            color: Colors.white),
                                      ),
                                    ),
                                  ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
