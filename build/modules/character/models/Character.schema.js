"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const characterSchema = new mongoose_1.Schema({
    _id: String,
    player_id: String,
    nickname: String,
    realm: String,
    class: String,
    main_spec: String,
    active_spec: String,
    gear_iLvl: Number,
    covenant: String,
    mythic_plus_score_tank_current: Number,
    mythic_plus_score_dps_current: Number,
    mythic_plus_score_healer_current: Number,
    raiderio_profile_link: String,
    created_at: Date,
    updated_at: Date,
});
const CharacterModel = (0, mongoose_1.model)('character', characterSchema);
exports.default = CharacterModel;
