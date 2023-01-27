import express from 'express'
import {DB} from './db.js'
import{PORT} from './config.js'

const app = express ()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.get('/',async (req,res)=>{
const rows = await DB.query('SELECT * from peliculas')
res.json(rows)
})

app.get('/createPelicula' , async (req,res) =>{
    const resultado = await DB.query('INSERT INTO peliculas (nombre)VALUES ("Guerra de las Galaxias")')
    res.json(resultado)
})
app.listen(PORT)
console.log('puerto en servicio:',PORT)