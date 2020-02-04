const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel')

//this is code that you have already implemented in your project
router.get('/all',
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
itineraryModel.findOne({ city: cityRequested })
.then(itineraries => {
res.send(itineraries)
})
.catch(err => console.log(err));
});

module.exports = router
