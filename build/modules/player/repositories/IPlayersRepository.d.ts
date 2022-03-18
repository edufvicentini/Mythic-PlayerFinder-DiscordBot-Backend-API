import { Player } from '../models/Player';
interface ICreatePlayerDTO {
    discord_username: string | string[] | undefined;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
}
interface IPlayersRepository {
    findBydiscordUsername(discord_username: string | string[] | undefined): Promise<Player | undefined>;
    list(): Promise<Player[]>;
    create({ discord_username, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }: ICreatePlayerDTO): Promise<void>;
    updatePlayerInfo({ discord_username, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }: ICreatePlayerDTO): Promise<void>;
}
export { IPlayersRepository, ICreatePlayerDTO };
