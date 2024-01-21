import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart' as quill;

class PostAddPage extends StatefulWidget {
  @override
  _PostAddPageState createState() => _PostAddPageState();
}

class _PostAddPageState extends State<PostAddPage> {
  quill.QuillController _controller = quill.QuillController.basic();

  void _showConfirmationModal() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Confirmer la publication ?'),
          content: Text('Êtes-vous sûr de vouloir publier ce post ?'),
          actions: [
            TextButton(
              onPressed: () {
                // Logique de publication
                Navigator.of(context).pop(); // Ferme le modal
                _showPublishSuccessModal();
              },
              child: Text('Publier'),
            ),
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(); // Ferme le modal
              },
              child: Text('Retour'),
            ),
          ],
        );
      },
    );
  }

  void _showPublishSuccessModal() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Publication réussie'),
          content: Text('Votre post a été publié avec succès.'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(); // Ferme le modal
              },
              child: Text('OK'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Nouveau Post'),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            TextFormField(
              decoration: InputDecoration(
                labelText: 'Titre du Post',
              ),
            ),
            SizedBox(height: 16),
            Image.network(
              'URL_DE_VOTRE_IMAGE', // Remplacez par l'URL de votre image
              height: 200,
              fit: BoxFit.cover,
            ),
            SizedBox(height: 16),
        Container(
          height: 200, // ou la hauteur souhaitée
          child: quill.QuillEditor(
            configurations: quill.QuillEditorConfigurations(/* ... vos configurations ici ... */),
            focusNode: FocusNode(),
            scrollController: ScrollController(),
          ),
        ),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                _showConfirmationModal();
              },
              child: Text('Valider'),
            ),
          ],
        ),
      ),
    );
  }
}

