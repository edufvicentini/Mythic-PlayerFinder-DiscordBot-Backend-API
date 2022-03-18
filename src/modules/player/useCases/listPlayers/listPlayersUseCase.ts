import { inject, injectable } from 'tsyringe';

import { Player } from '../../models/Player';
import { PlayersRepository } from '../../repositories/implementations/PlayersRepository';

@injectable()
class ListPlayersUseCase {
    constructor(
        @inject('PlayersRepository')
        private playersRepository: PlayersRepository,
    ) {}

    async execute(): Promise<Player[]> {
        const players = await this.playersRepository.list();

        return players;
    }
}

export { ListPlayersUseCase };
