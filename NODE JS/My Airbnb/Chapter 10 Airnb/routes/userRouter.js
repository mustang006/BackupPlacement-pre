//core modeule
const  path = require('path')
//externnal module
const express = require('express');
const userRouter = express.Router();

//local module
const rootDir = require("../utils/pathUtil")


userRouter.get("/",(req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir,'views','home.html'));
});

module.exports = userRouter;