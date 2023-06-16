const express = require("express");
const routes = express.Router();

const routerCharacters = require("./characters");
const routerLogin = require("./login");
const routerFavorites = require('./favorites')
const routerRegister = require('./register')

routes.use("/rickandmorty", routerCharacters, routerLogin, routerRegister, routerFavorites);

module.exports = routes;
