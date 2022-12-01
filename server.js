const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const dbConfig = require("./config/db.config");



const fileStorage =multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'images');
  },
  filename: (req, file,cb) => {
      cb(null, new Date().getTime() + '-' + file.originalname)
  }
})

const fileFilter= (req, file, cb) => {
  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
      cb(null,true);
  } else {
      cb(null, false);
  }
}




const app = express();

const corsOptions = {

  origin: "*"
};



app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))
if(process.env.MODE === 'development'){
  app.use(morgan('dev'))
}
// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const db = require("./models");
const Role = db.role;

dbConfig.
  then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to voluntegreen application." });
});


const allRouter = require('./routes/')
app.use(allRouter)


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  })
}

