"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersRepository = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const Player_schema_1 = __importDefault(require("../../../player/models/Player.schema"));
const Character_1 = require("../../models/Character");
const Character_schema_1 = __importDefault(require("../../models/Character.schema"));
class CharactersRepository {
    create({ player_id, nickname, realm, main_spec, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = new Character_1.Character();
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/JSON',
                },
            };
            const url = `https://raider.io/api/v1/characters/profile?region=us&realm=${realm.toLowerCase()}&name=${nickname.toLowerCase()}&fields=mythic_plus_scores_by_season%3Acurrent%2Cgear%2Ccovenant`;
            let characterData = {};
            yield (0, node_fetch_1.default)(url, options)
                .then(function checkResponse(response) {
                if (response.status !== 400)
                    return response.json();
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
                    mythic_plus_score_tank_current: data.mythic_plus_scores_by_season[0].scores.tank,
                    mythic_plus_score_dps_current: data.mythic_plus_scores_by_season[0].scores.dps,
                    mythic_plus_score_healer_current: data.mythic_plus_scores_by_season[0].scores.healer,
                    raiderio_profile_link: data.profile_url,
                    updated_at: new Date(),
                };
            });
            Object.assign(character, { player_id, main_spec });
            Object.assign(character, characterData);
            Character_schema_1.default.create(character);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const all = Character_schema_1.default.find();
            return all;
        });
    }
    findCharacterByNameAndRealm(nickname, realm) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = yield Character_schema_1.default.findOne({ nickname, realm });
            return character;
        });
    }
    update({ player_id, nickname, realm, main_spec, keystone_dungeon, keystone_level, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const character = (yield Character_schema_1.default.findOne({
                nickname,
                realm,
            }));
            if (character.player_id !== player_id)
                throw new Error('This character do not belong to this player.');
            yield Character_schema_1.default.updateOne({ player_id, nickname, realm }, {
                main_spec,
                keystone_dungeon,
                keystone_level,
                updated_at: new Date(),
            });
        });
    }
    getCharactersByDiscordUser(discord_username) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = (yield Player_schema_1.default.findOne({
                discord_username,
            }));
            const characters = yield Character_schema_1.default.find({
                player_id: player === null || player === void 0 ? void 0 : player._id,
            });
            return characters;
        });
    }
    updateCharacterByRaiderIO() {
        return __awaiter(this, void 0, void 0, function* () {
            const characters = [];
            yield Character_schema_1.default.find().then(function jsonToArray(text) {
                Object.keys(text).map(t => characters.push(text[Number(t)]._id));
            });
            characters.map(function update(characterID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const updatedCharacter = yield Character_schema_1.default.findById(characterID);
                    const options = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/JSON',
                        },
                    };
                    const url = `https://raider.io/api/v1/characters/profile?region=us&realm=${updatedCharacter.realm.toLowerCase()}&name=${updatedCharacter.nickname.toLowerCase()}&fields=mythic_plus_scores_by_season%3Acurrent%2Cgear%2Ccovenant`;
                    let characterData = {};
                    yield (0, node_fetch_1.default)(url, options)
                        .then(function checkResponse(response) {
                        if (response.status !== 500)
                            return response.json();
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
                            mythic_plus_score_tank_current: data.mythic_plus_scores_by_season[0].scores.tank,
                            mythic_plus_score_dps_current: data.mythic_plus_scores_by_season[0].scores.dps,
                            mythic_plus_score_healer_current: data.mythic_plus_scores_by_season[0].scores.healer,
                            raiderio_profile_link: data.profile_url,
                            updated_at: new Date(),
                        };
                    });
                    yield Character_schema_1.default.findByIdAndUpdate(characterID, characterData);
                });
            });
        });
    }
}
exports.CharactersRepository = CharactersRepository;
