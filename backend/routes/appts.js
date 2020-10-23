const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

const Appt = require('../models/appt');


// VERIFY
router.get('/', async (req, res) => {
  try {
    const items = await Appt.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err })
  };
});

router.post('/', async (req, res) => {
  const item = new Appt({
    provider: req.body.provider,
    datetime: req.body.datetime,
    booked: req.body.booked,
    patient: req.body.patient
  })
  try {
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err })
  };
})

router.get('/:itemId', async (req, res) => {
  try {
    const item = await Appt.findById(req.params.itemId);
    res.json(item);
  } catch (err) {
    res.json({ message: err })
  }
})

router.delete('/:itemId', async (req, res) => {
  try {
    const removedItem = await Appt.deleteOne({ _id: req.params.itemId });
    res.json(`Successfully removed!`);
  } catch (err) {
    res.json({ message: err })
  }
})


router.patch('/:itemId', async (req, res) => {
  try {
    const updatedPost = await Appt.updateOne(
      { _id: req.params.itemId }, 
      { $set: { patient: req.body.patient, booked: true } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err })
  }
  
})


module.exports = router;