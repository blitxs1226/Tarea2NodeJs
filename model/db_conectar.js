import mysql from 'mysql';

var conectar = mysql.createConnection({
    host: 'localhost',
    user: 'Usr_Node',
    password: '1226',
    database: 'db_tarea_node'
});

conectar.connect(function(err) {
    if (err) {
        console.log("Error en la conexion:"+err.stack);
        return;
    } else {
        console.log('Conexion Exitosa ID: ' + conectar.threadId);
    }
});
export {conectar};