import 'dart:convert';
import 'dart:ffi';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/config/options/optionSuggestions.dart';
import 'package:mobileoffreemploi/storage/profileStorage.dart';
import 'package:mobileoffreemploi/views/profile/ProfilePage.dart';
import 'package:shared_preferences/shared_preferences.dart';

class ProfileFormPage extends StatefulWidget {
  @override
  _ProfileFormPageState createState() => _ProfileFormPageState();
}

class _ProfileFormPageState extends State<ProfileFormPage> {
  final _formKey = GlobalKey<FormState>();
  late Future<UserProfile> userProfileFuture;

  String selectedOptionSchool = '';
  bool _isLoading = false;

  //
  late TextEditingController _usernameController;
  late TextEditingController _firstnameController;
  late TextEditingController _lastnameController;
  late TextEditingController _emailController;
  late TextEditingController _villeController;
  late TextEditingController _telephoneController;
  late TextEditingController _descriptionController;
  late TextEditingController _yearsExperienceController;
  late TextEditingController _levelSchoolController;

  @override
  void initState() {
    super.initState();
    userProfileFuture = fetchUserProfile();
  }

  @override
  void dispose() {
    _usernameController.dispose();
    _firstnameController.dispose();
    _lastnameController.dispose();
    _emailController.dispose();
    _villeController.dispose();
    _telephoneController.dispose();
    _descriptionController.dispose();
    _yearsExperienceController.dispose();
    _levelSchoolController.dispose();
    super.dispose();
  }

  Future<void> _submitForm() async {
    if (_formKey.currentState!.validate()) {
      // Envoyer les données à votre API
      String updatedUsername = _usernameController.text;
      String updatedFirstname = _firstnameController.text;
      String updatedLastname = _lastnameController.text;
      String updatedEmail = _emailController.text;
      String updatedVille = _villeController.text;
      String updatedTelephone = _telephoneController.text;
      String updatedDescription = _descriptionController.text;
      String updatedYearsExperience = _yearsExperienceController.text;
      String updatedLevelSchool = selectedOptionSchool;

      // Effectuer la requête HTTP vers votre API pour mettre à jour le profil
      // Utilisez les valeurs mises à jour pour construire le corps de la requête

      setState(() {
        _isLoading = true;
      });
      // Exemple de code pour la requête HTTP avec la bibliothèque http
      final String apiUrl =
          '${baseurl["url"].toString()}/api/v1/candidat/edit/${id}';

      final response  = await http.put(Uri.parse(apiUrl), headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':
            "${baseurl["TypeToken"].toString()} ${baseurl["token"].toString()}"
      }, body: json.encode({
        'username': updatedUsername,
        'firstname': updatedFirstname,
        'lastname': updatedLastname,
        'email': updatedEmail,
        'ville': updatedVille,
        'telephone': updatedTelephone,
        'description': updatedDescription,
        'years_experience': updatedYearsExperience,
        'level_school': updatedLevelSchool,
      }),);

        if (response.statusCode == 200 || response.statusCode == 300) {
          // Succès de la mise à jour du profil
          // Afficher un message de succès ou effectuer une action supplémentaire
          setState(() {
            _isLoading = false;
          });
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              backgroundColor: Colors.green,
              content: Text("Votre profile vient d'être modifier "),
            ),
          );
        } else {
          // Échec de la mise à jour du profil
          // Afficher un message d'erreur ou effectuer une action supplémentaire
          setState(() {
            _isLoading = false;
          });
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Imposible de modifier votre profile')),
          );
        }
    }
  }

  late String id;
  Future<UserProfile> fetchUserProfile() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      id = prefs.getString(storageProfile["_id"].toString()) ?? "";
    });
    final String apiUrl =
        '${baseurl["url"].toString()}/api/v1/candidat/get_candidat/${id}';

    final response = await http.get(Uri.parse(apiUrl), headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':
          "${baseurl["TypeToken"].toString()} ${baseurl["token"].toString()}"
    });

    if (response.statusCode == 200) {
      final jsonData = json.decode(response.body);
      final userData = jsonData['data'];

      // récuperer les infoirmation sur ke candidat dans mon profile
      UserProfile userProfile = UserProfile(
        id: userData['_id'],
        username: userData['username'],
        firstname: userData['firstname'],
        lastname: userData['lastname'],
        coverPicture: userData['coverPicture'],
        telephone: userData['telephone'],
        email: userData['email'],
        ville: userData['ville'],
        description: userData['description'],
        years_experience: userData['years_experience'].toString(),
        level_school: userData['level_school'],
      );
      _usernameController = TextEditingController(text: userData['username']);
      _firstnameController = TextEditingController(text: userData['firstname']);
      _lastnameController = TextEditingController(text: userData['lastname']);
      _emailController = TextEditingController(text: userData['email']);
      _villeController = TextEditingController(text: userData['ville']);
      _telephoneController = TextEditingController(text: userData['telephone']);
      _descriptionController =
          TextEditingController(text: userData['description']);
      _yearsExperienceController =
          TextEditingController(text: userData['years_experience'].toString());
      _levelSchoolController =
          TextEditingController(text: userData['level_school']);
      return userProfile;
    } else {
      throw Exception('Failed to fetch user profile');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text('Modifier le profil'),
          backgroundColor: Colors.blue.shade800,
          centerTitle: true,
        ),
        body: FutureBuilder<UserProfile>(
          future: userProfileFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Center(
                  child: Container(
                color: Colors.grey.shade200,
                child: CircularProgressIndicator(),
              ));
            } else if (snapshot.hasError) {
              return Center(child: Text('Error: ${snapshot.error}'));
            } else if (snapshot.hasData) {
              UserProfile userProfile = snapshot.data!;
              return SingleChildScrollView(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Form(
                    key: _formKey,
                    child: Column(
                      children: [
                        TextFormField(
                          controller: _usernameController,
                          decoration:
                              InputDecoration(labelText: 'Nom d\'utilisateur'),
                          validator: (value) {
                            if (value!.isEmpty) {
                              return 'Veuillez saisir un nom d\'utilisateur';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: _firstnameController,
                          decoration: InputDecoration(labelText: 'Prénom'),
                          validator: (value) {
                            if (value!.isEmpty) {
                              return 'Veuillez saisir un prénom';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: _lastnameController,
                          decoration:
                              InputDecoration(labelText: 'Nom de famille'),
                          validator: (value) {
                            if (value!.isEmpty) {
                              return 'Veuillez saisir un nom de famille';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: _emailController,
                          decoration: InputDecoration(labelText: 'Email'),
                          validator: (value) {
                            if (value!.isEmpty) {
                              return 'Veuillez saisir une adresse email';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: _villeController,
                          decoration: InputDecoration(labelText: 'Ville'),
                          validator: (value) {
                            if (value!.isEmpty) {
                              return 'Veuillez saisir une ville';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: _telephoneController,
                          decoration: InputDecoration(labelText: 'Téléphone'),
                          validator: (value) {
                            if (value!.isEmpty) {
                              return 'Veuillez saisir un numéro de téléphone';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: _descriptionController,
                          decoration: InputDecoration(labelText: 'Description'),
                          validator: (value) {
                            if (value!.isEmpty) {
                              return 'Veuillez saisir une description';
                            }
                            return null;
                          },
                        ),
                        TextFormField(
                          controller: _yearsExperienceController,
                          decoration: InputDecoration(
                              labelText: 'Années d\'expérience'),
                          validator: (value) {
                            if (value!.isEmpty) {
                              return 'Veuillez saisir le nombre d\'années d\'expérience';
                            }
                            return null;
                          },
                        ),
                        Column(
                          children: [
                            SizedBox(
                              height: 5,
                            ),
                            Container(
                              child: Text("Diplôme"),
                            ),
                            SizedBox(
                              height: 5,
                            ),
                            Container(
                              height: 100,
                              child: CupertinoPicker(
                                itemExtent:
                                    32, // Hauteur de chaque élément dans le picker
                                onSelectedItemChanged: (int index) {
                                  setState(() {
                                    selectedOptionSchool =
                                        options_levels_school[index];
                                  });
                                },
                                children:
                                    options_levels_school.map((String option) {
                                  return Text(option);
                                }).toList(),
                              ),
                            )
                          ],
                        ),
                        SizedBox(height: 10),
                        _isLoading
                            ? MaterialButton(
                                onPressed: () {},
                                color: Colors.blueGrey,
                                child: CircularProgressIndicator(
                                  color: Colors.white,
                                ),
                              )
                            : ElevatedButton(
                                onPressed: _submitForm,
                                style: ElevatedButton.styleFrom(
                                    backgroundColor: Colors.blue.shade900),
                                child: Text('Enregistrer les modifications'),
                              )
                      ],
                    ),
                  ),
                ),
              );
            } else {
              return Center(child: Text('No data available'));
            }
          },
        ));
  }
}

class UserProfile {
  final String id;
  final String username;
  final String firstname;
  final String lastname;
  final String coverPicture;
  final String email;
  final String ville;
  final String telephone;
  final String description;
  final String years_experience;
  final String level_school;

  UserProfile({
    required this.id,
    required this.username,
    required this.firstname,
    required this.lastname,
    required this.coverPicture,
    required this.email,
    required this.ville,
    required this.telephone,
    required this.description,
    required this.years_experience,
    required this.level_school,
  });
}
