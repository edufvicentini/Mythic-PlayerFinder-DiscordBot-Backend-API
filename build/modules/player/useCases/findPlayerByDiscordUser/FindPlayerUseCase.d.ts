import { Player } from '../../models/Player';
import { IPlayersRepository } from '../../repositories/IPlayersRepository';
interface IRequest {
    discord_username: string | string[] | undefined;
}
declare class FindPlayerUseCase {
    private playersRepository;
    constructor(playersRepository: IPlayersRepository);
    execute({ discord_username }: IRequest): Promise<Player>;
}
export { FindPlayerUseCase };
