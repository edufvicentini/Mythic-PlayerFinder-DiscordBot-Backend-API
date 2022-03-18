"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateByRaiderIOController = void 0;
const tsyringe_1 = require("tsyringe");
const UpdateByRaiderIOUseCase_1 = require("./UpdateByRaiderIOUseCase");
class UpdateByRaiderIOController {
    handle() {
        const updateByRaiderIOUseCase = tsyringe_1.container.resolve(UpdateByRaiderIOUseCase_1.UpdateByRaiderIOUseCase);
        updateByRaiderIOUseCase.execute();
    }
}
exports.UpdateByRaiderIOController = UpdateByRaiderIOController;
