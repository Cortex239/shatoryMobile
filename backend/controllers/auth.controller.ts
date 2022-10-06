import connection from '../database';
import jwt from 'jsonwebtoken';
require('dotenv').config();
import { User } from '../models/user';
import * as passwordEncryptor from '../utils/passwordEncryptor'

export const signUp = async (req: any, res: any) => {
    try {
        const newUser: User = { name: req.body.name, lastname: req.body.lastname, password: req.body.password, email: req.body.email, rut: req.body.rut };
        newUser.password = await passwordEncryptor.encryptPassword(req.body.password);

        connection.query("INSERT INTO usuario SET ?", [newUser], function (error: any, results: any) {
            if (error) throw error;
            if (process.env.API_KEY) {
                newUser.rut = results.insertId;
                const token = jwt.sign({ id: newUser.rut }, process.env.API_KEY, {
                    expiresIn: 86400,
                });
                res.status(201).json({ token });
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}
// app.post('/crearUsuario',bodyParser.json(),(req:any,res:any) =>{

//     let rut = req.body.rut;
//     let nombre = req.body.nombre;
//     let apellido = req.body.apellido;
//     let email = req.body.email;
//     let password = req.body.password;

//     connection.query("INSERT INTO usuario(rut, nombre, apellido, email, password) VALUES('"+rut+"','"+nombre+"','"+apellido+"','"+email+"','"+password+"')",
//     (req1:any,res1:any)=>{

//         if(!res1){
//             res.status(400).send('Error al crear Usuario')
//         }
//         res.status(201).send(JSON.stringify('Usuario Creada correctamente'));
//     });
// });

// app.get('/listarUsuarios', (req:any, res:any) =>{

//     connection.query('SELECT * FROM usuario',(req1:any,res1:any) =>{

//         if(!res1){
//             res.status(400).send('No existe informacion');
//         }
//         res.status(200).send(res1);
//     })
// })