import { inject, injectable } from 'tsyringe';

import { IPlayersRepository } from '../../repositories/IPlayersRepository';

interface IRequest {
    discord_username: string;
    discord_userid: string | string[] | undefined;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
}

@injectable()
class CreatePlayerUseCase {
    constructor(
        // categoriesRepository vai receber o repositório injetado sem precisar dar new
        @inject('PlayersRepository')
        private playersRepository: IPlayersRepository,
    ) {}

    async execute({
        discord_username,
        discord_userid,
        blizzard_btag,
        objectives,
        days_of_week_availability,
        times_of_day_availability,
    }: IRequest): Promise<void> {
        const playerAlreadyExists =
            await this.playersRepository.findByDiscordUserID(discord_userid);

        if (playerAlreadyExists) {
            throw new Error('Player already exists!');
        }

        await this.playersRepository.create({
            discord_username,
            discord_userid,
            blizzard_btag,
            objectives,
            days_of_week_availability,
            times_of_day_availability,
        });
    }
}

export { CreatePlayerUseCase };
