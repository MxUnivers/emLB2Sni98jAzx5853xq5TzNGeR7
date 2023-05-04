import 'package:flutter/material.dart';

class ProfilePage extends StatelessWidget {
  const ProfilePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          onPressed: () {},
          icon: Icon(Icons.backspace_outlined),
        ),
        title: Text('Mon profil'),
        centerTitle: true,
        backgroundColor: Colors.blue.shade800,
        actions: [
          IconButton(
            onPressed: () {},
            icon: Icon(
              Icons.edit_note,
              size: 40,
            ),
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
                child: Center(
              child: CircleAvatar(
                radius: 100,
                backgroundImage: NetworkImage(
                    'https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png'),
              ),
            )),
            SizedBox(height: 16),
            Container(
                child: Center(
                    child: Column(
              children: [
                SizedBox(height: 8),
                Text(
                  'John Doe',
                  style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
                Text(
                  'Développeur Flutter',
                  style: TextStyle(fontSize: 18),
                ),
                Text(
                  'email : email@gmail.com',
                  style: TextStyle(fontSize: 18),
                )
              ],
            ))),
            SizedBox(height: 16),
            Divider(),
            SizedBox(height: 16),
            Container(
              child: Center(
                child: Column(
                  children: [
                    Container(
                      padding: EdgeInsets.fromLTRB(20, 50, 20, 30),
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(20),
                          boxShadow: [
                            BoxShadow(
                                color: Colors.grey.shade200, blurRadius: 3)
                          ]),
                      child: Column(
                        children: [
                          Text(
                            'Expérience professionnelle',
                            style: TextStyle(
                                fontSize: 18, fontWeight: FontWeight.bold),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Développeur Flutter - Entreprise X (2020-2021)',
                            style: TextStyle(fontSize: 16),
                          ),
                          SizedBox(height: 8),
                          Text(
                            'Développeur Android - Entreprise Y (2018-2020)',
                            style: TextStyle(fontSize: 16),
                          ),
                        ],
                      ),
                    )
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
