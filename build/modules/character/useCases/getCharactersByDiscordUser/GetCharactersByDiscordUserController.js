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
exports.GetCharactersByDiscordUserController = void 0;
const tsyringe_1 = require("tsyringe");
const GetCharactersByDiscordUserUseCase_1 = require("./GetCharactersByDiscordUserUseCase");
class GetCharactersByDiscordUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { discord_userid } = req.headers;
            const getCharactersByDiscordUserUseCase = tsyringe_1.container.resolve(GetCharactersByDiscordUserUseCase_1.GetCharactersByDiscordUserUseCase);
            try {
                const characters = yield getCharactersByDiscordUserUseCase.execute({
                    discord_userid,
                });
                return res.status(201).json(characters);
            }
            catch (e) {
                return res.status(500).json({ message: e.message });
            }
        });
    }
}
exports.GetCharactersByDiscordUserController = GetCharactersByDiscordUserController;
