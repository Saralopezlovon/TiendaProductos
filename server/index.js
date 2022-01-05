const express = require('express')

const app = express()
const port = 3000

app.use(express.json()) // Para habilitar envio de JSON al servidor

require('dotenv').config() // carga fichero variables de entorno
require('./utils/dbmongo') //Conexión a la BBDD de mongo


//Listen
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
  })