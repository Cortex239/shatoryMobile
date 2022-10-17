import { Router } from "express";
const router = Router();

import * as artistController from '../controllers/artistas.controller';

router.post('/', artistController.createArtist);
router.get('/', artistController.getAllArtists);
router.get('/getByName', artistController.getArtistsByName);
router.delete('/:id', artistController.deleteArtistById);

export default router;