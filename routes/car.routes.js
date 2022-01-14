const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// getting all cars from db
router.get('/getallcars', async (req, res) => {
  try {
    const response = await Car.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
});

module.exports = router;
