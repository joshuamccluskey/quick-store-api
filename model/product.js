'use strict';


const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  origin: String,
  qty: Number,
  img_url: String
  
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
