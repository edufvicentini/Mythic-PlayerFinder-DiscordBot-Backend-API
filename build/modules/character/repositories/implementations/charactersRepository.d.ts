import { Character } from '../../models/Character';
import { ICharactersRepository, ICreateCharacterDTO, IUpdateCharacterDTO } from '../ICharactersRepository';
declare class CharactersRepository implements ICharactersRepository {
    create({ player_id, nickname, realm, main_spec, }: ICreateCharacterDTO): Promise<void>;
    list(): Promise<Character[]>;
    findCharacterByNameAndRealm(nickname: string): Promise<Character | undefined>;
    update({ nickname, keystone_dungeon, keystone_level, }: IUpdateCharacterDTO): Promise<void>;
    getCharactersByDiscordUserID(discord_userid: string): Promise<Character[]>;
    updateCharacterByRaiderIO(): Promise<void>;
}
export { CharactersRepository };
