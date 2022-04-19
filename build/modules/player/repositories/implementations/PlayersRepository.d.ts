import { Player } from '../../models/Player';
import { IPlayersRepository, ICreatePlayerDTO, IUpdatePlayerDTO } from '../IPlayersRepository';
declare class PlayersRepository implements IPlayersRepository {
    create({ discord_username, discord_userid, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }: ICreatePlayerDTO): Promise<void>;
    list(): Promise<Player[]>;
    findByDiscordUserID(discord_userid: string | string[] | undefined): Promise<Player | undefined>;
    updatePlayerInfo({ discord_userid, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }: IUpdatePlayerDTO): Promise<void>;
}
export { PlayersRepository };
