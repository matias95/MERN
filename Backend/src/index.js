const express = require('express')
const app= express()
const morgan= require('morgan')
const cors=require('cors')
const bodyparser= require('body-parser')
require('./database')

app.set('Port',4000)

//Morgan=indica el tiempo de la peticion
app.use(morgan('dev'))

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

//Iniciar servidor
app.listen(app.get('Port'),()=>{

    console.log('escuchando por el puerto',app.get('Port'))
})

//Rutas
app.use('/api/',require('./routes/prueba.route.js'))