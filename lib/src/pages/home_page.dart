import 'package:flutter/material.dart';
import 'package:offre_emplois_mobile_candidat/src/config/theme.dart';
import 'package:offre_emplois_mobile_candidat/src/widgets/home/CategoryJobHome.dart';
import 'package:offre_emplois_mobile_candidat/src/widgets/home/JobListHome.dart';

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
    // TODO: implement initState
    super.initState();
  }

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
