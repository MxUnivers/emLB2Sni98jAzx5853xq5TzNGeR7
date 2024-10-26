import 'package:flutter/material.dart';
import 'package:jouman/src/config/theme.dart';
import 'package:jouman/src/themes/constants.dart';

class MyPasswordField extends StatelessWidget {
  const MyPasswordField({
    Key,
    key,
    required this.isPasswordVisible,
    required this.onTap,
  }) : super(key: key);

  final bool isPasswordVisible;
  final Function onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 5),
      child: TextField(
        style: kBodyText.copyWith(
          color: AppTheme_App.TextGray,
        ),
        obscureText: isPasswordVisible,
        keyboardType: TextInputType.text,
        textInputAction: TextInputAction.done,
        decoration: InputDecoration(
          suffixIcon: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8.0),
            child: IconButton(
              splashColor: AppTheme_App.primaryColor,
              highlightColor: AppTheme_App.primaryColor,
              onPressed: () {
                onTap;
              },
              icon: Icon(
                isPasswordVisible ? Icons.visibility : Icons.visibility_off,
                color: Colors.grey,
              ),
            ),
          ),
          contentPadding: EdgeInsets.all(15),
          hintText: 'Password',
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
              color: AppTheme_App.primaryColor,
              width: 1,
            ),
            borderRadius: BorderRadius.circular(18),
          ),
        ),
      ),
    );
  }
}
