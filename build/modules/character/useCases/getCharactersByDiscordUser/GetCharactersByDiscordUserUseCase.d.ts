import { Character } from '../../models/Character';
import { CharactersRepository } from '../../repositories/implementations/charactersRepository';
interface IRequest {
    discord_userid: string | string[] | undefined;
}
declare class GetCharactersByDiscordUserUseCase {
    private charactersRepository;
    constructor(charactersRepository: CharactersRepository);
    execute({ discord_userid }: IRequest): Promise<Character[]>;
}
export { GetCharactersByDiscordUserUseCase };
