import { inject, injectable } from 'tsyringe';

import { Player } from '../../models/Player';
import { IPlayersRepository } from '../../repositories/IPlayersRepository';

interface IRequest {
    discord_userid: string | string[] | undefined;
}

@injectable()
class FindPlayerUseCase {
    constructor(
        // categoriesRepository vai receber o repositório injetado sem precisar dar new
        @inject('PlayersRepository')
        private playersRepository: IPlayersRepository,
    ) {}

    async execute({ discord_userid }: IRequest): Promise<Player> {
        const player = await this.playersRepository.findByDiscordUserID(
            discord_userid,
        );

        if (!player) {
            throw new Error('Player not found!');
        }

        return player;
    }
}

export { FindPlayerUseCase };
