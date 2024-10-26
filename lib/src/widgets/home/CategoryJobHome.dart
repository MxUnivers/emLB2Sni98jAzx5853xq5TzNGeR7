import "package:flutter/cupertino.dart";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:jouman/src/config/theme.dart";
import "package:jouman/src/model/JobCategoryModel.dart";
import "package:jouman/src/pages/search_job_category.dart";
import "package:jouman/src/pages/search_page.dart";
import "package:jouman/src/utils/baseurl.dart";
import "package:redux/redux.dart";

import "../../../main.dart";
import "../../Animation/skeleton_model.dart";
import "../../pages/job_detail_page.dart";

class CategoryJobHome extends StatefulWidget {
  const CategoryJobHome({Key? key}) : super(key: key);

  @override
  State<CategoryJobHome> createState() => _CategoryJobHomeState();
}

class _CategoryJobHomeState extends State<CategoryJobHome> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    fetchAllCategoriesOffres(
      "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres",
    ).then((jobs) {
      setState(() {
        // Mettre à jour la liste des offres récupérées
        jobCategoryList = jobs;
        print(jobCategoryList);
        isLoading = false;
      });
    });
  }

  bool isLoading = true;
  List<JobCategoryModel> jobCategoryList = [];

  @override
  Widget build(BuildContext context) {
    return Container(
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
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Container(
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
                        onPressed: () {},
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
                      )
                    ],
                  ),
                ),
          jobCategoryList.length > 0
              ? Container(
                  margin: EdgeInsets.symmetric(vertical: 10),
                  //width: AppTheme.fullWidth(context),
                  height: 30,
                  child: ListView.builder(
                    itemCount: jobCategoryList.length,
                    scrollDirection: Axis.horizontal,
                    itemBuilder: (BuildContext context, int index) {
                      var item = jobCategoryList[index];
                      return GestureDetector(
                          onTap: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => SearchCategoryJobPage(
                                        title: item.title,
                                      )),
                            );
                          },
                          child: Container(
                            margin: EdgeInsets.symmetric(horizontal: 5),
                            padding: EdgeInsets.symmetric(
                                vertical: 8, horizontal: 15),
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12),
                                color: Colors.grey.shade200),
                            child: Text(
                              item.title.toString(),
                              style: TextStyle(color: Colors.black),
                            ),
                          ));
                    },
                  ))
              : Container(
                  margin: EdgeInsets.symmetric(vertical: 10),
                  //width: AppTheme.fullWidth(context),
                  height: 100,
                  child: ListView.builder(
                    itemCount: jobCategoryList.length,
                    scrollDirection: Axis.horizontal,
                    itemBuilder: (BuildContext context, int index) {
                      return Container(
                        padding:
                            EdgeInsets.symmetric(vertical: 2, horizontal: 1),
                        margin: EdgeInsets.symmetric(horizontal: 2),
                        child: Skeleton(
                          height: 45,
                          width: 70,
                        ),
                      );
                    },
                  ))
        ],
      ),
    );
  }
}
