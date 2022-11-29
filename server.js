const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const pencegahanRoute = require('./routes/pencegahan');
//const AuthRoute = require('./routes/AuthRoutes');


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
  



const connectDB = require('./config/db');
dotenv.config({ path: './env'})
connectDB()

const app = express();



// parse requests of content-type - application/json
app.use(express.json());
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'))
if(process.env.MODE === 'development'){
  app.use(morgan('dev'))
}
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));




const PORT = process.env.PORT || 5000;
app.use('/api/prevention', pencegahanRoute)


app.get('/', (req, res) => {
    res.send('API is running good')
})

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));


