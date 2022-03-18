import { CharactersRepository } from '../../repositories/implementations/charactersRepository';
declare class UpdateByRaiderIOUseCase {
    private charactersRepository;
    constructor(charactersRepository: CharactersRepository);
    execute(): Promise<void>;
}
export { UpdateByRaiderIOUseCase };
