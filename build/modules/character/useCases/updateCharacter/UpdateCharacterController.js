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
exports.UpdateCharacterController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateCharacterUseCase_1 = require("./UpdateCharacterUseCase");
class UpdateCharacterController {
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nickname, realm, main_spec } = request.body;
            const { player_id } = request.headers;
            const updateCharacterUseCase = tsyringe_1.container.resolve(UpdateCharacterUseCase_1.UpdateCharacterUseCase);
            try {
                const character = yield updateCharacterUseCase.execute({
                    nickname,
                    realm,
                    main_spec,
                    player_id,
                });
                return response.status(201).json(character);
            }
            catch (e) {
                return response.status(500).json({ message: e.message });
            }
        });
    }
}
exports.UpdateCharacterController = UpdateCharacterController;
