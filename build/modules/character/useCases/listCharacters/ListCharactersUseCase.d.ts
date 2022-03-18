import { Character } from '../../models/Character';
import { CharactersRepository } from '../../repositories/implementations/charactersRepository';
declare class ListCharactersUseCase {
    private charactersRepository;
    constructor(charactersRepository: CharactersRepository);
    execute(): Promise<Character[]>;
}
export { ListCharactersUseCase };
