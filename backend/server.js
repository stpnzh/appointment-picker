const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(session({
  secret: 'secretcode',
  resave: true,
  saveUninitialized: true
}))
app.use(cookieParser('secretcode'))


mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, 
  () => console.log('Connected to db!'))


// Set up router
const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

app.get('/', (req, res) => {
  res.send('Connected')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})