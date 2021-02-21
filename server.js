var express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const multer = require('multer');
const GridfsStorage = require('multer-gridfs-storage');


// DotEnv Config
require('dotenv').config()


// Local variable 
const APOLLO_SREVER = require('./apolloServer/apolloServer')
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL
 
const app = express();
APOLLO_SREVER.applyMiddleware({ app });
 
// const storage = new GridfsStorage({
//     url : DATABASE_URL,
//     file : (req,file) => {
//         return new Promise((resolve,reject)=> {
//             crypto.randomBytes(16, (err,buf) => {
//                 if(err) return reject(err);
//                 const fileName = buf.toString('hex') + path.extname(file.originalname);
//                 const fileInfo = {
//                     fileName : fileName,
//                     bucketName : 'uploads'
//                 };
//                 resolve(fileInfo)
//             })
//         })
//     }
// });

// const upload = multer({storage})

 mongoose.connect(DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true })
 .then(db => {
    console.log('Connected To Database')
    // let gfs = new mongoose.mongo.GridFSBucket({bucketName:'uploads'});
    app.listen(PORT, () => console.log('Server Stared !'));
})
.catch(err => console.log(err))

