import express from "express";
import { dirname, join } from 'path'
import { fileURLToPath } from "url";

import indexRoutes from './routers/index.routes.js'



const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('view engine', 'ejs')
app.set('views', join(__dirname,'views'))
app.use(express.static(join(__dirname,'style')))


app.use(indexRoutes)

app.listen(3000)
console.log("corriendo en el puerto 3000")