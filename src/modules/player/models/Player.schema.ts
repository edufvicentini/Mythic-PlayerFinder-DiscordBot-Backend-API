import { Schema, model } from 'mongoose';

const playerSchema = new Schema({
    _id: String,
    discord_username: String,
    blizzard_btag: String,
    objectives: String,
    days_of_week_availability: String,
    times_of_day_availability: String,
    created_at: Date,
});

const PlayerModel = model('player', playerSchema);

export default PlayerModel;
