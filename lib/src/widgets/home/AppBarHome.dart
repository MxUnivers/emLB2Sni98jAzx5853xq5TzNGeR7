import "package:flutter/material.dart";
import "package:offre_emplois_mobile_candidat/src/config/theme.dart";
import "package:offre_emplois_mobile_candidat/src/pages/search_page.dart";

class AppBarHome extends StatefulWidget implements PreferredSizeWidget {
  const AppBarHome({Key? key}) : super(key: key);

  @override
  State<AppBarHome> createState() => _AppBarHomeState();

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}

class _AppBarHomeState extends State<AppBarHome> {
  @override
  void initState() {
    super.initState();
    // Vous pouvez ajouter des opérations d'initialisation ici
  }

  @override
  AppBar build(BuildContext context) {
    return AppBar(
        backgroundColor: AppTheme_App.withPrimary,
        elevation: 0.5,
        leadingWidth: 40,
        leading: Padding(
            padding: EdgeInsets.only(left: 1),
            child: GestureDetector(
                onTap: () {},
                child: Container(
                    height: 110,
                    width: 110,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(70),
                    ),
                    child: CircleAvatar(
                      radius: 10,
                      backgroundImage:
                          AssetImage('assets/user.png') as ImageProvider,
                    )))),
        actions: [
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: IconButton(
                iconSize: 30,
                onPressed: () {},
                icon: Icon(
                  Icons.notifications_none,
                  color: Colors.grey.shade400,
                )),
          )
        ],
        title: Container(
          height: 45,
          child: GestureDetector(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => SearchPage()),
              );
            },
            child: TextField(
              cursorColor: Colors.grey,
              enabled: false,
              decoration: InputDecoration(
                contentPadding:
                    EdgeInsets.symmetric(horizontal: 20, vertical: 0),
                filled: true,
                fillColor: Colors.grey.shade200,
                prefixIcon: Icon(Icons.search, color: Colors.grey),
                border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(50),
                    borderSide: BorderSide.none),
                hintText: "recherche emplois",
                hintStyle: TextStyle(fontSize: 14),
              ),
            ),
          ),
        ));
  }
}
