import 'package:flutter/material.dart';
import 'package:offre_emplois_mobile_candidat/src/config/theme.dart';

import 'package:offre_emplois_mobile_candidat/src/themes/constants.dart';

class MyTextField extends StatelessWidget {
  const MyTextField({
     Key, key,
    required this.hintText,
    required this.inputType,
  }) : super(key: key);
  final String hintText;
  final TextInputType inputType;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5),
      child: TextField(
        style: kBodyText.copyWith(color: AppTheme_App.TextGray),
        keyboardType: inputType,
        textInputAction: TextInputAction.next,
        decoration: InputDecoration(
          contentPadding: EdgeInsets.all(15),
          hintText: hintText,
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
    );
  }
}