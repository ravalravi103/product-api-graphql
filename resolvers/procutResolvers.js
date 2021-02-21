const {Product} = require('../models/Products');

const resolvers = {
    Query: {
        getAllProducts: () => Product.find(),
        getSingleProduct: (parent,args) => Product.findById(args.productId)
    },   
    
    Mutation : {
    //    Add product
        addProduct : (parent, args) => {
           let newProduct = new Product({...args})  
           return (
            newProduct.save()
            .then(product => product)
            .catch(err => err)
           )
        },

        // Delete Product
        deleteProduct: (parent,args) => {
           return (
            Product.findByIdAndRemove(args.productId)
            .then(product => product)
            .catch(err => err)
           )
        },

        // Update Product
        updateProduct: (parent,args) => {  
                return (
                    Product.findById(args.productId)
                    .then(product => {
                        let oldProduct = product;
                        oldProduct.productName = args.productName;
                        oldProduct.productDesc = args.productDesc;
                        oldProduct.productTags =args.productTags;
                        oldProduct.productPrice = args.productPrice;
                        oldProduct.productRating = args.productRating;
                        oldProduct.categoryId = args.categoryId;
                        let updatedProduct = oldProduct.save()
                        .then(product => {
                            return product
                        })
                        .catch(err => err)
                        return updatedProduct
                 })
                 .catch(err => err)
                )
        }
    }
};


module.exports = resolvers;
  