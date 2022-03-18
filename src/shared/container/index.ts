import { container } from 'tsyringe';

import { ICharactersRepository } from '../../modules/character/repositories/ICharactersRepository';
import { CharactersRepository } from '../../modules/character/repositories/implementations/charactersRepository';
import { PlayersRepository } from '../../modules/player/repositories/implementations/PlayersRepository';
import { IPlayersRepository } from '../../modules/player/repositories/IPlayersRepository';

// ICategoriesRepository
container.registerSingleton<IPlayersRepository>(
    'PlayersRepository',
    PlayersRepository,
);

container.registerSingleton<ICharactersRepository>(
    'CharactersRepository',
    CharactersRepository,
);
