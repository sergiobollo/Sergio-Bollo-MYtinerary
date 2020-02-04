const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel');
const cityModel = require('../model/cityModel');

//this is code that you have already implemented in your project
router.get('/todos',
(req, res) => {
itineraryModel.find({})
.then(files => {
res.send(files)
})
.catch(err => console.log(err));
});

//this is how you implement a city route by specific city
router.get('/:name',
(req, res) => {
let cityRequested = req.params.name;
cityModel.findOne({ name: cityRequested })
.then(city => {
res.send(city)
})
.catch(err => console.log(err));
});

module.exports = router
