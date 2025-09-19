// Core Modules

// External Module
const express = require("express");
const storeRouter = express.Router();


const homesController = require("../controller/storeController");

// Local Module

storeRouter.get("/", homesController.getIndex);
storeRouter.get("/homes", homesController.getHome);
storeRouter.get("/bookings", homesController.getBookings);
storeRouter.get("/favourites", homesController.getFavouriteList);



module.exports = storeRouter;
