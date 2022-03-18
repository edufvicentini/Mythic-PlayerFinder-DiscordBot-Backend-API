import { Player } from '../../models/Player';
import { IPlayersRepository } from '../../repositories/IPlayersRepository';
interface IRequest {
    discord_userid: string | string[] | undefined;
}
declare class FindPlayerUseCase {
    private playersRepository;
    constructor(playersRepository: IPlayersRepository);
    execute({ discord_userid }: IRequest): Promise<Player>;
}
export { FindPlayerUseCase };
