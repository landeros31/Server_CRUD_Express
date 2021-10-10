require('./config/conexion')

const express =require('express');
const port =(process.env.port || 3000);
const path = require('path'); 

//express
const app= express();

///admitir entrada
app.use(express.json())

//config
app.set('port',port)
app.use( express.static('public')) 

//rutas
app.use('/api', require('./rutas'))
app.get( '*', (req, res) => { res.sendFile( path.resolve(__dirname, 'public/index.html')) });

/////iniciar express
app.listen(app.get('port'),(error)=>{
  if(error){
    console.log("error al iniciar el servidor")

  }else{
    console.log("servidor iniciado en el puerto:"+port)
  }

})


