const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.write(`<h1>Welcome to Home page</h1>`);
    return res.end;
  } else if (req.url == "/women") {
    res.write(`<h1>Welcome to women page</h1>`);
    return res.end;
  } else if (req.url == "/card") {
    res.write(`<h1>Welcome to card page</h1>`);
    return res.end;
  } else if (req.url == "/insta") {
    res.write(`<h1>Welcome to insta page</h1>`);
    return res.end;
  } else if (req.url == "/json") {
    res.write(`<h1>Welcome to json page</h1>`);
  }
  res.write(`
  <html>
  <body>
  <nav>
  <ul>
  <li>
  <a href="/">Home</a></li></ul></nav>
  <li>
  <a href="/womenn">women</a></li></ul></nav>
  <li>
  <a href="/card">card</a></li></ul></nav>
  <li>
  <a href="/insta">insta</a></li></ul></nav>
  <li>
  <a href="/json">json</a></li></ul></nav>

  </body>
  </html>

  `);
});

server.listen(3001, () => {
  console.log(`Server is running on address https://localhost:3001`);
});
