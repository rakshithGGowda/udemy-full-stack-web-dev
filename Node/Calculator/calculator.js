const express = require('express')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', function (req, res) {
    let weight = parseFloat(req.body.num1);
    let height = parseFloat(req.body.num2);

    var bmi = weight / Math.pow(height, 2);

    res.send("The calculated result " + bmi.toString())
});


app.get('/', function (req, res) {
    res.sendFile(__dirname + "//index.html");
});

app.listen(3000, function () {
    console.log("server up at 3000");
})