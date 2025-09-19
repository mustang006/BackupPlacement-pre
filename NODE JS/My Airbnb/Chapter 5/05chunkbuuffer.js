const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome to products</title></head>");
    res.write("<body><h1>Welcome to products</h1></body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete your work</title></head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write('<form action="/submit-details" method="POST">');
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
    res.write("</body></html>");
    return res.end();
  }

  if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log("Received chunk:", chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log("Full body:", fullBody);

      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params.entries());

      console.log("Parsed body object:", bodyObject);

      fs.writeFileSync("user.txt", JSON.stringify(bodyObject, null, 2));

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

module.exports = requestHandler;
