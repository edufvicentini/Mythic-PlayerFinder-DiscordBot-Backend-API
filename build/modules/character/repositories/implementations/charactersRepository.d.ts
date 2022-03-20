import { Character } from '../../models/Character';
import { ICharactersRepository, ICreateCharacterDTO, IUpdateCharacterDTO } from '../ICharactersRepository';
declare class CharactersRepository implements ICharactersRepository {
    create({ player_id, nickname, realm, main_spec, }: ICreateCharacterDTO): Promise<void>;
    list(): Promise<Character[]>;
    findCharacterByNameAndRealm(nickname: string, realm: string): Promise<Character | undefined>;
    update({ player_id, nickname, realm, main_spec, keystone_dungeon, keystone_level, }: IUpdateCharacterDTO): Promise<void>;
    getCharactersByDiscordUser(discord_username: string): Promise<Character[]>;
    updateCharacterByRaiderIO(): Promise<void>;
}
export { CharactersRepository };
