import 'package:flutter/material.dart';
import 'package:jouman_mobile_mobile/src/config/theme.dart';
import 'package:jouman_mobile_mobile/src/model/CandidatModel.dart';
import 'package:jouman_mobile_mobile/src/model/JobModel.dart';
import 'package:jouman_mobile_mobile/src/utils/baseurl.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/CategoryJobHome.dart';
import 'package:jouman_mobile_mobile/src/widgets/home/JobListHome.dart';

import '../utils/storage.dart';
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
    SharedPreferencesService.getCandidatDataFromSharedPreferences().then((candidat) {
      setState(() {
        this.candidat = candidat;
      });
    });
  }
  late CandidatModel candidat ;
  @override
  Widget build(BuildContext context) {
    return PageView(physics: NeverScrollableScrollPhysics(), children: [
      Scaffold(
        backgroundColor: AppTheme_App.withPrimary,
        appBar: AppBarHome(),
        body: Container(
          padding: EdgeInsets.only(top: 10, left: 5, right: 5),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              CategoryJobHome(),
              SizedBox(height: 10,),
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
      )

    ]);
  }
}
