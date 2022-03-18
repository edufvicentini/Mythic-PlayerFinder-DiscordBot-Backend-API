import { inject, injectable } from 'tsyringe';

import { IPlayersRepository } from '../../repositories/IPlayersRepository';

interface IRequest {
    discord_username: string;
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
        blizzard_btag,
        objectives,
        days_of_week_availability,
        times_of_day_availability,
    }: IRequest): Promise<void> {
        const playerAlreadyExists =
            await this.playersRepository.findBydiscordUsername(
                discord_username,
            );

        if (playerAlreadyExists) {
            throw new Error('Player already exists!');
        }

        await this.playersRepository.create({
            discord_username,
            blizzard_btag,
            objectives,
            days_of_week_availability,
            times_of_day_availability,
        });
    }
}

export { CreatePlayerUseCase };
