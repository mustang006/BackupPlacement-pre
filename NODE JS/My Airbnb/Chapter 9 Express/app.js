// core module
// External module
const express = require("express");
const requestHandler = require("./user.js");

// local modeule

const app = express();

app.use("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  // res.send("<p> Came for first</p>");
  next();
});


app.post("/submit-details", (req, res, next) => {
  console.log("Came in second middleware", req.url, req.method);
  res.send("<p> Welcome to complete coding</p>");
});

app.use("/", (req, res, next) => {
  console.log("Came in first middleware", req.url, req.method);
  res.send("<p> Came from another middleware first</p>");
  next();
});

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   //testingSyntax();
//   // runtime();
//   logical();
// });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
