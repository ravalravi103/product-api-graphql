const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getAllProducts: [Product],
    getSingleProduct(productId:ID) : Product
  }

  type Product {
      productName :String,
      productDesc :String
  }

  type Mutation{
     addProduct(productName:String,productDesc:String) : Product
     deleteProduct(productId:ID) : Product
     updateProduct(productId:ID,productName:String,productDesc:String) :Product
  }

  
`;


module.exports = typeDefs

// getSingleProduct : String,

// type Product {
//     productName :String,
//     productDescription : String,
//   }

//   type Mutation  {
//     addProduct(productName:String,productDescription : String) : Product
//   }