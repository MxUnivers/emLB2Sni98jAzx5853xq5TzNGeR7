import "package:flutter/material.dart";
import "package:offre_emplois_mobile_candidat/src/model/JobModel.dart";
import "package:offre_emplois_mobile_candidat/src/widgets/JobComponent.dart";

import "../../themes/theme.dart";

class JobListHome extends StatefulWidget {
  const JobListHome({Key? key}) : super(key: key);

  @override
  State<JobListHome> createState() => _JobListHomeState();
}

class _JobListHomeState extends State<JobListHome> {
  List<JobModel> jobList = [

    JobModel(
        coverPicture:
        "https://upload.wikimedia.org/wikipedia/fr/1/1c/Logo_SGBCI_2014.png",
        title: "Senior developpeur",
        addresse: "Abidjan",
        dateNow: "30/08/2023",
        is_favorite: false,
        areaOffre: "Informatique",
        experience: "1-2",
        typeContrat: "freelance",
      description: "En tant que Développeur Front-End au sein de notre équipe, vous serez responsable de la création et de la mise en œuvre d'interfaces utilisateur attrayantes et fonctionnelles pour nos applications web. Vous travaillerez en étroite collaboration avec les concepteurs, les développeurs back-end et les chefs de projet pour garantir que nos produits offrent une expérience utilisateur exceptionnelle."

    ),

  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height,
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
                  return JobComponent(job: item);
                },
              ),
            ),
          ],
        ),
      ),
    )
    ;
  }
}
