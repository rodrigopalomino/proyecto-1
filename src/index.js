import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import BodyParser  from "body-parser";
import indexRoutes from "./routers/index.routes.js";
import { PORT } from './config.js'

const app = express();

app.use(BodyParser.urlencoded({
    extended:true
}))

app.use(express.json())

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.set('view engine', 'ejs')
app.set('views', join(__dirname,'views'))
app.use(express.static(join(__dirname,'styles')))

app.use(indexRoutes);

app.listen(PORT);
console.log("corriendo en el puerto",PORT);
