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

class _ProfileEditPageState extends State<ProfileEditPage> {
  String selectedCode = '225';

  late TextEditingController usernameController;
  late TextEditingController firstnameController;
  late TextEditingController lastnameController;
  late TextEditingController emailController;
  late TextEditingController telephoneController;
  late TextEditingController titlePostController;
  late TextEditingController adresseController;

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
    return Scaffold(
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
      body: Container(
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
                                child:
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: <Widget>[
                                    Container(
                                      width: 200, // Largeur fixe
                                      child: DropdownButton<String>(
                                        value: selectedCode,
                                        items: <String>['225', '226', '228', '229']
                                            .map((String value) {
                                          return DropdownMenuItem<String>(
                                            value: value,
                                            child: Text(value),
                                          );
                                        })
                                            .toList(),
                                        onChanged: (String? newValue) {
                                          if (newValue != null) {
                                            setState(() {
                                              selectedCode = newValue;
                                            });
                                          }
                                        },
                                      ),
                                    ),
                                    SizedBox(width: 8),
                                    Container(
                                      child: TextFormField(
                                        decoration: InputDecoration(
                                          labelText: "Téléphone",
                                        ),
                                      ),
                                    ),
                                  ],
                                )


                              ),

                              Container(
                                child: Column(
                                  children: [
                                    Container(
                                      child: TextFormField(
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
    );
  }
}
