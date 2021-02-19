var express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// DotEnv Config
require('dotenv').config()




// Local variable 
const APOLLO_SREVER = require('./apolloServer/apolloServer')
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL
 
const app = express();
APOLLO_SREVER.applyMiddleware({ app });
 


 mongoose.connect(DATABASE_URL, { useNewUrlParser: true,useUnifiedTopology: true })
 .then(db => {
    console.log('Connected To Database')
    app.listen(PORT, () => console.log('Server Stared !'));
})
.catch(err => console.log(err))

