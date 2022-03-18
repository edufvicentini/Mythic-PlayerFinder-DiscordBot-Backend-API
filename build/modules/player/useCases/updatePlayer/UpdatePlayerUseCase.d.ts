import { PlayersRepository } from '../../repositories/implementations/PlayersRepository';
interface IRequest {
    discord_username: string | string[] | undefined;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
}
declare class UpdatePlayerUseCase {
    private playersRepository;
    constructor(playersRepository: PlayersRepository);
    execute({ discord_username, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }: IRequest): Promise<void>;
}
export { UpdatePlayerUseCase };
