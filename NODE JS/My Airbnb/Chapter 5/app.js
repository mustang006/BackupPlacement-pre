const http = require("http");
const userRequestHandler = require('./05chunkbuuffer')
const server = http.createServer(userRequestHandler)



const port = 3001;
server.listen(port, () => {
  console.log(`Server is running on address http://localhost:${port}`);
});
