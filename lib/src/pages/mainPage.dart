import 'package:awesome_notifications/awesome_notifications.dart';
import 'package:flutter/material.dart';
import 'package:jouman_mobile_mobile/src/pages/help_page.dart';
import 'package:jouman_mobile_mobile/src/pages/home_page.dart';
import 'package:jouman_mobile_mobile/src/themes/theme.dart';
import 'package:salomon_bottom_bar/salomon_bottom_bar.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../config/locallvalue.dart';
import 'account_page.dart';
import 'app_step_page.dart';

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  int _currentIndex = 0;
  String title = "Accueil";

  @override
  void initState() {
    super.initState();
    AwesomeNotifications().isNotificationAllowed().then((isAllowed){
      if(!isAllowed){
        AwesomeNotifications().requestPermissionToSendNotifications();
      }
    });
  }

  bool isVisited=false;

  final List<Widget> _screens = [MyHomePage(),
    AccountPage(),
    HelpPage()
  ];




  final List<SalomonBottomBarItem> _bottomBarItems = [
    SalomonBottomBarItem(
      icon: Icon(Icons.home_outlined),
      title: Text('Accueil'),
      selectedColor: Colors.blue,
    ),
    SalomonBottomBarItem(
      icon: Icon(Icons.account_balance_outlined),
      title: Text('Compte'),
      selectedColor: Colors.blue,
    ),
    SalomonBottomBarItem(
      icon: Icon(Icons.help_outline),
      title: Text('Aide'),
      selectedColor: Colors.blue,
    ),
  ];


  final _pageController = PageController(initialPage: 0); // Contrôleur de PageView


  @override
  Widget build(BuildContext context) {
    return
      WillPopScope(
        onWillPop: () async {
          if (_currentIndex > 0) {
            _pageController.previousPage(
              duration: Duration(milliseconds: 300),
              curve: Curves.easeInOut,
            );
            return false; // Empêche la navigation arrière si nous sommes déjà sur la première page
          }
          return true; // Permet la navigation arrière si nous sommes sur la première page
        },
    child:
      Scaffold(
      body: PageView(
        controller: _pageController,
        onPageChanged: (index) => setState(() => _currentIndex = index),
        children: _screens,
      ),
      bottomNavigationBar: SalomonBottomBar(
        currentIndex: _currentIndex,
        onTap: (index){
          setState(() {
            _currentIndex = index;
            _pageController.animateToPage(
              index,
              duration: Duration(milliseconds: 150),
              curve: Curves.easeInOut,
            );
          });
        },
        items: _bottomBarItems
      ),
    ));
  }
}
