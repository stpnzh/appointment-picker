const router = require('express').Router();
const User = require('../models/user');

// Validation

const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().min(4).required(),
  password: Joi.string().min(6).required()
});


// Routes
router.post('/register', async (req, res) => {
  // Validate before registering
  // const { error } = schema.validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);


  const user = new User({
    name: req.body.name,
    email: req.body.email, 
    password: req.body.password
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);

  } catch (err) {

  }
})


module.exports = router;