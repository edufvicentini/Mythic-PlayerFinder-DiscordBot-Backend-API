import { inject, injectable } from 'tsyringe';

import { Character } from '../../models/Character';
import { CharactersRepository } from '../../repositories/implementations/charactersRepository';

interface IRequest {
    discord_username: string | string[] | undefined;
}

@injectable()
class GetCharactersByDiscordUserUseCase {
    constructor(
        @inject('CharactersRepository')
        private charactersRepository: CharactersRepository,
    ) {}

    async execute({ discord_username }: IRequest): Promise<Character[]> {
        const characters =
            await this.charactersRepository.getCharactersByDiscordUser(
                discord_username as string,
            );

        if (characters.length === 0)
            throw new Error('No Characters for this User');

        return characters;
    }
}

export { GetCharactersByDiscordUserUseCase };
