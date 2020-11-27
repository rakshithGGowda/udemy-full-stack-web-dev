const express = require('express');
const app = express();


app.get('/', function (req, res) {
    console.log("oadda");
    res.send("<h1>Holla Mudna<h1>");
});



app.listen(3000, function() {
    console.log("starting server at 3000");
});