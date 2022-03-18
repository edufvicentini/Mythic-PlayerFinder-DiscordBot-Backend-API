import { Player } from '../../models/Player';
import { IPlayersRepository, ICreatePlayerDTO } from '../IPlayersRepository';
declare class PlayersRepository implements IPlayersRepository {
    create({ discord_username, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }: ICreatePlayerDTO): Promise<void>;
    list(): Promise<Player[]>;
    findBydiscordUsername(discord_username: string | string[] | undefined): Promise<Player | undefined>;
    updatePlayerInfo({ discord_username, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }: ICreatePlayerDTO): Promise<void>;
}
export { PlayersRepository };
