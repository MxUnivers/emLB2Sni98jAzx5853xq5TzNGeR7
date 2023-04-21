const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const router = express.Router();
const  dotenv =  require("dotenv");
dotenv.config();



// configure multer for handling multipart/form-data
const storage = multer.memoryStorage();
const upload = multer({ storage });

const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.CLOUD_API_KEY;
const api_secret = process.env.CLOUD_API_SECRET;

// Configuration 
cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};



router.post('/upload', upload.array('images'), (req, res) => {
  const { files } = req;
  const urls = [];

  files.forEach(file => {
    cloudinary.uploader.upload_stream({ resource_type: 'auto' }, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      urls.push(result.secure_url);
      if (urls.length === files.length) {
        return res.status(200).send(urls);
      }
    }).end(file.buffer);
  });
});

module.exports = router;