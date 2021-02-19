const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    // productId: {
    //     type: new mongoose.Types.ObjectId(),
    //     required: true
    //  },
    productName: {
       type: String,
       required: true
    },
    productDesc: {
       type: String,
       required: true
    },
//     productImage: {
//        type: String,
//        required: true
//    },
//     productTags: {
//        type: [String],
//        required: true
//    },
//    productPrice: {
//     type: Number,
//     required: true
//   },
//   productRating: {
//     type: Number,
//     required: true
//   }
}, {
    timestamps: true
});
var Product = mongoose.model('Product', productSchema);
module.exports = {Product, productSchema};

