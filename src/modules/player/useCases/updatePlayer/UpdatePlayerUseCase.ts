import { inject, injectable } from 'tsyringe';

import { PlayersRepository } from '../../repositories/implementations/PlayersRepository';

interface IRequest {
    discord_username: string | string[] | undefined;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
}

@injectable()
class UpdatePlayerUseCase {
    constructor(
        @inject('PlayersRepository')
        private playersRepository: PlayersRepository,
    ) {}

    async execute({
        discord_username,
        blizzard_btag,
        objectives,
        days_of_week_availability,
        times_of_day_availability,
    }: IRequest) {
        if (discord_username === undefined)
            throw new Error('No username defined');

        const player = await this.playersRepository.findBydiscordUsername(
            discord_username,
        );

        if (!player) throw new Error('Player not Found!');

        await this.playersRepository.updatePlayerInfo({
            discord_username,
            blizzard_btag,
            objectives,
            days_of_week_availability,
            times_of_day_availability,
        });
    }
}

export { UpdatePlayerUseCase };
