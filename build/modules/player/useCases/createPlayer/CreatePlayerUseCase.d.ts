import { IPlayersRepository } from '../../repositories/IPlayersRepository';
interface IRequest {
    discord_username: string;
    discord_userid: string | string[] | undefined;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
}
declare class CreatePlayerUseCase {
    private playersRepository;
    constructor(playersRepository: IPlayersRepository);
    execute({ discord_username, discord_userid, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }: IRequest): Promise<void>;
}
export { CreatePlayerUseCase };
