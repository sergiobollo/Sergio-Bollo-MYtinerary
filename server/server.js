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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server is running on " + port + "port");
});