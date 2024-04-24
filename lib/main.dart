import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatureModel.dart';
import 'package:jouman_mobile_mobile/src/model/JobCategoryModel.dart';
import 'package:jouman_mobile_mobile/src/model/JobModel.dart';
import 'package:jouman_mobile_mobile/src/model/MessageModel.dart';
import 'package:jouman_mobile_mobile/src/model/PostModel.dart';
import 'package:redux/redux.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatModel.dart';
import 'package:jouman_mobile_mobile/src/pages/mainPage.dart';
import 'package:jouman_mobile_mobile/src/store/reducers.dart';
import 'src/themes/theme.dart';

class AppState {
  final CandidatModel candidat;
  final List<CandidatModel> candidats;
  final JobModel job;
  final List<JobModel> jobs;
  final List<JobCategoryModel> jobCategorys;
  final List<MessageModel> messages;
  final List<PostModel> posts;
  final List<CandidatureModel> candidatures;

  AppState({
    required this.candidat,
    required this.candidats,
    required this.job,
    required this.jobs,
    required this.jobCategorys,
    required this.messages,
    required this.posts,
    required this.candidatures,
  });

  factory AppState.initialState() {
    return AppState(
      candidat: CandidatModel(),
      job: JobModel(),
      jobs: [], // Initialiser à une liste vide
      jobCategorys: [], // Initialiser à une liste vide
      candidats: [], // Initialiser à une liste vide
      messages: [], // Ajouter des initialisations si nécessaire
      posts: [], // Ajouter des initialisations si nécessaire
      candidatures: [], // Initialiser à une liste vide
    );
  }
}

void main() {
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);

  final store = Store<AppState>(
    combineReducers<AppState>([
          (state, action) => AppState(
              jobs: jobListReducer(state.jobs, action),
              jobCategorys: jobCategoryListReducer(state.jobCategorys, action),
            candidats: candidatListReducer(state.candidats, action),
            candidat: candidatReducer(state.candidat, action),
            job: jobReducer(state.job, action), messages: [],
            posts:postListReducer(state.posts, action),
            candidatures:candidatureListReducer(state.candidatures, action)
      ),
      // Ajoutez d'autres réducteurs pour d'autres parties de l'état global ici
    ]),
    initialState: AppState.initialState(),
  );

  runApp(MyApp(store: store));
}

class MyApp extends StatelessWidget {
  final Store<AppState> store;

  MyApp({required this.store});

  @override
  Widget build(BuildContext context) {
    return StoreProvider(
      store: store,
      child: MaterialApp(
        supportedLocales: [
          Locale('en', 'US'), // Anglais
          Locale('fr', 'FR'), // Français
          // Ajoutez d'autres locales prises en charge ici
        ],
        locale: Locale('en', 'US'), // Anglais par défaut
        title: "HantiGaspi",
        theme: AppTheme.lightTheme.copyWith(
          textTheme: GoogleFonts.mulishTextTheme(
            Theme.of(context).textTheme,
          ),
        ),
        debugShowCheckedModeBanner: false,
        home: MainPage(store: store),
      ),
    );
  }
}
