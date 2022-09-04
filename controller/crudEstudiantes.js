import {conectar} from "../model/db_conectar.js";

var crud_estudiantes=({});

crud_estudiantes.leer=(req,res)=>{
    conectar.query('select e.id_estudiante,e.carne,e.nombres,e.apellidos,e.direccion,e.telefono,e.correo_electronico,ts.id_tipos_sangre,ts.sangre,date_format(e.fecha_nacimiento,"%Y-%m-%d")as fecha_nacimiento from estudiantes as e inner join tipos_sangre as ts on e.id_tipo_sangre=ts.id_tipos_sangre;',(err,resultado1)=>{
        if(err){
            console.log(err);
        }else{
            conectar.query('SELECT id_tipos_sangre,sangre FROM tipos_sangre;',(error,resultado2)=>{
                if(error){
                    console.log(error);
                }else{
                    res.render('estudiantes/index',{
                        resultado:resultado1,
                        sangreCollection:resultado2
                    });
                }
            });
        }
    });

    
}

crud_estudiantes.crud=(req,res)=>{
    const btn_agregar = req.body.btn_agregar;
    const btn_modificar = req.body.btn_modificar;
    const btn_eliminar = req.body.btn_eliminar;
    const id = req.body.txt_id;
    const carne = req.body.txt_carne;
    const nombres = req.body.txt_nombres;
    const apellidos = req.body.txt_apellidos;
    const direccion = req.body.txt_direccion;
    const telefono = req.body.txt_telefono;
    const correo_electronico = req.body.txt_email;
    const id_tipo_sangre = req.body.txt_tipo_sangre;
    const fecha_nacimiento = req.body.txt_fecha_nacimiento;

    if(btn_agregar){
        conectar.query('insert into estudiantes SET ?',{carne:carne,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,fecha_nacimiento:fecha_nacimiento,id_tipo_sangre:id_tipo_sangre},(error,resultado)=>{
            if(error){
                console.log(error);
            }else{
                res.redirect('/');
            }
        }
        );
    }
    if(btn_modificar){
        conectar.query('update estudiantes SET ? WHERE id_estudiante=?',[{carne:carne,nombres:nombres,apellidos:apellidos,direccion:direccion,telefono:telefono,correo_electronico:correo_electronico,fecha_nacimiento:fecha_nacimiento,id_tipo_sangre:id_tipo_sangre},id],(error,resultado)=>{
            if(err){
                console.log(error);
            }else{
                res.redirect('/');
            }
        }
        );
    }
    if(btn_eliminar){
        conectar.query('delete from estudiantes WHERE id_estudiante=?',id,(error,resultado)=>{
            if(err){
                console.log(error);
            }else{
                res.redirect('/');
            }
        }
        );
    }

};
export {crud_estudiantes}