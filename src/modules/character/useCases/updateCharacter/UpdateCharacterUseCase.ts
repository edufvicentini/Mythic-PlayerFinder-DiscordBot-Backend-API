// Interface IRequest

import { inject, injectable } from 'tsyringe';

import { ICharactersRepository } from '../../repositories/ICharactersRepository';

// Class __UseCase constructor inject character repository

interface IRequest {
    nickname: string;
    keystone_dungeon: string;
    keystone_level: number;
}

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

@injectable()
class UpdateCharacterUseCase {
    constructor(
        @inject('CharactersRepository')
        private charactersRepository: ICharactersRepository,
    ) {}

    async execute({
        nickname,
        keystone_dungeon,
        keystone_level,
    }: IRequest): Promise<void> {
        const characterAlreadyExists =
            await this.charactersRepository.findCharacterByNameAndRealm(
                capitalizeFirstLetter(nickname),
            );

        if (!characterAlreadyExists) throw new Error('Character not found!');

        await this.charactersRepository.update({
            nickname,
            keystone_dungeon,
            keystone_level,
        });
    }
}

export { UpdateCharacterUseCase };
