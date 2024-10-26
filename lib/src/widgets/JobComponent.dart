import "package:flutter/cupertino.dart";
import "package:flutter/material.dart";
import "package:jouman/src/config/theme.dart";
import "package:jouman/src/pages/job_detail_page.dart";
import "package:jouman/src/store/reducers.dart";
import "package:redux/redux.dart";

import "../../main.dart";
import "../model/JobModel.dart";

class JobComponent extends StatefulWidget {
  final JobModel? job;
  const JobComponent({Key? key, this.job}) : super(key: key);

  @override
  State<JobComponent> createState() => _JobComponentState();
}

class _JobComponentState extends State<JobComponent> {
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
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.all(10),
        margin: EdgeInsets.only(bottom: 15),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            color: Colors.white,
            boxShadow: [
              BoxShadow(
                color: Colors.grey.withOpacity(0.5),
                spreadRadius: 0,
                blurRadius: 2,
                offset: Offset(0, 1),
              ),
            ]),
        child: GestureDetector(
          onTap: () {
            Navigator.push(
              context,
              CupertinoPageRoute(
                builder: (context) => JobDetailPage(
                  job: widget.job,
                ),
              ),
            );
          },
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Expanded(
                    child: Row(children: [
                      Container(
                          width: 60,
                          height: 60,
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(20),
                            child: Image.network(
                                widget.job!.coverPicture.toString()),
                          )),
                      SizedBox(width: 10),
                      Flexible(
                        child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(widget.job!.title.toString(),
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontSize: 15,
                                      fontWeight: FontWeight.w500)),
                              SizedBox(
                                height: 5,
                              ),
                              Text(widget.job!.addresse.toString(),
                                  style: TextStyle(color: Colors.grey[500])),
                            ]),
                      )
                    ]),
                  ),
                ],
              ),
            ],
          ),
        ));
  }
}
