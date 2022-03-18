import { inject, injectable } from 'tsyringe';

import { Character } from '../../models/Character';
import { CharactersRepository } from '../../repositories/implementations/charactersRepository';

@injectable()
class ListCharactersUseCase {
    constructor(
        @inject('CharactersRepository')
        private charactersRepository: CharactersRepository,
    ) {}

    async execute(): Promise<Character[]> {
        const all = await this.charactersRepository.list();

        return all;
    }
}

export { ListCharactersUseCase };
