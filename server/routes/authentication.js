var express= require('express');
var router = express.Router();
const key= require('.../keys');
const jwt= require('jsonwebtoken');
const userModel = require('../model/userModel');


router.post('/login', function (req, res) {
    userModel.findOne({ email: req.body.email })
        .then(user => {
            console.log(user);

            if (!user) {
                return res.send({ message: 'Incorrect Email.' });
            }

            if (user.password === req.body.password) {
                const payload = {
                    id: user._id,
                    userName: user.username,
                    avatarPicture: user.avatarPicture
                };
                const options = { expiresIn: 2592000 };
                jwt.sign(
                    payload,
                    key.secretOrKey,
                    options,
                    (err, token) => {
                        if (err) {
                            res.json({
                                success: false,
                                token: "There was an error"
                            });
                        } else {
                            res.json({
                                success: true,
                                token: token
                            });
                        }
                    }
                );
            } else {
                res.send({ message: 'Incorrect password.' });
            }
        })
        .catch(err => {
            return req.send(err);
        });
})

module.exports = router;
