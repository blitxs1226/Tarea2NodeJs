import express from "express";
import {crud_estudiantes} from "./controller/crudEstudiantes.js"
import {nosotros} from "./controller/nosotrosController.js"

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('views','./view');
app.set('view engine', 'ejs');

app.listen('4000',()=>{
    console.log('Aplicacion Iniciada: http://localhost:4000');
})

app.get('/',crud_estudiantes.leer)
app.get('/nosotros',nosotros.index)
app.post('/crud_estudiantes',crud_estudiantes.crud)