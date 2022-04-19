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
exports.FindPlayerController = void 0;
const tsyringe_1 = require("tsyringe");
const FindPlayerUseCase_1 = require("./FindPlayerUseCase");
class FindPlayerController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { discord_userid } = request.headers;
            const findPlayerUseCase = tsyringe_1.container.resolve(FindPlayerUseCase_1.FindPlayerUseCase);
            try {
                const player = yield findPlayerUseCase.execute({
                    discord_userid,
                });
                return response.status(200).json(player);
            }
            catch (e) {
                return response.status(500).json({ message: e.message });
            }
        });
    }
}
exports.FindPlayerController = FindPlayerController;
