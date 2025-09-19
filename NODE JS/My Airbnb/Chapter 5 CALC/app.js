const http = require('http')
const {requestHandler} = require('./handler.js')

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT , ()=>{
  console.log(`The Server is running https://localhost:${PORT}`);
  
})