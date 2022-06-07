'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const Product = require('./model/product');

async function seed() {


  const slashSnowboard = new Product({
  name: 'Brain Storm',
  brand: 'Slash by GiGi',
  price: 450,
  origin: 'Italy',
  qty: 10,
  img_url: 'https://thegoodride.com/assets/lg-gallery/slash/snowboards/brain-storm/slash-brain-storm.jpg'
  });

  slashSnowboard.save(function(err){
    if(err) console.error(err);
    else console.log('Slash Product Saved 🤙');
  });

  await Product.create({
    name: '2020 Camber Board',
    brand: 'Burton',
    price: 550,
    origin: 'USA',
    qty: 30,
    img_url: 'https://www.rei.com/media/37a60ae6-bc48-4e00-b5d2-01e49bb02fe1?size=784x588'
    });

    console.log('Burton Product Saved 🤙');

    mongoose.disconnect();
}

seed();
