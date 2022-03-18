"use strict";
// dar o try, response, execute
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
exports.UpdatePlayerController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdatePlayerUseCase_1 = require("./UpdatePlayerUseCase");
class UpdatePlayerController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { blizzard_btag, objectives, days_of_week_availability, times_of_day_availability, } = request.body;
            const { discord_username } = request.headers;
            const updatePlayerUseCase = tsyringe_1.container.resolve(UpdatePlayerUseCase_1.UpdatePlayerUseCase);
            try {
                yield updatePlayerUseCase.execute({
                    discord_username,
                    blizzard_btag,
                    objectives,
                    days_of_week_availability,
                    times_of_day_availability,
                });
                return response.status(201).send();
            }
            catch (e) {
                return response.status(500).json({ message: e.message });
            }
        });
    }
}
exports.UpdatePlayerController = UpdatePlayerController;
