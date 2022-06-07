'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL)

// mongoose connection validation
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected')
});

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;




app.get('/', (req, res) => {
  res.send(`🤙 Surfs up...I mean server\'s up`);
})

app.listen(PORT, () => console.log(`🤙 Surfs up...I mean server's up`));
