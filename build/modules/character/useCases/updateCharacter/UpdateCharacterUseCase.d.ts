import { ICharactersRepository } from '../../repositories/ICharactersRepository';
interface IRequest {
    player_id: string | string[] | undefined;
    nickname: string;
    realm: string;
    main_spec: string;
    keystone_dungeon: string;
    keystone_level: number;
}
declare class UpdateCharacterUseCase {
    private charactersRepository;
    constructor(charactersRepository: ICharactersRepository);
    execute({ player_id, nickname, realm, main_spec, keystone_dungeon, keystone_level, }: IRequest): Promise<void>;
}
export { UpdateCharacterUseCase };
