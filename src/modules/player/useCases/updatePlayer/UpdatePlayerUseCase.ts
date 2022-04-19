import { inject, injectable } from 'tsyringe';

import { PlayersRepository } from '../../repositories/implementations/PlayersRepository';

interface IRequest {
    discord_userid: string | string[] | undefined;
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
        discord_userid,
        blizzard_btag,
        objectives,
        days_of_week_availability,
        times_of_day_availability,
    }: IRequest) {
        if (discord_userid === undefined) throw new Error('No user ID defined');

        const player = await this.playersRepository.findByDiscordUserID(
            discord_userid,
        );

        if (!player) throw new Error('Player not Found!');

        await this.playersRepository.updatePlayerInfo({
            discord_userid,
            blizzard_btag,
            objectives,
            days_of_week_availability,
            times_of_day_availability,
        });
    }
}

export { UpdatePlayerUseCase };
