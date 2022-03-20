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
    keystone_dungeon: string;
    keystone_level: number;
}

interface ICharactersRepository {
    create({
        player_id,
        nickname,
        realm,
        main_spec,
    }: ICreateCharacterDTO): Promise<void>;
    list(): Promise<Character[]>;

    findCharacterByNameAndRealm(
        nickname: string,
        realm: string,
    ): Promise<Character | undefined>;
    update({
        player_id,
        nickname,
        realm,
        main_spec,
        keystone_dungeon,
        keystone_level,
    }: IUpdateCharacterDTO): Promise<void>;
    getCharactersByDiscordUserID(discord_userid: string): Promise<Character[]>;

    updateCharacterByRaiderIO(): Promise<void>;

    // UpdateCharacterInfo
    // ListCharacters
    // GetCharactersByDiscordUser
}

export { ICharactersRepository, ICreateCharacterDTO, IUpdateCharacterDTO };
