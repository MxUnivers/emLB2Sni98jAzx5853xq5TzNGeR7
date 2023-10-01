
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config();




// Module de d'application .
const administratorRoute = require("./routes/administratorRoute");

const education_candidatRoute = require("./routes/educationCandidatRoute");

const experience_candidatRoute = require("./routes/expererienceCandidatRoute");

const project_candidatRoute = require("./routes/projectCandidatRoute");

const authAdministratorRoute = require("./routes/authenticate/authAdministratorRoute");
// Candidat
const authCandidatRoute = require("./routes/authenticate/authcandidatRoute");
const candidatRoute = require("./routes/candidatRoute");
// Entreprises
const entrepriseRoute = require("./routes/entrerpriseRoute");
// Annonces
const annonceRoute = require("./routes/AnnonceRoute");
// Offres d"emplois
const offreEmploisRoute = require("./routes/offreEmploisRoute");

const authEntrepriseRoute = require("./routes/authenticate/authEntrepriseRoute");

const candidaturesRoute = require("./routes/candidatureRoute");
// Messages
const messageRoute = require("./routes/messageRoute");
// Packs
const packRoute = require("./routes/packs/packRoute");
// Post Blog
const blogRoute = require("./routes/PostRoute");
const commentRoute = require("./routes/CommentRoute");






const UploadFile = require("./utils/FileUpload");
// connect Mongoose
const LanchMogoDb = require("./utils/ConnectMongoDb");
const { AuthorizationMiddleware } = require("./middlewares/Authtoken");
LanchMogoDb();


const app = express();

// middlwares de l'application 
app.use(cors({ origin: "*" }));
app.use(morgan('common'));
app.use(express.json({ limit: "500mb" }));
//app.use(express.urlencoded({ limit: "500mb" }));
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({
  limit: '1000mb',
  extended: false,
}));
app.use(helmet());
// access control
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST ');
  res.setHeader('Authorization', 'Bearer Sb5xnq9Gwe4mIlyucQJpi0lCoyn+faar5SRVzAFGDAqZbr6kRROW/');
  next();
});


// upload image
app.post("/uploadImage", (req, res) => {
  UploadFile(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

// verfication de notiifcation
app.post('/payment-notification', async (req, res) => {
  try {
    // Récupérez les données de notification envoyées par Cinepay depuis req.body
    const notificationData = req.body;

    // Exemple de données de notification de Cinepay
    /*
    notificationData = {
      cpm_site_id: 'VOTRE_SITE_ID',
      cpm_trans_id: 'IDENTIFIANT_TRANSACTION',
      cpm_currency: 'XOF',
      cpm_amount: '100', // Montant en centimes (par exemple, 100 représente 1 XOF)
      cpm_payment_date: '2022-09-30 12:00:00',
      // ... d'autres données ...
    }
    */

    // Vérifiez les données de notification pour confirmer le paiement
    const siteId = process.env.REACT_APP_SITE_WEB_CN; // Remplacez par votre identifiant de site Cinepay
    const transactionId = req.body.transactionId; // Remplacez par l'identifiant de la transaction que vous avez précédemment stocké

    // Vérifiez si le site_id de la notification correspond à votre site_id
    if (notificationData.cpm_site_id === siteId) {
      // Vérifiez si l'identifiant de transaction correspond à celui que vous avez précédemment stocké
      if (notificationData.cpm_trans_id === transactionId) {
        // La transaction est confirmée avec succès
        // Vous pouvez mettre à jour l'état du candidat ou effectuer d'autres actions ici
        console.log('Paiement confirmé pour la transaction', transactionId);
        res.status(200).json({ message: 'Paiement confirmé avec succès.' });
      } else {
        // L'identifiant de transaction ne correspond pas, ce n'est pas la bonne transaction
        console.error('Identifiant de transaction incorrect');
        res.status(400).json({ message: 'Identifiant de transaction incorrect.' });
      }
    } else {
      // Le site_id ne correspond pas, ce n'est pas votre notification
      console.error('Site ID incorrect');
      res.status(400).json({ message: "'Site ID incorrect.'" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors du traitement de la notification de paiement.');
  }
});







app.get("/", AuthorizationMiddleware, (req, res) => {
  res.send({
    article: "",
  });
  console.log("api vu ...")
});


const apiV1 = `/api/v1`;
app.use(`${apiV1}/admimistrator`, administratorRoute);
app.use(`${apiV1}/auth/admimistrator`, authAdministratorRoute);
app.use(`${apiV1}/candidat`, candidatRoute);
app.use(`${apiV1}/auth/candidat`, authCandidatRoute);
app.use(`${apiV1}/entreprise`, entrepriseRoute);
app.use(`${apiV1}/auth/entreprise`, authEntrepriseRoute);
app.use(`${apiV1}/annonce`, annonceRoute);
app.use(`${apiV1}/offre`, offreEmploisRoute);
app.use(`${apiV1}/candidature`, candidaturesRoute);
app.use(`${apiV1}/message`, messageRoute);
app.use(`${apiV1}/packs`, packRoute);
app.use(`${apiV1}/education`, education_candidatRoute);
app.use(`${apiV1}/experience`, experience_candidatRoute);
app.use(`${apiV1}/project`, project_candidatRoute);
app.use(`${apiV1}/blog`, blogRoute);
app.use(`${apiV1}/comment`, commentRoute);




app.listen(process.env.PORT, () => {
  console.log("serveur demaré " + process.env.PORT);
})
