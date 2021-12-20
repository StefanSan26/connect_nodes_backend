require('dotenv').config();
const express = require('express')
const cors = require('cors')
require('./db/index.js')

const app =  express()
const port = process.env.PORT || 6969    //si heroku trae la variable de entorno pues correrlo en ese puerto, en caso que no correrlos en el puerto 6969

//settings
app.use(express.json())
app.use(cors())


//routes
app.use('/api/todos',require('./routes/todos'));
// app.get('/todos',(req, res)=>{
//   res.send('Aqui estan todos los todos')
// })


app.listen(port,()=>console.log('escuchando en el puerto '+ port))