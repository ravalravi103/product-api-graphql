const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
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
    productTags: {
       type: [String],
       required: true
   },
   productPrice: {
    type: String,
    required: true
  },
  productRating: {
    type: String,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
}, {
    timestamps: true
});
let Product = mongoose.model('Product', productSchema);
module.exports = {Product, productSchema};

