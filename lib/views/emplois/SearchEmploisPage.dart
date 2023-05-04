import "package:flutter/material.dart";

class SearchEmploisPage extends StatelessWidget {
  const SearchEmploisPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.blue.shade900,
          leading: IconButton(
            onPressed: () {
              Navigator.pop(context);
            },
            icon: Icon(Icons.arrow_back_ios),
          ),
          title: Text("recherche offre"),

          centerTitle: true,
        ),
        body: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(

                    margin: EdgeInsets.fromLTRB(0, 15, 0, 2),
                    decoration: BoxDecoration(
                      color: Colors.white
                    ),
                    child: Padding(
                      padding: EdgeInsets.symmetric(horizontal: 16),
                      child: TextField(
                        decoration: InputDecoration(
                          border: OutlineInputBorder(),
                          hintText: "Rechercher un emploi 'motclé'" ,
                          suffixIcon: Icon(Icons.search),
                        ),
                      ),
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.blue.shade700
                    ),
                    child: SingleChildScrollView(
                      scrollDirection: Axis.vertical,
                      child: Column(
                        children: [
                          JobCard(
                            title: 'Développeur web',
                            location: 'Montréal, QC',
                            company: 'Google',
                            imageUrl: 'assets/images/job1.jpg',
                          ),
                          JobCard(
                            title: 'Designer graphique',
                            location: 'Toronto, ON',
                            company: 'Facebook',
                            imageUrl: 'assets/images/job2.jpg',
                          ),
                          JobCard(
                            title: 'Développeur mobile',
                            location: 'Vancouver, BC',
                            company: 'Amazon',
                            imageUrl: 'assets/images/job3.jpg',
                          ),
                        ],
                      ),
                    ),
                  )
                ])));
  }
}

class JobCard extends StatelessWidget {
  final String title;
  final String location;
  final String company;
  final String imageUrl;

  JobCard({
    required this.title,
    required this.location,
    required this.company,
    required this.imageUrl,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 8),
      width: double.infinity,
      child: Card(
        margin: EdgeInsets.fromLTRB(3, 5, 3, 5),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(4),
              child: Image.asset(
                imageUrl,
                height: 150,
                width: double.infinity,
                fit: BoxFit.cover,
              ),
            ),
            SizedBox(height: 8),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 4),
                  Text(
                    company,
                    style: TextStyle(
                      color: Colors.grey,
                    ),
                  ),
                  SizedBox(height: 4),
                  Text(
                    location,
                    style: TextStyle(
                      color: Colors.grey,
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: 8),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 8),
              child: ElevatedButton(
                onPressed: () {},
                child: Text('Postuler'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
