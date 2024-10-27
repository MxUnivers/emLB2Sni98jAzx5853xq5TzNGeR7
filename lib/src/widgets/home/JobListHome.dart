import "package:flutter/material.dart";
import "package:jouman/src/config/theme.dart";
import "package:jouman/src/model/JobModel.dart";
import "package:jouman/src/store/reducers.dart";
import "package:jouman/src/widgets/JobComponent.dart";
import "package:redux/redux.dart";
import "../../../main.dart";
import "../../actions/JobAction.dart";
import "../../utils/baseurl.dart";

class JobListHome extends StatefulWidget {
  final Store<AppState> store;
  const JobListHome({Key? key, required this.store}) : super(key: key);

  @override
  State<JobListHome> createState() => _JobListHomeState();
}

class _JobListHomeState extends State<JobListHome>
    with SingleTickerProviderStateMixin {
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

  late AnimationController _controller;
  List<JobModel> jobList = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();

    // Initialiser l'AnimationController
    _controller = AnimationController(
      vsync: this,
      duration: Duration(milliseconds: 500),
    );

    fetchAllJobList(
            "${baseurl.url.toString() + baseurl.apiV1.toString()}/offre/get_offres")
        .then((jobs) {
      setState(() {
        jobList = jobs;
        isLoading = false;
        _controller.forward(); // Démarrer l'animation après le chargement
      });
    });
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: isLoading
          ? Center(
              child: CircularProgressIndicator(
                color: AppTheme_App.TextGray,
              ),
            )
          : jobList.isNotEmpty
              ? Container(
                  padding: EdgeInsets.only(top: 5),
                  height: MediaQuery.of(context).size.height / 1.9,
                  margin: EdgeInsets.only(top: 5),
                  child: ListView.builder(
                    itemCount: jobList.length,
                    itemBuilder: (context, index) {
                      var item = jobList[index];
                      return AnimatedBuilder(
                        animation: _controller,
                        builder: (context, child) {
                          final animation = Tween<Offset>(
                            begin: Offset(0, 0.3),
                            end: Offset.zero,
                          ).animate(
                            CurvedAnimation(
                              parent: _controller,
                              curve: Interval(
                                (1 / jobList.length) * index,
                                1.0,
                                curve: Curves.easeOut,
                              ),
                            ),
                          );

                          return SlideTransition(
                            position: animation,
                            child: Opacity(
                              opacity: _controller.value,
                              child: JobComponent(
                                job: item,
                              ),
                            ),
                          );
                        },
                      );
                    },
                  ),
                )
              : Center(
                  child: Text("Aucune offre"),
                ),
    );
  }
}
