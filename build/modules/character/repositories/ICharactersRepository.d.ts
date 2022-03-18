import { Character } from '../models/Character';
interface ICreateCharacterDTO {
    player_id: string | string[] | undefined;
    nickname: string;
    realm: string;
    main_spec: string;
}
interface IUpdateCharacterDTO {
    player_id: string | string[] | undefined;
    nickname: string;
    realm: string;
    main_spec: string;
}
interface ICharactersRepository {
    create({ player_id, nickname, realm, main_spec, }: ICreateCharacterDTO): Promise<void>;
    list(): Promise<Character[]>;
    findCharacterByNameAndRealm(nickname: string, realm: string): Promise<Character | undefined>;
    update({ player_id, nickname, realm, main_spec, }: IUpdateCharacterDTO): Promise<void>;
    getCharactersByDiscordUser(discord_username: string): Promise<Character[]>;
    updateCharacterByRaiderIO(): Promise<void>;
}
export { ICharactersRepository, ICreateCharacterDTO, IUpdateCharacterDTO };