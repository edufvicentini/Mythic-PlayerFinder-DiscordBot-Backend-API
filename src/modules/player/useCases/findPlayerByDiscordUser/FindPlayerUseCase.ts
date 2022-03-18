import { inject, injectable } from 'tsyringe';

import { Player } from '../../models/Player';
import { IPlayersRepository } from '../../repositories/IPlayersRepository';

interface IRequest {
    discord_username: string | string[] | undefined;
}

@injectable()
class FindPlayerUseCase {
    constructor(
        // categoriesRepository vai receber o repositório injetado sem precisar dar new
        @inject('PlayersRepository')
        private playersRepository: IPlayersRepository,
    ) {}

    async execute({ discord_username }: IRequest): Promise<Player> {
        const player = await this.playersRepository.findBydiscordUsername(
            discord_username,
        );

        if (!player) {
            throw new Error('Player not found!');
        }

        return player;
    }
}

export { FindPlayerUseCase };
