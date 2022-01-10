const express = require('express')
const productsRouter= require('./routes/products')

const app = express()
const port = 4000 //3000 para el front y 4000 para el back

app.use(express.json()) // Para habilitar envio de JSON al servidor

require('dotenv').config() // carga fichero variables de entorno
require('./utils/dbmongo') //Conexión a la BBDD de mongo


app.use("/", productsRouter) //Rutas API landing

//Listen
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })
  