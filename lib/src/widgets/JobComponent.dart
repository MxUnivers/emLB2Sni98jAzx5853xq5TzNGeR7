import "package:flutter/material.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:jouman_mobile_mobile/src/pages/job_detail_page.dart";

import "../model/JobModel.dart";

class JobComponent extends StatefulWidget {
  final JobModel? job;
  const JobComponent({Key? key, this.job}) : super(key: key);

  @override
  State<JobComponent> createState() => _JobComponentState();
}

class _JobComponentState extends State<JobComponent> {
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
              MaterialPageRoute(
                  builder: (context) => JobDetailPage(
                        job: widget.job,
                      )),
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
                  GestureDetector(
                    onTap: () {
                      setState(() {
                        if (widget.job != null) {
                          widget.job!.is_favorite =
                              !(widget.job!.is_favorite ?? false);
                        }
                      });
                    },
                    child: AnimatedContainer(
                      height: 35,
                      padding: EdgeInsets.all(5),
                      duration: Duration(milliseconds: 300),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                            color: (widget.job?.is_favorite ?? false)
                                ? Colors.red.shade100
                                : Colors.grey.shade300),
                      ),
                      child: Center(
                        child: (widget.job?.is_favorite ?? false)
                            ? Icon(
                                Icons.favorite,
                                color: Colors.red,
                              )
                            : Icon(Icons.favorite_outline,
                                color: Colors.grey.shade600),
                      ),
                    ),
                  )
                ],
              ),
              SizedBox(
                height: 20,
              ),
              Container(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Row(
                      children: [
                        Container(
                          padding:
                              EdgeInsets.symmetric(vertical: 8, horizontal: 15),
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(12),
                              color: Colors.grey.shade200),
                          child: Text(
                            widget.job!.areaOffre.toString(),
                            style: TextStyle(color: Colors.black),
                          ),
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Container(
                          padding:
                              EdgeInsets.symmetric(vertical: 8, horizontal: 15),
                          decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(12),
                              color: AppTheme_App.secondary),
                          child: Text(
                            widget.job!.typeContrat.toString(),
                            style: TextStyle(color: AppTheme_App.withPrimary),
                          ),
                        )
                      ],
                    ),

                  ],
                ),
              )
            ],
          ),
        ));
  }
}
