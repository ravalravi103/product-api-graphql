const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    getAllCategory: [Category],
    getSingleCategory(categoryId:ID) : Category
  }

  type Category {
      categoryName :String,
      categoryDesc :String,
  }

  type Mutation{
     addCategory(categoryName:String,categoryDesc:String) : Category
     deleteCategory(categoryId:ID) : Category
     updateCategory(categoryId:ID,categoryName:String,categoryDesc:String) :Category
  }

  
`;


module.exports = typeDefs
