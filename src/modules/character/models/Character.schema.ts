import { Schema, model } from 'mongoose';

const characterSchema = new Schema({
    _id: String,
    player_id: String,
    nickname: String,
    realm: String,
    class: String,
    main_spec: String,
    active_spec: String,
    gear_iLvl: Number,
    covenant: String,
    keystone_dungeon: String,
    keystone_level: Number,
    mythic_plus_score_tank_current: Number,
    mythic_plus_score_dps_current: Number,
    mythic_plus_score_healer_current: Number,
    raiderio_profile_link: String,
    created_at: Date,
    updated_at: Date,
});

const CharacterModel = model('character', characterSchema);

export default CharacterModel;
