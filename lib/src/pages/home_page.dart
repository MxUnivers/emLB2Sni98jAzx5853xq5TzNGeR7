import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatModel.dart';
import 'package:jouman_mobile_mobile/src/model/JobModel.dart';
import 'package:jouman_mobile_mobile/src/pages/search_job_category.dart';
import 'package:jouman_mobile_mobile/src/pages/search_page.dart';
import 'package:jouman_mobile_mobile/src/utils/baseurl.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/CategoryJobHome.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/JobListHome.dart';
import 'package:redux/redux.dart';

import '../../main.dart';
import '../Animation/skeleton_model.dart';
import '../actions/JobAction.dart';
import '../actions/PostAction.dart';
import '../model/JobCategoryModel.dart';
import '../model/PostModel.dart';
import '../store/jobCategoriesReducer.dart';
import '../store/jobReducer.dart';
import '../utils/storage.dart';
import '../widgets/JobComponent.dart';
import '../widgets/blog/PostCardItem.dart';
import '../widgets/blog/PostCategory.dart';
import '../widgets/home/AppBarHome.dart';
import 'job_detail_page.dart';

class MyHomePage extends StatefulWidget {
  final Store<AppState> store;
  MyHomePage({Key? key, this.title, required this.store}) : super(key: key);

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
    fetchAllCategoriesOffres(
      "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres",
    ).then((jobs) {
      setState(() {
        // Mettre à jour la liste des offres récupérées
        jobCategoryList = jobs;
        StoreProvider.of<AppState>(context)
            .dispatch(SetJobCategoryListAction(jobs));
        print(jobCategoryList);
        isLoading = false;
      });
    });
    fetchAllJobList(
            "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres")
        .then((jobs) {
      setState(() {
        // Mettre à jour la liste des offres récupérées
        jobList = jobs;
        StoreProvider.of<AppState>(context).dispatch(SetJobListAction(jobs));
        print(jobList);
        isLoading = false;
      });
    });
  }

  late CandidatModel candidat;

  bool isLoading = true;
  List<PostModel> postModelList = [];
  List<JobCategoryModel> jobCategoryList = [];
  List<JobModel> jobList = [];

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
                    Container(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(
                            height: 20,
                          ),
                          isLoading
                              ? Container()
                              : Container(
                                  child: Row(
                                    mainAxisAlignment:
                                        MainAxisAlignment.spaceBetween,
                                    children: [
                                      /*Container(
                                  padding: EdgeInsets.symmetric(horizontal: 10),
                                  child: Text(
                                    "Categrorie Job",
                                    style: GoogleFonts.nunito(
                                        fontSize: 20,
                                        fontWeight: FontWeight.w800,
                                        color: AppTheme_App.withGreyOrginal),
                                  ),
                                ),
                                MaterialButton(
                                  onPressed: () {
                                    Navigator.push(
                                        context,
                                        CupertinoPageRoute(
                                            builder: (context) => JobDetailPage()));
                                  },
                                  child: Container(
                                      padding: EdgeInsets.symmetric(
                                          vertical: 5, horizontal: 5),
                                      decoration: BoxDecoration(
                                          color: AppTheme_App.withPrimary,
                                          borderRadius: BorderRadius.circular(10)),
                                      child: Row(
                                        children: [
                                          Text(
                                            "Voire plus",
                                            style: GoogleFonts.nunito(
                                                textBaseline: TextBaseline.alphabetic,
                                                fontWeight: FontWeight.w800,
                                                color: AppTheme_App.primaryColor),
                                          ),
                                          Icon(Icons.chevron_right_rounded,
                                              color: AppTheme_App.primaryColor, size: 15)
                                        ],
                                      )),
                                )*/
                                    ],
                                  ),
                                ),
                          Container(
                            margin: EdgeInsets.symmetric(vertical: 10),
                            height: 30,
                            child: StoreConnector<AppState,
                                List<JobCategoryModel>>(
                              converter: (store) => store.state.jobCategorys,
                              builder: (BuildContext context,
                                  List<JobCategoryModel> jobCategoryList) {
                                return ListView.builder(
                                  itemCount: jobCategoryList.length,
                                  scrollDirection: Axis.horizontal,
                                  itemBuilder:
                                      (BuildContext context, int index) {
                                    var item = jobCategoryList[index];
                                    return GestureDetector(
                                      onTap: () {
                                        Navigator.push(
                                          context,
                                          MaterialPageRoute(
                                            builder: (context) =>
                                                SearchCategoryJobPage(
                                              title: item.title,
                                            ),
                                          ),
                                        );
                                      },
                                      child: Container(
                                        margin:
                                            EdgeInsets.symmetric(horizontal: 5),
                                        padding: EdgeInsets.symmetric(
                                            vertical: 8, horizontal: 15),
                                        decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(12),
                                          color: Colors.grey.shade200,
                                        ),
                                        child: Text(
                                          item.title.toString(),
                                          style: TextStyle(color: Colors.black),
                                        ),
                                      ),
                                    );
                                  },
                                );
                              },
                            ),
                          )
                        ],
                      ),
                    ),
                    SizedBox(
                      height: 10,
                    ),
                    Expanded(
                      child: SingleChildScrollView(
                        scrollDirection: Axis.vertical,
                        child: Container(
                          child: Container(
                              child: Container(
                            padding: EdgeInsets.only(top: 5),
                            height: MediaQuery.of(context).size.height / 1.9,
                            margin: EdgeInsets.only(top: 5),
                            child: SingleChildScrollView(
                              scrollDirection: Axis.vertical,
                              child: Column(
                                children: [
                                  Container(
                                    padding:
                                        EdgeInsets.symmetric(horizontal: 3),
                                    child: StoreConnector<AppState,
                                        List<JobModel>>(
                                      converter: (store) => store.state.jobs,
                                      builder: (BuildContext context,
                                          List<JobModel> jobs) {
                                        return ListView.builder(
                                          shrinkWrap: true,
                                          physics:
                                              NeverScrollableScrollPhysics(),
                                          itemCount: jobs.length,
                                          itemBuilder: (context, index) {
                                            var item = jobs[index];
                                            return JobComponent(
                                                job: item, store: widget.store);
                                          },
                                        );
                                      },
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          )), // La liste de jobs
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
