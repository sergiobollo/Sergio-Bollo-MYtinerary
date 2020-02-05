
const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel')

router.post('/', (req, res) => {
    const newUser = new userModel({
        email: req.body.email,
        password: req.body.password,
        picture: req.body.pictute
    })
    newUser.save()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send("Server error")
        })
});


module.exports = router
