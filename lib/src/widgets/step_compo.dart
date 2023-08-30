import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";

import "../config/theme.dart";


class StepPage extends StatelessWidget {
  final String imagePath;
  final String title;
  final String description;

  const StepPage({
    required this.imagePath,
    required this.title,
    required this.description,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Container(
          height: 200,
          width: 200,
          decoration: BoxDecoration(
            image: DecorationImage(image: AssetImage(imagePath))
          ),
        ),
        SizedBox(height: 20),
        Text(
          title,
          style: GoogleFonts.nunito(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: AppTheme_App.primaryColor
          ),
        ),
        SizedBox(height: 20),
        Container(
          padding: EdgeInsets.symmetric(horizontal: 15),
          child: Text(
            description,
            textAlign: TextAlign.center,
            style: GoogleFonts.nunito(
              fontSize: 16,
              color: Colors.grey,
            ),
          )
        )
      ],
    );
  }
}
