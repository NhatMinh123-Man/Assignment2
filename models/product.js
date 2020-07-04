const mongoose = require('mongoose');
const { Int32 } = require('mongodb');

var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Name: String,
    Price: String,
    Unit: String,
    Information: String,
    urlImg: String
} , { collection: 'Product' } );

var Product = mongoose.model('Product', productSchema);

module.exports = Product;