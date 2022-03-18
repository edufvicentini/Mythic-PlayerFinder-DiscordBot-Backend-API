import { inject, injectable } from 'tsyringe';

import { CharactersRepository } from '../../repositories/implementations/charactersRepository';

@injectable()
class UpdateByRaiderIOUseCase {
    constructor(
        @inject('CharactersRepository')
        private charactersRepository: CharactersRepository,
    ) {}

    async execute() {
        await this.charactersRepository.updateCharacterByRaiderIO();
        setInterval(
            this.charactersRepository.updateCharacterByRaiderIO,
            10 * 60000,
        );
    }
}

export { UpdateByRaiderIOUseCase };
