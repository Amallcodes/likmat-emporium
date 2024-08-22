require("dotenv").config()
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors'); // Require the cors package
// 
const productRoutes = require('./routes/productRoutes');

const app = express();

// Use the cors middleware to enable CORS (cross origin resource sharing)
app.use(cors());

// const corsOptions = {
//     origin: 'https://your-frontend-domain.com',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     optionsSuccessStatus: 204, // Some legacy browsers (IE11) may not send 204
//   };
  
//   app.use(cors(corsOptions)); 
// the above commeneted cors lines indicates if you were only allowing requests from a specific url

// middleware to parse json data
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});


///////////////routes
app.use("/api/products", upload.none(), productRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        ///////////// app.listen
        app.listen(process.env.PORT, () => {
            console.log(" connected to db and app started on port 4000");
        });
    })
    .catch((err) => {
        console.log(err);
    })

