const express = require("express");
const app = express();

// get response when the request is sent!
app.get("/", function(req, res) {
	res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res) {
	res.send("contact me at pabitra@gmail.com");
});

app.get("/about", function(req, res) {
	res.send("I am a software engineer with 10 years of experience!");
});

// port where the listener is waiting for the server to send some response.
app.listen(3000, function () {
	console.log('the server has started');
});