
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
// Bourses d'etude
const scholarshipRoute = require("./routes/scholarshipRoute");

const authEntrepriseRoute = require("./routes/authenticate/authEntrepriseRoute");

const candidaturesRoute = require("./routes/candidatureRoute");
// Messages
const messageRoute = require("./routes/messageRoute");
// Packs
const packRoute = require("./routes/packs/packRoute");
// Post Blog
const blogRoute = require("./routes/PostRoute");
const commentRoute = require("./routes/CommentRoute");
// Formation 
const formationRoute = require("./routes/coaching/formationRoute");







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
app.use(`${apiV1}/formation`, formationRoute);
app.use(`${apiV1}/bourse`, scholarshipRoute);
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
