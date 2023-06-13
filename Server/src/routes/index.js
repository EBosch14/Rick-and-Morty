const express = require("express");
const routes = express.Router();

const routerCharacters = require("./characters");
const routerLogin = require("./login");
const routerFavorites = require('./favorites')

routes.use("/rickandmorty", routerCharacters, routerLogin, routerFavorites);

module.exports = routes;
