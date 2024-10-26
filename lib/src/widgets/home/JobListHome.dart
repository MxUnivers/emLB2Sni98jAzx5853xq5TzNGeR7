import "package:flutter/material.dart";
import "package:jouman/src/config/theme.dart";
import "package:jouman/src/model/JobModel.dart";
import "package:jouman/src/store/reducers.dart";
import "package:jouman/src/widgets/JobComponent.dart";
import "package:redux/redux.dart";

import "../../../main.dart";
import "../../actions/JobAction.dart";
import "../../themes/theme.dart";
import "../../utils/baseurl.dart";

class JobListHome extends StatefulWidget {
  final Store<AppState> store;
  const JobListHome({Key? key, required this.store}) : super(key: key);

  @override
  State<JobListHome> createState() => _JobListHomeState();
}

class _JobListHomeState extends State<JobListHome> {
  late final Store<AppState> store = Store<AppState>(
    combineReducers<AppState>([
      (state, action) => AppState(
          jobs: jobListReducer(state.jobs, action),
          jobCategorys: jobCategoryListReducer(state.jobCategorys, action),
          candidats: candidatListReducer(state.candidats, action),
          candidat: candidatReducer(state.candidat, action),
          job: jobReducer(state.job, action),
          messages: [],
          posts: postListReducer(state.posts, action),
          candidatures: candidatureListReducer(state.candidatures, action)),
    ]),
    initialState: AppState.initialState(),
  );

  @override
  void initState() {
    super.initState();
    fetchAllJobList(
            "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres")
        .then((jobs) {
      setState(() {
        // Mettre à jour la liste des offres récupérées
        jobList = jobs;
        print(jobList);
        isLoading = false;
      });
    });
  }

  List<JobModel> jobList = [];
  bool isLoading = true;

  @override
  Widget build(BuildContext context) {
    return Container(
        child: isLoading == true
            ? Container(
                child: Center(
                    child: CircularProgressIndicator(
                color: AppTheme_App.TextGray,
              )))
            : jobList.length > 0
                ? Container(
                    padding: EdgeInsets.only(top: 5),
                    height: MediaQuery.of(context).size.height / 1.9,
                    margin: EdgeInsets.only(top: 5),
                    child: SingleChildScrollView(
                      scrollDirection: Axis.vertical,
                      child: Column(
                        children: [
                          Container(
                            padding: EdgeInsets.symmetric(horizontal: 3),
                            child: ListView.builder(
                              shrinkWrap: true,
                              physics: NeverScrollableScrollPhysics(),
                              itemCount: jobList.length,
                              itemBuilder: (context, index) {
                                var item = jobList[index];
                                return JobComponent(
                                  job: item,
                                );
                              },
                            ),
                          ),
                        ],
                      ),
                    ))
                : Center(
                    child: Text("Aucunes offres"),
                  ));
  }
}
