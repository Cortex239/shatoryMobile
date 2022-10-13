import connection from '../database';
import { Artist } from '../models/artist';

export function createArtist(req: any, res: any) {

    try {

        const newArtist: Artist = { nombreArtista: req.body.nombreArtista, descripcion: req.body.descripcion, linkImagen: req.body.linkImagen};

        connection.query("INSERT INTO artista SET ?", [newArtist], function (error: any, results: any) {
            if (error) throw error;
            else
            res.status(201).json({ message: "Artista creado correctamente" });
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export function getArtists(req:any, res:any){

    try {

        connection.query("SELECT nombreArtista, descripcion, linkImagen FROM artista", function (error:any, results:any){

            if(error) {throw error;}
            if (!results.length) return res.status(400).json({ message: "No existe informacion de artistas" });
            else { res.status(200).send(results); }
        })

    } catch (error) {

        console.log(error);
        return res.status(500).json(error)
    }
}

export function getArtistsByName(req:any, res:any){

    let nameArtist = req.body.nombreArtista;
    try {
        connection.query('CALL getArtistByName(?)', [nameArtist], (error:any, results:any) =>{
            res.status(200).send(results[0]);
        });

    } catch (error) {

        console.log(error);
        return res.status(500).json(error)
    }
}