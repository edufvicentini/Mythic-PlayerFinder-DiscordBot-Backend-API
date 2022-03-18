import { Router } from 'express';

import { CreatePlayerController } from '../modules/player/useCases/createPlayer/CreatePlayerController';
import { FindPlayerController } from '../modules/player/useCases/findPlayerByDiscordUser/FindPlayerController';
import { ListPlayersController } from '../modules/player/useCases/listPlayers/listPlayersController';
import { UpdatePlayerController } from '../modules/player/useCases/updatePlayer/UpdatePlayerController';

const playerRoutes = Router();

const createPlayerController = new CreatePlayerController();
const findPlayerController = new FindPlayerController();
const updatePlayerController = new UpdatePlayerController();
const listPlayerController = new ListPlayersController();

playerRoutes.post('/', createPlayerController.handle);
playerRoutes.get('/', findPlayerController.handle);
playerRoutes.get('/all', listPlayerController.handle);
playerRoutes.put('/', updatePlayerController.handle);

export { playerRoutes };
