import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:jouman/main.dart';
import 'package:jouman/src/actions/CandidatAction.dart';
import 'package:jouman/src/config/theme.dart';
import 'package:jouman/src/model/CandidatModel.dart';
import 'package:jouman/src/pages/mainPage.dart';
import 'package:jouman/src/pages/sigin_page.dart';
import 'package:jouman/src/store/reducers.dart';
import 'package:redux/redux.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../config/locallvalue.dart';
import '../utils/storage.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({Key? key}) : super(key: key);

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
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

  late CandidatModel candidat =
      CandidatModel(account: AccountCandidatModel(), is_active: false);

  bool isLoading = true;
  bool isImageVisible = false; // Pour gérer l'opacité de l'image

  @override
  void initState() {
    super.initState();
    Future.delayed(Duration(seconds: 5), () {
      setState(() {
        isImageVisible = true; // Déclenche l’apparition après 5 secondes
      });
    });
    checkLoginStatus();
  }

  void checkLoginStatus() async {
    final prefs = await SharedPreferences.getInstance();
    final id = prefs.getString(StorageUser.idKey) ?? "";

    if (id.isNotEmpty) {
      SharedPreferencesService.getCandidatDataFromSharedPreferences()
          .then((candidat) {
        setState(() {
          this.candidat = candidat;
          isLoading = false;
        });
        if (candidat.is_active) {
          Navigator.pushAndRemoveUntil(
            context,
            CupertinoPageRoute(builder: (context) => MainPage(store: store)),
            (Route<dynamic> route) => false,
          );
        } else {
          navigateToSignIn();
        }
      });
    } else {
      setState(() {
        isLoading = false;
      });
      navigateToSignIn();
    }
  }

  void navigateToSignIn() {
    Navigator.pushAndRemoveUntil(
      context,
      CupertinoPageRoute(builder: (context) => SignInPage()),
      (Route<dynamic> route) => false,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme_App.primaryColor,
      body: Center(
        child: isLoading
            ? CircularProgressIndicator(color: Colors.white)
            : AnimatedOpacity(
                opacity: isImageVisible ? 1.0 : 0.0,
                duration: Duration(seconds: 2),
                child: Container(
                  height: 105,
                  width: 105,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(52.5),
                    color: AppTheme_App.withPrimary,
                    image: DecorationImage(
                      image: AssetImage("assets/ic_launcher.png"),
                    ),
                  ),
                ),
              ),
      ),
    );
  }
}
