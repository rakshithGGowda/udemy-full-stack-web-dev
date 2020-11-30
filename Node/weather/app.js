const express = require("express")
const https = require("https")
const app = express();


app.get("/", function(req, res) {
    let url = "https://api.openweathermap.org/data/2.5/forecast?q=bengaluru&appid=555ae03898b874456b87208df407fdc6"


    https.get(url, function(response) {
        console.log(response.statusCode)
        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            console.log(weatherData.main.temp)
        })
    })
    res.send("response")
})

app.listen(3000, function() {
    console.log("server is up at 3000");

})