const express = require("express");
const routes = express.Router();

const routerCharacters = require("./characters");
const routerLogin = require("./login");

routes.use("/rickandmorty", routerCharacters, routerLogin);

module.exports = routes;
