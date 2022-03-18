"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const playerSchema = new mongoose_1.Schema({
    _id: String,
    discord_username: String,
    blizzard_btag: String,
    objectives: String,
    days_of_week_availability: String,
    times_of_day_availability: String,
    created_at: Date,
});
const PlayerModel = (0, mongoose_1.model)('player', playerSchema);
exports.default = PlayerModel;
