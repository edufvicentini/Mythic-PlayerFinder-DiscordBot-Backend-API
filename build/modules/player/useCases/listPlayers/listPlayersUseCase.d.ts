import { Player } from '../../models/Player';
import { PlayersRepository } from '../../repositories/implementations/PlayersRepository';
declare class ListPlayersUseCase {
    private playersRepository;
    constructor(playersRepository: PlayersRepository);
    execute(): Promise<Player[]>;
}
export { ListPlayersUseCase };
