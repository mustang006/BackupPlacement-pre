
const sumRequestHandler = (req, res) => {
  console.log("In sum requestHandler", req.url);
  const body = [];
  // console.log(body);
  
  req.on("data", chunk => body.push(chunk));
  // console.log(body);
  
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    // console.log(result);
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head><title>Result Set</title></head>
      <body>
      <h1>The sum is ${result}</h1>
      <a href="/calculator">Go to Calculator</a>
      </body>
      </html>
    `);
  });
};
exports.sumRequestHandler = sumRequestHandler;
