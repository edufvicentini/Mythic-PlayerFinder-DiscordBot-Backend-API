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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlayerController = void 0;
const tsyringe_1 = require("tsyringe");
const CreatePlayerUseCase_1 = require("./CreatePlayerUseCase");
class CreatePlayerController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { discord_username, blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, discord_userid, } = request.body;
            const createPlayerUseCase = tsyringe_1.container.resolve(CreatePlayerUseCase_1.CreatePlayerUseCase);
            try {
                yield createPlayerUseCase.execute({
                    discord_username,
                    discord_userid,
                    blizzard_btag,
                    objectives,
                    days_of_week_availability,
                    times_of_day_availability,
                });
            }
            catch (e) {
                return response.status(500).json({ message: e.message });
            }
            return response.status(201).send();
        });
    }
}
exports.CreatePlayerController = CreatePlayerController;
