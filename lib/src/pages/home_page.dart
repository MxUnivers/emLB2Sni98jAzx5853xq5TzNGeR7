import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatModel.dart';
import 'package:jouman_mobile_mobile/src/model/JobModel.dart';
import 'package:jouman_mobile_mobile/src/pages/search_page.dart';
import 'package:jouman_mobile_mobile/src/utils/baseurl.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/CategoryJobHome.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/JobListHome.dart';

import '../actions/PostAction.dart';
import '../model/PostModel.dart';
import '../utils/storage.dart';
import '../widgets/blog/PostCardItem.dart';
import '../widgets/blog/PostCategory.dart';
import '../widgets/home/AppBarHome.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, this.title}) : super(key: key);

  final String? title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  void initState() {
    super.initState();
    SharedPreferencesService.getCandidatDataFromSharedPreferences()
        .then((candidat) {
      setState(() {
        this.candidat = candidat;
      });
    });
    fetchAllPostList().then((values) {
      setState(() {
        postModelList = values;
        isLoading = false;
      });
    });
  }

  late CandidatModel candidat;

  bool isLoading = true;
  List<PostModel> postModelList = [];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
        length: 2,
        child: Scaffold(
            backgroundColor: AppTheme_App.withPrimary,
            appBar: AppBar(
                backgroundColor: AppTheme_App.withPrimary,
                elevation: 0.5,
                leadingWidth: 40,
                leading: Padding(
                    padding: EdgeInsets.only(left: 1),
                    child: GestureDetector(
                        onTap: () {
                          Navigator.push(
                            context,
                            CupertinoPageRoute(
                              builder: (context) => SearchPage(),
                            ),
                          );
                        },
                        child: Container(
                            height: 110,
                            width: 110,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(70),
                            ),
                            child: CircleAvatar(
                              radius: 10,
                              backgroundImage: AssetImage('assets/user.png')
                                  as ImageProvider,
                            )))),
                actions: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: IconButton(
                        iconSize: 30,
                        onPressed: () {},
                        icon: Icon(
                          Icons.notifications_none,
                          color: Colors.grey.shade400,
                        )),
                  )
                ],
                title: Container(
                  height: 45,
                  child: GestureDetector(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context) => SearchPage()),
                      );
                    },
                    child: TextField(
                      cursorColor: Colors.grey,
                      enabled: false,
                      decoration: InputDecoration(
                        contentPadding:
                            EdgeInsets.symmetric(horizontal: 20, vertical: 0),
                        filled: true,
                        fillColor: Colors.grey.shade200,
                        prefixIcon: Icon(Icons.search, color: Colors.grey),
                        border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(50),
                            borderSide: BorderSide.none),
                        hintText: "recherche emplois",
                        hintStyle: TextStyle(fontSize: 14),
                      ),
                    ),
                  ),
                ),
                bottom: PreferredSize(
                    preferredSize: Size.fromHeight(70.0),
                    child: TabBar(
                      padding: EdgeInsets.symmetric(horizontal: 5),
                      indicatorColor: AppTheme_App.primaryColor,
                      tabs: [
                        Tab(
                            text: "Emplois",
                            icon: Icon(
                              Icons.work,
                              size: 15,
                            )),
                        Tab(
                          text: 'Blog',
                          icon: Icon(
                            Icons.library_books,
                            size: 15,
                          ),
                        ),
                      ],
                    ))),
            body: TabBarView(children: [
              Container(
                padding: EdgeInsets.only(top: 10, left: 5, right: 5),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    CategoryJobHome(),
                    SizedBox(
                      height: 10,
                    ),
                    Expanded(
                      child: SingleChildScrollView(
                        scrollDirection: Axis.vertical,
                        child: Container(
                          child: JobListHome(), // La liste de jobs
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                  padding: EdgeInsets.only(top: 10, left: 5, right: 5),
                  height: MediaQuery.of(context).size.height,
                  child: isLoading
                      ? Center(
                          child: CircularProgressIndicator(),
                        )
                      : postModelList.length > 0
                          ? SingleChildScrollView(
                              scrollDirection: Axis.vertical,
                              child: Column(
                                      children: postModelList.map((item) {
                                    return PostCardItem(
                                      post: item,
                                    );
                                  }).toList()))
                          : Center(child: Text("Aucun post ")))
            ])));
  }
}
