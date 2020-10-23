const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());



mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('Connected to db!'))


// Set up router
const apiRoute = require('./routes/api');
const authRoute = require('./routes/auth');

app.use('/api', apiRoute);
app.use('/api/user', authRoute);

app.get('/', (req, res) => {
  res.send('Connected')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})