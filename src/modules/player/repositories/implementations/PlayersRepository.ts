import { Player } from '../../models/Player';
import PlayerModel from '../../models/Player.schema';
import { IPlayersRepository, ICreatePlayerDTO } from '../IPlayersRepository';

class PlayersRepository implements IPlayersRepository {
    async create({
        discord_username,
        blizzard_btag,
        objectives,
        days_of_week_availability,
        times_of_day_availability,
    }: ICreatePlayerDTO): Promise<void> {
        const player = new Player();

        Object.assign(player, {
            discord_username,
            blizzard_btag,
            objectives,
            days_of_week_availability,
            times_of_day_availability,
        });

        PlayerModel.create(player);
    }

    async list(): Promise<Player[]> {
        const all = PlayerModel.find();

        return all;
    }

    async findBydiscordUsername(
        discord_username: string | string[] | undefined,
    ): Promise<Player | undefined> {
        const player = await PlayerModel.findOne({
            discord_username,
        });

        return player;
    }

    async updatePlayerInfo({
        discord_username,
        blizzard_btag,
        objectives,
        days_of_week_availability,
        times_of_day_availability,
    }: ICreatePlayerDTO): Promise<void> {
        await PlayerModel.findOneAndUpdate(
            { discord_username },
            {
                blizzard_btag,
                objectives,
                days_of_week_availability,
                times_of_day_availability,
            },
        );
    }
}

export { PlayersRepository };
