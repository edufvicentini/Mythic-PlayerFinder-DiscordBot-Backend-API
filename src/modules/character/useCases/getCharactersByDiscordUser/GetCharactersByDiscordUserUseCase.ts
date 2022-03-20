import { inject, injectable } from 'tsyringe';

import { Character } from '../../models/Character';
import { CharactersRepository } from '../../repositories/implementations/charactersRepository';

interface IRequest {
    discord_userid: string | string[] | undefined;
}

@injectable()
class GetCharactersByDiscordUserUseCase {
    constructor(
        @inject('CharactersRepository')
        private charactersRepository: CharactersRepository,
    ) {}

    async execute({ discord_userid }: IRequest): Promise<Character[]> {
        const characters =
            await this.charactersRepository.getCharactersByDiscordUserID(
                discord_userid as string,
            );

        if (characters.length === 0)
            throw new Error('No Characters for this User');

        return characters;
    }
}

export { GetCharactersByDiscordUserUseCase };
