var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
    name: String,
    category: String,
    price: String,
    detail: String,
    link: String,
}); 

const Product = mongoose.model("Product", productSchema);
module.exports = Product;