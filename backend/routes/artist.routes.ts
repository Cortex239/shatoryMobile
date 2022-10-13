import { Router } from "express";
const router = Router();

import * as artistController from '../controllers/artistas.controller';

router.post('/', artistController.createArtist);
router.get('/', artistController.getArtists);
router.get('/getByName', artistController.getArtistsByName);

export default router;