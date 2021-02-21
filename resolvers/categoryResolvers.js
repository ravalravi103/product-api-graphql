const {Category} = require('../models/Category');

const resolvers = {
    Query: {
        getAllCategory: () => Category.find(),
        getSingleCategory: (parent,args) => Category.findById(args.categoryId)
    },   
    
    Mutation : {
        addCategory : (parent, args) => {
            let newCategory = new Category({
                categoryName : args.categoryName,
                categoryDesc : args.categoryDesc,
            })  

           return (
            newCategory.save()
            .then(category => category)
            .catch(err => err)
           )
        },

        deleteCategory: (parent,args) => {
           return (
            Category.findByIdAndRemove(args.categoryId)
            .then(category => category)
            .catch(err => err)
           )
        },

        updateCategory: (parent,args) => {  
                return (
                    Category.findById(args.categoryId)
                    .then(category => {
                        let oldCategory = category;
                        oldCategory.categoryName = args.categoryName;
                        oldCategory.categoryDesc = args.categoryDesc;

                        let updatedCategory = oldCategory.save()
                        .then(category => {
                            return category
                        })
                        .catch(err => err)
                        return updatedCategory
                 })
                 .catch(err => err)
                )
        }
    }
};


module.exports = resolvers;
  