const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const User = require('../models/user');

const { registerValidation, loginValidation } = require('../validation')


const Joi = require('@hapi/joi');

// Routes

// Register user
router.post('/register', async (req, res) => {
  // Validate before registering
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send('Email already exists');

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email, 
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});


// Login user
router.post('/login', async (req, res) => {
  // Validate
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Is email valid
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email doesn\'t exist');

  // Is password correct?
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);

  res.send('Logged in!')
})



module.exports = router;