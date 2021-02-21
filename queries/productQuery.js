const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getAllProducts: [Product],
    getSingleProduct(productId:ID) : Product
  }

  type Product {
      productName :String,
      productDesc :String,
      productTags :[String],
      productPrice:String,
      productRating : String,
      categoryId : ID
  }

  type Mutation{
     addProduct(productName:String,productDesc:String,productTags:[String],productPrice:String,productRating:String, categoryId:ID) : Product
     deleteProduct(productId:ID) : Product
     updateProduct(productId:ID,productName:String,productDesc:String,productTags:[String],productPrice:String,productRating:String,categoryId:ID) :Product
  }

  
`;


module.exports = typeDefs
