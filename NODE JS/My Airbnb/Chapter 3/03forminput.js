const http = require("http");
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome to products</title></head>");
    res.write("<body><h1>LWelcome to products</h1></body>");
    res.write("</html>");
    return res.end();
  }if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete your work</title></head>");
    res.write("<body><h1>enter your name</h1>");
    res.write('<form action="/submit-details" method="POST">');  // Added closing >
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br><br>'
    );
    res.write('<label for="gender">Gender:</label><br>');
    res.write('<input type="radio" name="gender" id="male" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" id="female" value="female">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" name="gender" id="other" value="other">');
    res.write('<label for="other">Other</label><br><br>');
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body></html>");  // Added closing body and html tags
    return res.end();


  }
  else if(req.url.toLowerCase() ==="/submit-details" && req.method == "POST" ){
    fs.writeFileSync('user.txt', 'Abhishek patil');
    res.statusCode = 302;
    res.setHeader('Location' , '/');

  }

  // process.exit();
});
const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on address http://localhost:${port}`);

});
