const express = require("express");
const { dirname } = require('path');
const { obtener } = require("./controllers/indexFunc");

const app = express();

app.listen(3000);
console.log("corriendo en el puerto 3000");

obtener();
