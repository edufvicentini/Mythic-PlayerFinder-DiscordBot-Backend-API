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
exports.PlayersRepository = void 0;
const Player_1 = require("../../models/Player");
const Player_schema_1 = __importDefault(require("../../models/Player.schema"));
class PlayersRepository {
    create({ discord_username, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = new Player_1.Player();
            Object.assign(player, {
                discord_username,
                blizzard_btag,
                objectives,
                days_of_week_availability,
                times_of_day_availability,
            });
            Player_schema_1.default.create(player);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const all = Player_schema_1.default.find();
            return all;
        });
    }
    findBydiscordUsername(discord_username) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield Player_schema_1.default.findOne({
                discord_username,
            });
            return player;
        });
    }
    updatePlayerInfo({ discord_username, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Player_schema_1.default.findOneAndUpdate({ discord_username }, {
                blizzard_btag,
                objectives,
                days_of_week_availability,
                times_of_day_availability,
            });
        });
    }
}
exports.PlayersRepository = PlayersRepository;
