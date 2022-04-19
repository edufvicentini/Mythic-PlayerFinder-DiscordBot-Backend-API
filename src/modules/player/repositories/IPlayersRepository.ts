import { Player } from '../models/Player';

interface ICreatePlayerDTO {
    discord_username: string | string[] | undefined;
    discord_userid: string | string[] | undefined;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
}

interface IUpdatePlayerDTO {
    discord_userid: string | string[] | undefined;
    blizzard_btag: string;
    objectives: string;
    days_of_week_availability: string;
    times_of_day_availability: string;
}

interface IPlayersRepository {
    findByDiscordUserID(
        discord_userid: string | string[] | undefined,
    ): Promise<Player | undefined>;
    list(): Promise<Player[]>;
    create({
        discord_username,
        discord_userid,
        blizzard_btag,
        objectives,
        days_of_week_availability,
        times_of_day_availability,
    }: ICreatePlayerDTO): Promise<void>;
    updatePlayerInfo({
        discord_userid,
        blizzard_btag,
        objectives,
        days_of_week_availability,
        times_of_day_availability,
    }: IUpdatePlayerDTO): Promise<void>;
}

export { IPlayersRepository, ICreatePlayerDTO, IUpdatePlayerDTO };
