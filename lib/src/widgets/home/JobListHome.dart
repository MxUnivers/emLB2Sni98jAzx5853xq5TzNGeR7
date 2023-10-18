import "package:flutter/material.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:jouman_mobile_mobile/src/model/JobModel.dart";
import "package:jouman_mobile_mobile/src/widgets/JobComponent.dart";

import "../../actions/JobAction.dart";
import "../../themes/theme.dart";
import "../../utils/baseurl.dart";

class JobListHome extends StatefulWidget {
  const JobListHome({Key? key}) : super(key: key);

  @override
  State<JobListHome> createState() => _JobListHomeState();
}

class _JobListHomeState extends State<JobListHome> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    fetchAllJobList( "${baseurl.url.toString()+baseurl.apiV1.toString()}/offre/get_offres")
        .then((jobs) {
      setState(() {
        // Mettre à jour la liste des offres récupérées
        jobList = jobs;
        print(jobList);
        isLoading =  false;
      });
    });
  }

  List<JobModel> jobList = [];
  bool isLoading =  true ;

  @override
  Widget build(BuildContext context) {
    return isLoading == true
          ?
          Container(
            child:
          Center(
            child: CircularProgressIndicator(
              color: AppTheme_App.TextGray,
            )
          )
          )
          :
          jobList.length > 0 ?
          Container(
              height: MediaQuery.of(context).size.height/1.1,
              margin: EdgeInsets.only(top: 5),
              child:
              SingleChildScrollView(
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
                      return JobComponent(job: item);
                    },
                  ),
                ),
              ],
            ),
          )): Center(
            child: Text("Aucunes offres"),
          )
    ;
  }
}
