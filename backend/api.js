"use strict";
require('dotenv').config({ path: "./.env" });
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.EXPRESSPORT;
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.BD_PORT,
    password: process.env.BD_PASSWORD,
    database: process.env.DATANAME
});
connection.connect(function (error) {
    if (error) {
        console.log('No conectado');
        return;
    }
    console.log('Conectado');
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`);
});
app.post('/crearUsuario', bodyParser.json(), (req, res) => {
    let rut = req.body.rut;
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let email = req.body.email;
    let password = req.body.password;
    connection.query("INSERT INTO usuario(rut, nombre, apellido, email, password) VALUES('" + rut + "','" + nombre + "','" + apellido + "','" + email + "','" + password + "')", (req1, res1) => {
        if (!res1) {
            res.status(400).send('Error al crear Usuario');
        }
        res.status(201).send(JSON.stringify('Usuario Creada correctamente'));
    });
});
// app.get('/justificacion', (req:any, res:any) =>{
//     connection.query('SELECT * FROM justificacion',(req1:any,res1:any) =>{
//         if(!res1){
//             res.status(400).send('No existe informacion');
//         }
//         res.status(200).send(res1);
//     })
// })
// app.delete('/eliminarJustificacion/:id', (req:any,res:any) =>{
//     let id = req.params.id;
//     connection.query("DELETE FROM justificacion where id = ?", id, (req1:any,res1:any) =>{
//         res.status(200).send("Eliminado correctamente")
//     })
// })
// app.put('/editarJustificacion/', bodyParser.json(), (req:any, res:any)=>{
//     let id = req.body.id;
//     let nombre = req.body.nombre;
//     let apellido = req.body.apellido;
//     let curso = req.body.curso;
//     let asunto = req.body.asunto;
//     let mensaje = req.body.mensaje;
//     let data =[nombre, apellido, curso, asunto, mensaje, id]
//     connection.query("UPDATE justificacion SET nombre=?,apellido=?,curso=?,asunto=?,mensaje=? WHERE id =?", data, (error:any, res1:any) =>{
//         if(error) throw error ;
//         if(!res1){
//             res.status(400).send("No se encuentra la id")
//         }
//         res.status(200).send("Actualizado correctamente");
//     });
// });
// app.post('/crearUsuario', bodyParser.json(), async (req:any,res:any) => {
//     let rut = req.body.rut;
//     let nombre = req.body.nombre;
//     let password = req.body.password;
//     let apellido = req.body.apellido;
//     let curso = req.body.curso;
//     let passwordHash = await encrypt(password);
//     connection.query("INSERT INTO usuario (rut, password, nombre, apellido, curso) VALUES('"+rut+"','"+passwordHash+"','"+nombre+"','"+apellido+"','"+curso+"')",
//     (req1:any,res1:any) => {
//         res.status(201).send("usuario creado Correctamente");
//     });
// });
// //obtener usuario por su rut
// app.get('/usuario/:rut', (req:any, res:any) =>{
//     let rut = req.params.rut;
//     connection.query("SELECT * FROM usuario WHERE rut = ?", rut,(error:any, res1:any) => {
//         if(error) throw error;
//         if(!res1){
//             res.satus(404).send("Usuario no encontrado")
//         }
//         console.log(res1)
//         res.status(200).json(res1)
//     });
// });
