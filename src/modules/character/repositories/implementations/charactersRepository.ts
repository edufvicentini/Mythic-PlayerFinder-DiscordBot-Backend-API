import fetch from 'node-fetch';

import { Player } from '../../../player/models/Player';
import PlayerModel from '../../../player/models/Player.schema';
import { Character } from '../../models/Character';
import CharacterModel from '../../models/Character.schema';
import {
    ICharactersRepository,
    ICreateCharacterDTO,
    IUpdateCharacterDTO,
} from '../ICharactersRepository';

interface ICharacterData {
    nickname: string;
    realm: string;
    class: string;
    active_spec: string;
    gear_iLvl: number;
    covenant: string;
    mythic_plus_score_tank_current: number;
    mythic_plus_score_dps_current: number;
    mythic_plus_score_healer_current: number;
    raiderio_profile_link: string;
    updated_at: Date;
}

class CharactersRepository implements ICharactersRepository {
    async create({
        player_id,
        nickname,
        realm,
        main_spec,
    }: ICreateCharacterDTO): Promise<void> {
        const character = new Character();

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/JSON',
            },
        };

        const url = `https://raider.io/api/v1/characters/profile?region=us&realm=${realm.toLowerCase()}&name=${nickname.toLowerCase()}&fields=mythic_plus_scores_by_season%3Acurrent%2Cgear%2Ccovenant`;

        let characterData: ICharacterData = {} as ICharacterData;

        await fetch(url, options)
            .then(function checkResponse(response) {
                if (response.status !== 400) return response.json();
                throw new Error('Character not Found!');
            })
            .catch(error => console.log(error))
            .then(data => {
                characterData = {
                    nickname: data.name,
                    realm: data.realm,
                    class: data.class,
                    active_spec: data.active_spec_name,
                    gear_iLvl: data.gear.item_level_equipped,
                    covenant: data.covenant.name,
                    mythic_plus_score_tank_current:
                        data.mythic_plus_scores_by_season[0].scores.tank,
                    mythic_plus_score_dps_current:
                        data.mythic_plus_scores_by_season[0].scores.dps,
                    mythic_plus_score_healer_current:
                        data.mythic_plus_scores_by_season[0].scores.healer,
                    raiderio_profile_link: data.profile_url,
                    updated_at: new Date(),
                };
            });

        Object.assign(character, { player_id, main_spec });
        Object.assign(character, characterData);

        CharacterModel.create(character);
    }
    async list(): Promise<Character[]> {
        const all = CharacterModel.find();

        return all;
    }

    async findCharacterByNameAndRealm(
        nickname: string,
        realm: string,
    ): Promise<Character | undefined> {
        const character = await CharacterModel.findOne({ nickname, realm });

        return character;
    }
    async update({
        player_id,
        nickname,
        realm,
        main_spec,
        keystone_dungeon,
        keystone_level,
    }: IUpdateCharacterDTO): Promise<void> {
        const character: Character = (await CharacterModel.findOne({
            nickname,
            realm,
        })) as Character;

        if (character.player_id !== player_id)
            throw new Error('This character do not belong to this player.');

        await CharacterModel.updateOne(
            { player_id, nickname, realm },
            {
                main_spec,
                keystone_dungeon,
                keystone_level,
                updated_at: new Date(),
            },
        );
    }
    async getCharactersByDiscordUserID(
        discord_userid: string,
    ): Promise<Character[]> {
        const player: Player = (await PlayerModel.findOne({
            discord_userid,
        })) as Player;

        const characters: Character[] = await CharacterModel.find({
            player_id: player?._id,
        });

        return characters;
    }

    async updateCharacterByRaiderIO(): Promise<void> {
        const characters: Character[] = [];
        await CharacterModel.find().then(function jsonToArray(text) {
            Object.keys(text).map(t => characters.push(text[Number(t)]._id));
        });
        characters.map(async function update(characterID) {
            const updatedCharacter = await CharacterModel.findById(characterID);
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/JSON',
                },
            };
            const url = `https://raider.io/api/v1/characters/profile?region=us&realm=${updatedCharacter.realm.toLowerCase()}&name=${updatedCharacter.nickname.toLowerCase()}&fields=mythic_plus_scores_by_season%3Acurrent%2Cgear%2Ccovenant`;
            let characterData: ICharacterData = {} as ICharacterData;
            await fetch(url, options)
                .then(function checkResponse(response) {
                    if (response.status !== 500) return response.json();
                    throw new Error('Character not Found!');
                })
                .catch(error => console.log(error))
                .then(data => {
                    characterData = {
                        nickname: data.name,
                        realm: data.realm,
                        class: data.class,
                        active_spec: data.active_spec_name,
                        gear_iLvl: data.gear.item_level_equipped,
                        covenant: data.covenant.name,
                        mythic_plus_score_tank_current:
                            data.mythic_plus_scores_by_season[0].scores.tank,
                        mythic_plus_score_dps_current:
                            data.mythic_plus_scores_by_season[0].scores.dps,
                        mythic_plus_score_healer_current:
                            data.mythic_plus_scores_by_season[0].scores.healer,
                        raiderio_profile_link: data.profile_url,
                        updated_at: new Date(),
                    };
                });
            await CharacterModel.findByIdAndUpdate(characterID, characterData);
        });
    }
}

export { CharactersRepository };
