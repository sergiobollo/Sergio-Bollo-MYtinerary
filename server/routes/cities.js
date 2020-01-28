const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');

router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' })
});

router.get('/all',
    (req, res) => {
        cityModel.find({})
            .then(files => {
                res.send(files)
            })
            .catch(err => console.log(err));
    });

//router.post('/', (req, res) => {
//const newCity = new cityModel({
//name: req.body.name,
//country: req.body.country
//})
//newCity.save()
//.then(city => {
//res.send(city)
//})
//.catch(err => {
//res.status(500).send("Server error")})
//});


router.post('/', (req, res, next) => {
 
    const inputCity = req.body.name; //Extract title from input form
    cityModel.findOne({name:inputCity}, function(err, city){
        if(err) console.log(err);
        if (city){
            console.log("This has already been saved");
        } else {
 
            const newCity = new cityModel({
            name: req.body.name,
            country: req.body.country
            })
            newCity.save()
            .then(city => {
            res.send(city)
            })
            .catch(err => {
            res.status(500).send("Server error")});
                
                console.log("New example created");
                res.redirect(`/`);
            });
        }
    });
});

module.exports = router

// router.post('/example', (req, res, next) => {
 
   // var query = req.body.title; //Extract title from input form
   // Example.findOne({title:query}, function(err, example){
     //   if(err) console.log(err);
      //  if ( example){
     //       console.log("This has already been saved");
     //   } else {
 
     //      var example = new Example(req.body);
       //     example.save(function(err, example) {
         //       if(err) console.log(err);
           //     console.log("New example created");
             //   res.redirect(`/`);
            });
     //   }
   // });
// });
// https://medium.com/@thiscodeworks.com/how-to-save-non-duplicate-unique-documents-in-mongodb-via-mongoose-node-js-4a26b0336ab3
