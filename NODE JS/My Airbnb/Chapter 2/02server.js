const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
if(req.url === '/'){
  res.setHeader("Content-Type", "text/html");
  res.write('<html>');
  res.write('<head><title>Complete your work</title></head>');
  res.write('<body><h1>Welcome to homee</h1></body>');
  res.write('</html>');
  res.end()
  return

}else if(req.url === '/products' ){
  res.setHeader("Content-Type", "text/html");
  res.write('<html>');
  res.write('<head><title>Welcome to products</title></head>');
  res.write('<body><h1>LWelcome to products</h1></body>');
  res.write('</html>');
  return res.end()

}



  res.setHeader("Content-Type", "text/html");
  res.write('<html>');
  res.write('<head><title>Complete your work</title></head>');
  res.write('<body><h1>Like Share and subscribe</h1></body>');
  res.write('</html>');
  res.end()
  // process.exit();
});
const port = 3001;
server.listen(port, () => {
  console.log(`Server is runnig on address http://localhost:${port}`);
});
