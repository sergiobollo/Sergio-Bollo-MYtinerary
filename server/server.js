const express = require("express");
const app = express();
const db = require('./db');

const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cors());

app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/users', require('./routes/users'));

//passport middleware
app.use(passport.initialize());
//passport configuration
require("./passport");

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on " + port + "port");
});
