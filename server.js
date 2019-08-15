var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reserved = [

];

var waiting = [

];

app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function (req, res) {
  return res.json(reserved);
});

app.get("/api/waitlist", function (req, res) {
  return res.json(waiting);
});

app.delete("/tables", function (req, res) {
  res.send('Got a DELETE request at /user')
});

app.post("/reserve", function (req, res) {
  var newReserve = req.body;




  console.log(newReserve);
  if (reserved.length < 5) {
    reserved.push(newReserve);
  } else {
    waiting.push(newReserve);
  }
  res.json(reserved);
});

app.listen(PORT, function () {
  console.log("http://localhost:" + PORT + "/index");
});
