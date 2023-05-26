import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobileoffreemploi/config/baseurl.dart';
import 'package:mobileoffreemploi/storage/profileStorage.dart';
import 'package:mobileoffreemploi/views/profile/ProfileFormPage.dart';
import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

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

class UserProfilePage extends StatefulWidget {
  @override
  _UserProfilePageState createState() => _UserProfilePageState();
}

class _UserProfilePageState extends State<UserProfilePage> {
  late Future<UserProfile> userProfileFuture;

  @override
  void initState() {
    super.initState();
    userProfileFuture = fetchUserProfile();
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
      return userProfile;
    } else {
      throw Exception('Failed to fetch user profile');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: Text('Profile'),
        centerTitle: true,
        backgroundColor: Colors.blue.shade800,
        actions: [
          IconButton(
              onPressed: (){
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ProfileFormPage()),
                );
              },
              icon: Icon(Icons.edit_note)
          )
        ],
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
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Center(
                      child: CircleAvatar(
                        radius: 50,
                        backgroundImage: NetworkImage(userProfile.coverPicture),
                      ),
                    ),
                    SizedBox(height: 16),
                    Container(
                      padding: EdgeInsets.all(3),
                      width: double.infinity,
                      decoration: BoxDecoration(
                          color: Colors.grey.shade100,
                          borderRadius: BorderRadius.circular(5)),
                      child: Column(
                        children: [
                          Text(
                            'Username:',
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                          Text(userProfile.username)
                        ],
                      ),
                    ),
                    SizedBox(height: 16),
                    Container(
                      padding: EdgeInsets.all(3),
                      width: double.infinity,
                      decoration: BoxDecoration(
                          color: Colors.grey.shade100,
                          borderRadius: BorderRadius.circular(5)),
                      child: Column(
                        children: [
                          Text(
                            'Name:',
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                          Text(
                              '${userProfile.firstname} ${userProfile.lastname}'),
                        ],
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(3),
                      width: double.infinity,
                      decoration: BoxDecoration(
                          color: Colors.grey.shade100,
                          borderRadius: BorderRadius.circular(5)),
                      child: Column(
                        children: [
                          Text(
                            'email : ',
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                          Text('${userProfile.email}'),
                        ],
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(3),
                      width: double.infinity,
                      decoration: BoxDecoration(
                          color: Colors.grey.shade100,
                          borderRadius: BorderRadius.circular(5)),
                      child: Column(
                        children: [
                          Text(
                            'Name:',
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                          Text(
                              '${userProfile.firstname} ${userProfile.lastname}'),
                        ],
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(3),
                      height: 100,
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: Colors.blueGrey.shade100,
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text(
                            'Description sur vous : ',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                                fontSize: 16, fontWeight: FontWeight.bold),
                          ),
                          SizedBox(height: 20),
                          Text('${userProfile.description}',  textAlign: TextAlign.center,),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          } else {
            return Center(child: Text('No data available'));
          }
        },
      ),
    );
  }
}
