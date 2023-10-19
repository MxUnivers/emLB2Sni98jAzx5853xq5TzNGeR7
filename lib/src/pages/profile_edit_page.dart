import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:jouman_mobile_mobile/src/config/theme.dart";
import "package:jouman_mobile_mobile/src/model/CandidatModel.dart";

class ProfileEditPage extends StatefulWidget {
  final CandidatModel? candidatModel;
  const ProfileEditPage({Key? key, this.candidatModel}) : super(key: key);

  @override
  State<ProfileEditPage> createState() => _ProfileEditPageState();
}

class _ProfileEditPageState extends State<ProfileEditPage> with SingleTickerProviderStateMixin {
  String selectedCode = '225';

  // Infos profile
  late TextEditingController usernameController;
  late TextEditingController firstnameController;
  late TextEditingController lastnameController;
  late TextEditingController emailController;
  late TextEditingController telephoneController;
  late TextEditingController titlePostController;
  late TextEditingController adresseController;

  // Compétences

  // Reseau sociaux
  late TextEditingController facebookController;
  late TextEditingController linkedinController;
  late TextEditingController twitterController;
  late TextEditingController instagramController;




  @override
  void initState() {
    super.initState();
    usernameController =
        TextEditingController(text: widget.candidatModel!.username.toString());
    firstnameController =
        TextEditingController(text: widget.candidatModel!.firstname.toString());
    lastnameController =
        TextEditingController(text: widget.candidatModel!.lastname.toString());
    emailController =
        TextEditingController(text: widget.candidatModel!.email.toString());
    telephoneController =
        TextEditingController(text: widget.candidatModel!.telephone.toString());
    titlePostController =
        TextEditingController(text: widget.candidatModel!.titlePost.toString());
    adresseController =
        TextEditingController(text: widget.candidatModel!.adresse.toString());
  }

  @override
  void dispose() {
    emailController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return
      DefaultTabController(
        length: 3,
      child :Scaffold(
      appBar: AppBar(
        backgroundColor: AppTheme_App.withPrimary,
        elevation: 0.2,
        leading: BackButton(
          color: AppTheme_App.TextGray,
        ),
        title: Text(
          "Modfication profile",
          style: GoogleFonts.nunito(color: AppTheme_App.TextGray),
        ),
          bottom: PreferredSize(
              preferredSize: Size.fromHeight(70.0),
              child:
              TabBar(
                padding: EdgeInsets.symmetric(horizontal: 5),
                indicatorColor: AppTheme_App.primaryColor,
                tabs: [
                  Tab(
                    text: "Infos profile",),
                  Tab(text: 'Compténeces'),
                  Tab(text: 'Réseaux sociaux'),
                ],
              )
          )
      ),
      backgroundColor: AppTheme_App.withPrimary,
      floatingActionButton: MaterialButton(
        onPressed: () {},
        child: Container(
          padding: EdgeInsets.all(20),
          decoration: BoxDecoration(
              color: AppTheme_App.primaryColor,
              borderRadius: BorderRadius.circular(100)),
          child: Icon(
            Icons.save,
            color: AppTheme_App.withPrimary,
          ),
        ),
      ),
      body:
      TabBarView(
          children: [
            Container(
              height: MediaQuery.of(context).size.height / 1.1,
              width: MediaQuery.of(context).size.width,
              padding: EdgeInsets.symmetric(horizontal: 10, vertical: 20),
              child: SingleChildScrollView(
                child: Container(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      // Infomation Profile
                      Container(
                          padding: EdgeInsets.only(top: 30),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                child: Text(
                                  "Infos Compte : ",
                                  style: GoogleFonts.nunito(
                                      color: AppTheme_App.TextGray, fontSize: 20),
                                ),
                              ),
                              Container(
                                child: Column(
                                  children: [
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: usernameController,
                                              decoration: InputDecoration(
                                                  labelText: "Nom utilisateur"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: firstnameController,
                                              decoration:
                                              InputDecoration(labelText: "Nom "),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: lastnameController,
                                              decoration: InputDecoration(
                                                  labelText: "¨Prénoms"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: emailController,
                                              decoration:
                                              InputDecoration(labelText: "Email"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),

                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: telephoneController,
                                              decoration:
                                              InputDecoration(labelText: "Code"),
                                            ),
                                          ),
                                          Container(
                                            child: TextFormField(
                                              controller: telephoneController,
                                              decoration:
                                              InputDecoration(labelText: "Telehpone"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: titlePostController,
                                              decoration: InputDecoration(
                                                  labelText: "Profession Actuelle"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              decoration: InputDecoration(
                                                  labelText: "Date de naissance"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              decoration:
                                              InputDecoration(labelText: "Pays"),
                                            ),
                                          )
                                        ],
                                      ),
                                    ),
                                    Container(
                                      child: Column(
                                        children: [
                                          Container(
                                            child: TextFormField(
                                              controller: adresseController,
                                              decoration: InputDecoration(
                                                  labelText: "Adresse"),
                                            ),
                                          )
                                        ],
                                      ),
                                    )
                                  ],
                                ),
                              )
                            ],
                          )),

                      Divider(height: 20),

                      // Compténeces profile

                      // Reseau sociaux
                    ],
                  ),
                ),
              ),
            ),




            // Compétences
            Container(
                height: MediaQuery.of(context).size.height,
                width: MediaQuery.of(context).size.width,
                padding: EdgeInsets.symmetric(horizontal: 20),
                child:
                SingleChildScrollView(
                  child: Container(
                    child: Column(
                      children: [

                        // Compétences
                        Container(
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          children: [
                            Container(
                              child: MaterialButton(
                                onPressed: (){},
                                child: Container(
                                  width: MediaQuery.of(context).size.width/2.5,
                                  padding: EdgeInsets.symmetric(vertical: 5 ,horizontal: 10),
                                  decoration: BoxDecoration(
                                      color: AppTheme_App.primaryColor,
                                      borderRadius: BorderRadius.all(Radius.circular(5))
                                  ),
                                  child: Row(
                                    children: [
                                      Icon(Icons.add,color: AppTheme_App.withPrimary,),
                                      SizedBox(width: 5,),
                                      Text("Compétences ",style: GoogleFonts.nunito(color: AppTheme_App.withPrimary),)
                                    ],
                                  ),
                                ),
                              ),
                            ),
                            SizedBox(height: 5,),
                            Container(
                                padding: EdgeInsets.symmetric(horizontal: 10),
                                child: widget.candidatModel!.competences!.length >0 ?
                                SingleChildScrollView(
                                  scrollDirection: Axis.horizontal,
                                  child: Container(
                                    child: Row(
                                      children: widget.candidatModel!.competences!.reversed.map((item){
                                        return
                                          Container(
                                            margin: EdgeInsets.symmetric(horizontal: 5 , vertical: 4),
                                            decoration: BoxDecoration(
                                                color: AppTheme_App.secondary,
                                                borderRadius: BorderRadius.circular(3)
                                            ),
                                            padding: EdgeInsets.symmetric(horizontal: 5, vertical: 4),
                                            child: Text("${item.label}"),
                                          );
                                      }).toList(),
                                    ),
                                  ),
                                ): Container(
                                  padding: EdgeInsets.symmetric(horizontal: 10),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Text("Aucune")
                                    ],
                                  ),
                                )
                            )
                          ],
                        ),
                        ),
                        Divider(height: 10,),

                        Container(
                          child: Column(
                            children: [
                              Container(
                                child: MaterialButton(
                                  onPressed: (){},
                                  child: Container(
                                    width: MediaQuery.of(context).size.width/2.5,
                                    padding: EdgeInsets.symmetric(vertical: 5 ,horizontal: 10),
                                    decoration: BoxDecoration(
                                        color: AppTheme_App.primaryColor,
                                        borderRadius: BorderRadius.all(Radius.circular(5))
                                    ),
                                    child: Row(
                                      children: [
                                        Icon(Icons.add,color: AppTheme_App.withPrimary,),
                                        SizedBox(width: 5,),
                                        Text("Langues ",style: GoogleFonts.nunito(color: AppTheme_App.withPrimary),)
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                              SizedBox(height: 5,),
                              Container(
                                  padding: EdgeInsets.symmetric(horizontal: 10),
                                  child: widget.candidatModel!.langues!.length >0 ?
                                  SingleChildScrollView(
                                    scrollDirection: Axis.horizontal,
                                    child: Container(
                                      child: Row(
                                        children: widget.candidatModel!.langues!.reversed.map((item){
                                          return
                                            Container(
                                              margin: EdgeInsets.symmetric(horizontal: 5 , vertical: 4),
                                              decoration: BoxDecoration(
                                                  color: AppTheme_App.secondary,
                                                  borderRadius: BorderRadius.circular(3)
                                              ),
                                              padding: EdgeInsets.symmetric(horizontal: 5, vertical: 4),
                                              child: Text("${item.label}"),
                                            );
                                        }).toList(),
                                      ),
                                    ),
                                  ): Container(
                                    padding: EdgeInsets.symmetric(horizontal: 10),
                                    child: Row(
                                      mainAxisAlignment: MainAxisAlignment.center,
                                      children: [
                                        Text("Aucune")
                                      ],
                                    ),
                                  )
                              )
                            ],
                          ),
                        ),




                        Container(
                          child: Column(
                            children: [
                              Container(
                                child: TextFormField(
                                  decoration: InputDecoration(
                                    labelText: "Niveau d'étude"
                                  ),
                                ),
                              )
                            ],
                          )
                        ),


                        SizedBox(
                          height: 5,
                        ),
                        // Salaire percu
                        Container(
                            child: Column(
                              children: [
                                Container(
                                  child: TextFormField(
                                    decoration: InputDecoration(
                                        labelText: "Salaire percus / mois"
                                    ),
                                  ),
                                )
                              ],
                            )
                        ),




                        SizedBox(
                          height: 5,
                        ),
                        // Description
                        Container(

                            child: Column(
                              children: [
                                Container(
                                  child: TextFormField(
                                    decoration: InputDecoration(
                                        labelText: "Description sur sur votre profile ",
                                    ),
                                  ),
                                )
                              ],
                            )
                        )





                      ],
                    ),
                  ),
                )

            ),

            Container(
              padding: EdgeInsets.symmetric(horizontal: 15),
              height: MediaQuery.of(context).size.height,
                width: MediaQuery.of(context).size.width,
                child:
            SingleChildScrollView(
              child: Column(
                children: [
                  Container(
                    child: TextFormField(
                      decoration: InputDecoration(
                          icon: Icon(Icons.facebook_outlined),
                        labelText: "Lien facebook"
                      ),
                    ),
                  ),
                  SizedBox(height:10,),

                  Column(
                    children: [
                      Container(
                        child: TextFormField(
                          decoration: InputDecoration(
                              icon: Icon(Icons.facebook_outlined),
                            labelText: "Lien Linkedin"
                          ),
                        ),
                      )
                    ],
                  ),


                  Column(
                    children: [
                      Container(
                        child: TextFormField(
                          decoration: InputDecoration(
                              icon: Icon(Icons.facebook_outlined),
                              labelText: "Lien Instagram"
                          ),
                        ),
                      )
                    ],
                  ),

                  Column(
                    children: [
                      Container(
                        child: TextFormField(
                          decoration: InputDecoration(
                              icon: Icon(Icons.facebook_outlined),
                              labelText: "Lien Twitter"
                          ),
                        ),
                      )
                    ],
                  )
                ],
              )
            )
            ),
          ]),


    )
      );
  }
}
