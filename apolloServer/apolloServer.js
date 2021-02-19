const { ApolloServer } = require('apollo-server-express');


// take all The TypeDefs
const typeDefs = require('../queries/productQuery');

// Take All The Resolver 
const resolvers = require('../resolvers/procutResolvers');

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
