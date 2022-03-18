import { Router } from 'express';

import { characterRoutes } from './character.routes';
import { playerRoutes } from './player.routes';

const router = Router();

router.use('/players', playerRoutes);
router.use('/characters', characterRoutes);

export { router };
