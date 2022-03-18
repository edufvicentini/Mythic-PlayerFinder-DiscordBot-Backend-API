import { ICharactersRepository } from '../../repositories/ICharactersRepository';
interface IRequest {
    player_id: string | string[] | undefined;
    nickname: string;
    realm: string;
    main_spec: string;
}
declare class CreateCharacterUseCase {
    private charactersRepository;
    constructor(charactersRepository: ICharactersRepository);
    execute({ player_id, nickname, realm, main_spec, }: IRequest): Promise<void>;
}
export { CreateCharacterUseCase };
