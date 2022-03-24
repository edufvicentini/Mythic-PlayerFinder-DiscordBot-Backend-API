import { Character } from '../models/Character';
interface ICreateCharacterDTO {
    player_id: string | string[] | undefined;
    nickname: string;
    realm: string;
    main_spec: string;
}
interface IUpdateCharacterDTO {
    nickname: string;
    keystone_dungeon: string;
    keystone_level: number;
}
interface ICharactersRepository {
    create({ player_id, nickname, realm, main_spec, }: ICreateCharacterDTO): Promise<void>;
    list(): Promise<Character[]>;
    findCharacterByNameAndRealm(nickname: string): Promise<Character | undefined>;
    update({ nickname, keystone_dungeon, keystone_level, }: IUpdateCharacterDTO): Promise<void>;
    getCharactersByDiscordUserID(discord_userid: string): Promise<Character[]>;
    updateCharacterByRaiderIO(): Promise<void>;
}
export { ICharactersRepository, ICreateCharacterDTO, IUpdateCharacterDTO };
