const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});

// app.use((req,res,next)=>{
//   console.log('Second dummy middleware' ,req.url, req.method);
//   res.send("<p>Welcome to complete coding</p>")

// })

app.get("/", (req, res, next) => {
  console.log("Handling / for get", req.url, req.method);

  res.send("<p>Welcome to complete coding</p>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling / for get contact-us", req.url, req.method);

  res.send(`
    <h1>Wplease five your details here</h1>
    <form action="/contact-us" method = "POST" >
    <input type="text" name="name" placeholder = ""Enter your name />
    <input type="text" name="Email" placeholder = ""Enter your Email />
    <input type="submit"/>
    </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
  console.log(
    "First handling / for get contact-us",
    req.url,
    req.method,
    req.body
  );

  res.send(`
    <h1>We will contact you shortly</h1>
  `);
  next();
});

app.use(bodyParser.urlencoded);

app.post("/contact-us", (req, res, next) => {
  console.log("Handling / for get contact-us", req.url, req.method, req.body);

  res.send(`
    <h1>We will contact you shortly</h1>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
