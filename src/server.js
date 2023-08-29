const express = require("express");
const pug = require("pug");
const path = require("path");
const morgan = require("morgan");

//Inicializaciones
const app = express();

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Configuraciones
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//rutas
app.use(require("./routes/indexRoute.js"));

module.exports = app;
