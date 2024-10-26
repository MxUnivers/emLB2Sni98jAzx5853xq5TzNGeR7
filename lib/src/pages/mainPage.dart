import 'package:awesome_notifications/awesome_notifications.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:jouman/src/actions/CandidatAction.dart';
import 'package:jouman/src/model/CandidatModel.dart';
import 'package:jouman/src/pages/help_page.dart';
import 'package:jouman/src/pages/home_page.dart';
import 'package:jouman/src/pages/sigin_page.dart';
import 'package:jouman/src/utils/storage.dart';
import 'package:redux/redux.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../main.dart';
import '../config/locallvalue.dart';
import 'account_page.dart';
import 'app_step_page.dart';

class MainPage extends StatefulWidget {
  final Store<AppState>? store;

  MainPage({this.store});

  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  late final Store<AppState> store;
  late final List<Widget> _screens;
  late final PageController _pageController;
  int _currentIndex = 0;

  late CandidatModel candidat = CandidatModel();

  @override
  void initState() {
    super.initState();
    store = widget.store!;
    _screens = [
      MyHomePage(store: store),
      AccountPage(),
      // HelpPage(),
    ];
    _pageController = PageController(initialPage: 0);

    // Appel de la fonction pour vérifier l'ID utilisateur
    _checkUserId();
  }

  Future<void> _checkUserId() async {
    final prefs = await SharedPreferences.getInstance();
    final id = prefs.getString(StorageUser.idKey) ?? "";

    if (id.isNotEmpty) {
      CandidatGetProfile(context, candidat.id.toString());
    } else {
      // Redirige vers la page de connexion si l'ID est vide
      Navigator.pushAndRemoveUntil(
        context,
        CupertinoPageRoute(
          builder: (context) => SignInPage(),
        ),
        (Route<dynamic> route) => false,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () async {
        if (_currentIndex > 0) {
          _pageController.previousPage(
            duration: Duration(milliseconds: 300),
            curve: Curves.easeInOut,
          );
          return false;
        }
        return true;
      },
      child: Scaffold(
        body: PageView(
          controller: _pageController,
          onPageChanged: (index) {
            setState(() {
              _currentIndex = index;
            });
          },
          children: _screens,
          physics: NeverScrollableScrollPhysics(),
        ),
        bottomNavigationBar: CupertinoTabBar(
          currentIndex: _currentIndex,
          onTap: (index) {
            setState(() {
              _currentIndex = index;
              _pageController.animateToPage(
                index,
                duration: Duration(milliseconds: 150),
                curve: Curves.easeInOut,
              );
            });
          },
          items: [
            BottomNavigationBarItem(
              icon: Icon(CupertinoIcons.home),
              label: 'Accueil',
            ),
            BottomNavigationBarItem(
              icon: Icon(CupertinoIcons.person),
              label: 'Compte',
            ),
            // BottomNavigationBarItem(
            //   icon: Icon(CupertinoIcons.question_circle),
            //   label: 'Aide',
            // ),
          ],
        ),
      ),
    );
  }
}
