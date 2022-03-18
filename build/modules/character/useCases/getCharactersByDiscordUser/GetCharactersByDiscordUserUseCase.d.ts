import { Character } from '../../models/Character';
import { CharactersRepository } from '../../repositories/implementations/charactersRepository';
interface IRequest {
    discord_username: string | string[] | undefined;
}
declare class GetCharactersByDiscordUserUseCase {
    private charactersRepository;
    constructor(charactersRepository: CharactersRepository);
    execute({ discord_username }: IRequest): Promise<Character[]>;
}
export { GetCharactersByDiscordUserUseCase };
