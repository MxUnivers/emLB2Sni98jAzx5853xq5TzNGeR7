
import "dart:io";
import 'dart:typed_data';
import 'dart:convert';

import  "package:flutter/material.dart";
import "package:image_picker/image_picker.dart";
import "package:offre_emplois_mobile_candidat/src/model/CandidatModel.dart";
import "package:offre_emplois_mobile_candidat/src/widgets/appbar_widget.dart";
import "package:shared_preferences/shared_preferences.dart";




class EditImagePage extends StatefulWidget {
  const EditImagePage({Key? key}) : super(key: key);

  @override
  _EditImagePageState createState() => _EditImagePageState();
}

class _EditImagePageState extends State<EditImagePage>
    with SingleTickerProviderStateMixin {
  var user = CandidatModel(
    coverPicture: "https://img.freepik.com/vecteurs-premium/attrayant-garcon-afro-americain-tete-personnage-vecteur-semi-plat-coupe-cheveux-courte-icone-avatar-dessin-anime-modifiable-emotion-visage-illustration-point-colore-pour-animation-conception-graphique-web_151150-16474.jpg?w=360"
  );


  File? _imageFile;
  final String _prefKeyImage = 'photoUser';
  Future<void> _loadImageFromPrefs() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    String? imagePath = prefs.getString("photoUser");

    if (imagePath != null) {
      setState(() {
        _imageFile = File(imagePath);
      });
    }
  }



  Future<void> _pickImageFromGallery() async {
    final picker = ImagePicker();
    final pickedImage = await picker.pickImage(source: ImageSource.gallery);

    if (pickedImage != null) {
      setState(() {
        _imageFile = File(pickedImage.path);
      });

      // Enregistrer le chemin de l'image dans SharedPreferences
      SharedPreferences prefs = await SharedPreferences.getInstance();
      prefs.setString(_prefKeyImage, pickedImage.path);
    } else {
      print('Aucune image sélectionnée.');
    }
  }



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: buildAppBar(context),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.start,
        children: <Widget>[
          SizedBox(
              width: 330,
              child: const Text(
                "Upload a photo of yourself:",
                style: TextStyle(
                  fontSize: 23,
                  fontWeight: FontWeight.bold,
                ),
              )),
          Padding(
              padding: EdgeInsets.only(top: 20),
              child: SizedBox(
                  width: 200,
                  child: GestureDetector(
                    onTap: _pickImageFromGallery,
                    child: CircleAvatar(
                      radius: 50,
                      backgroundImage: _imageFile != null
                          ? FileImage(_imageFile! as File)
                          : AssetImage('assets/user.png') as ImageProvider,
                    ),
                  ))),
          Padding(
              padding: EdgeInsets.only(top: 40),
              child: Align(
                  alignment: Alignment.bottomCenter,
                  child: SizedBox(
                    width: 330,
                    height: 50,
                    child: ElevatedButton(
                      onPressed: () {},
                      child: const Text(
                        'Update',
                        style: TextStyle(fontSize: 15),
                      ),
                    ),
                  )))
        ],
      ),
    );
  }
}