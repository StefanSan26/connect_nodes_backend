require('dotenv').config();
const express = require('express')
const cors = require('cors')
require('./db/index.js')

const app =  express()


//settings
app.use(express.json())
app.use(cors())


//routes
app.use('/api/todos',require('./routes/todos'));
// app.get('/todos',(req, res)=>{
//   res.send('Aqui estan todos los todos')
// })


app.listen(3010,()=>console.log('escuchando en el puerto 3010'))