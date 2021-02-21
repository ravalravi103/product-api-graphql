const { ApolloServer } = require('apollo-server-express');


// take all The TypeDefs
const typeDefs = require('../queries/productQuery');
// const typeDefs = require('../queries/categoryQuery');

// Take All The Resolver 
const resolvers = require('../resolvers/procutResolvers');
// const resolvers = require('../resolvers/categoryResolvers');


const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
