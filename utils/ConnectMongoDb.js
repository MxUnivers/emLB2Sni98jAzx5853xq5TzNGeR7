

const  mongooseClient   = require("mongoose");
const  dotenv =  require("dotenv");
dotenv.config();

//const url = "mongodb://localhost:20127"
const url = process.env.BASIC_URL
mongooseClient.set('strictQuery', false);
const connectMongoDb = async () => {
  await mongooseClient.connect(url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  ).then(() => {
    console.log("Connexion à la base de donnée réussi");
  }).catch((error) => {
      console.log("connexion a la base de données réfusés "+error);
    })
}


module.exports =  connectMongoDb;