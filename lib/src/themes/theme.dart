import 'package:flutter/material.dart';

import 'light_color.dart';

class AppTheme {
  const AppTheme();
  static ThemeData lightTheme = ThemeData(
    primaryColor:
        LightColor.lightBlue, // Utilisation de la couleur principale bleu clair
    cardTheme: CardTheme(color: LightColor.background),
    textTheme: TextTheme(
      bodyLarge: TextStyle(color: LightColor.black),
      titleMedium: TextStyle(color: LightColor.titleTextColor),
    ),
    iconTheme: IconThemeData(color: LightColor.skyBlue),
    dividerColor: LightColor.lightGrey,
    primaryTextTheme: TextTheme(
      bodyLarge: TextStyle(color: LightColor.titleTextColor),
    ),
    colorScheme: ColorScheme(
      brightness: Brightness.light,
      background: LightColor.background,
      onBackground: LightColor.titleTextColor,
      primary: LightColor.lightBlue,
      onPrimary: LightColor.background,
      error: LightColor.red,
      onError: LightColor.background,
      secondary: LightColor.skyBlue,
      onSecondary: LightColor.background,
      surface: LightColor.lightGrey,
      onSurface: LightColor.black,
    ),
    bottomAppBarTheme: BottomAppBarTheme(color: LightColor.lightBlue),
  );

  static TextStyle titleStyle =
      const TextStyle(color: LightColor.titleTextColor, fontSize: 16);
  static TextStyle subTitleStyle =
      const TextStyle(color: LightColor.subTitleTextColor, fontSize: 12);

  static TextStyle h1Style =
      const TextStyle(fontSize: 24, fontWeight: FontWeight.bold);
  static TextStyle h2Style = const TextStyle(fontSize: 22);
  static TextStyle h3Style = const TextStyle(fontSize: 20);
  static TextStyle h4Style = const TextStyle(fontSize: 18);
  static TextStyle h5Style = const TextStyle(fontSize: 16);
  static TextStyle h6Style = const TextStyle(fontSize: 14);

  static List<BoxShadow> shadow = <BoxShadow>[
    BoxShadow(color: Color(0xfff8f8f8), blurRadius: 10, spreadRadius: 15),
  ];

  static EdgeInsets padding =
      const EdgeInsets.symmetric(horizontal: 20, vertical: 1);
  static EdgeInsets hPadding = const EdgeInsets.symmetric(
    horizontal: 10,
  );

  static double fullWidth(BuildContext context) {
    return MediaQuery.of(context).size.width;
  }

  static double fullHeight(BuildContext context) {
    return MediaQuery.of(context).size.height;
  }

  static final primary = Colors.blue;
  static final primaryColor = Colors.blue.shade300;

  static final darkTheme = ThemeData(
    scaffoldBackgroundColor: Colors.grey.shade900,
    primaryColorDark: primaryColor,
    colorScheme: ColorScheme.dark(primary: primary),
    dividerColor: Colors.white,
  );

  static final lightTheme2 = ThemeData(
    scaffoldBackgroundColor: Colors.white,
    primaryColor: primaryColor,
    colorScheme: ColorScheme.light(primary: primary),
    dividerColor: Colors.black,
  );
}
