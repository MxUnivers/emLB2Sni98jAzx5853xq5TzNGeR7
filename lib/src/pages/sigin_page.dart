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
//import 'package:flutter_svg_provider/flutter_svg_provider.dart';
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

  void onTapRedirectHome() {
    Navigator.push(
      context,
      MaterialPageRoute(
          builder: (context) => MainPage(
                store: store,
              )),
    );
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
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Flexible(
                          fit: FlexFit.loose,
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              SizedBox(
                                height: 10,
                              ),
                              Text(
                                "Se Connecter",
                                style: GoogleFonts.nunito(
                                    fontSize: 28,
                                    fontWeight: FontWeight.w500,
                                    color: AppTheme_App.primaryColor),
                              ),
                              SizedBox(
                                height: 60,
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 5),
                                child: TextField(
                                  controller: emailController,
                                  style: kBodyText.copyWith(
                                      color: AppTheme_App.TextGray),
                                  keyboardType: TextInputType.emailAddress,
                                  textInputAction: TextInputAction.next,
                                  decoration: InputDecoration(
                                    contentPadding: EdgeInsets.all(15),
                                    hintText: "Email",
                                    hintStyle: kBodyText,
                                    enabledBorder: OutlineInputBorder(
                                      borderSide: BorderSide(
                                        color: Colors.grey,
                                        width: 1,
                                      ),
                                      borderRadius: BorderRadius.circular(18),
                                    ),
                                    focusedBorder: OutlineInputBorder(
                                      borderSide: BorderSide(
                                        color: AppTheme_App.withGreyOrginal,
                                        width: 1,
                                      ),
                                      borderRadius: BorderRadius.circular(18),
                                    ),
                                  ),
                                ),
                              ),
                              Padding(
                                padding:
                                    const EdgeInsets.symmetric(vertical: 5),
                                child: TextField(
                                  controller: passwordController,
                                  style: kBodyText.copyWith(
                                    color: AppTheme_App.TextGray,
                                  ),
                                  obscureText:
                                      !isPasswordVisible, // Masque le texte si isPasswordVisible est false
                                  keyboardType: TextInputType.text,
                                  textInputAction: TextInputAction.done,
                                  decoration: InputDecoration(
                                    suffixIcon: Padding(
                                      padding: const EdgeInsets.symmetric(
                                          horizontal: 8.0),
                                      child: IconButton(
                                        splashColor: AppTheme_App.primaryColor,
                                        highlightColor:
                                            AppTheme_App.primaryColor,
                                        onPressed: () {
                                          setState(() {
                                            isPasswordVisible =
                                                !isPasswordVisible; // Inverse la visibilité
                                          });
                                        },
                                        icon: Icon(
                                          isPasswordVisible
                                              ? Icons.visibility
                                              : Icons.visibility_off,
                                          color: Colors.grey,
                                        ),
                                      ),
                                    ),
                                    contentPadding: EdgeInsets.all(15),
                                    hintText: 'Password',
                                    hintStyle: kBodyText,
                                    enabled: true,
                                    enabledBorder: OutlineInputBorder(
                                      borderSide: BorderSide(
                                        color: Colors.grey,
                                        width: 1,
                                      ),
                                      borderRadius: BorderRadius.circular(18),
                                    ),
                                    focusedBorder: OutlineInputBorder(
                                      borderSide: BorderSide(
                                        color: AppTheme_App.primaryColor,
                                        width: 1,
                                      ),
                                      borderRadius: BorderRadius.circular(18),
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Text(
                              "",
                              style: kBodyText,
                            ),
                            isLoading
                                ? Text("")
                                : GestureDetector(
                                    onTap: () {
                                      Navigator.push(
                                        context,
                                        CupertinoPageRoute(
                                          builder: (context) => SignUpPage(),
                                        ),
                                      );
                                    },
                                    child: Text(
                                      "S'inscrire",
                                      style: kBodyText.copyWith(
                                        color: AppTheme_App.primaryColor,
                                      ),
                                    ),
                                  )
                          ],
                        ),
                        SizedBox(
                          height: 20,
                        ),
                        isLoading == true
                            ? Container(
                                child: CircularProgressIndicator(),
                              )
                            : Container(
                                height: 35,
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
                                  onPressed: () async {
                                    // Vérifiez que les champs email et password ne sont pas vides
                                    if (emailController.text.isEmpty ||
                                        passwordController.text.isEmpty) {
                                      // Affiche un message d'erreur si un champ est vide
                                      ScaffoldMessenger.of(context)
                                          .showSnackBar(
                                        SnackBar(
                                            content: Text(
                                                "Veuillez remplir tous les champs.")),
                                      );
                                      return;
                                    }

                                    setState(() {
                                      isLoading = true;
                                    });

                                    String email = emailController.text;
                                    String password = passwordController.text;

                                    try {
                                      await connectCandidat(
                                          context, store, email, password);
                                    } catch (error) {
                                      // Affiche un message d'erreur si la connexion échoue
                                      ScaffoldMessenger.of(context)
                                          .showSnackBar(
                                        SnackBar(
                                            content:
                                                Text("Échec de la connexion ")),
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
                                        color: AppTheme_App.withPrimary),
                                  ),
                                ),
                              ),
                        SizedBox(
                          height: 150,
                        )
                      ],
                    ),
                  )),
            ),
          ],
        ),
      ),
    );
  }
}
