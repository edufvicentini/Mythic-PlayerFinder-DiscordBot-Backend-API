import { Router } from 'express';

import { CreateCharacterController } from '../modules/character/useCases/createCharacter/CreateCharacterController';
import { GetCharactersByDiscordUserController } from '../modules/character/useCases/getCharactersByDiscordUser/GetCharactersByDiscordUserController';
import { ListCharactersController } from '../modules/character/useCases/listCharacters/ListCharacterController';
import { UpdateCharacterController } from '../modules/character/useCases/updateCharacter/UpdateCharacterController';

const characterRoutes = Router();

const createCharacterController = new CreateCharacterController();
const listCharactersController = new ListCharactersController();
const updateCharacterController = new UpdateCharacterController();
const getCharactersByDiscordUserController =
    new GetCharactersByDiscordUserController();

characterRoutes.post('/', createCharacterController.handle);
characterRoutes.get('/', listCharactersController.handle);
characterRoutes.put('/', updateCharacterController.handle);
characterRoutes.get(
    '/discord-user',
    getCharactersByDiscordUserController.handle,
);

export { characterRoutes };
