"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
const uuid_1 = require("uuid");
class Character {
    constructor() {
        if (!this._id) {
            this._id = (0, uuid_1.v4)();
        }
        if (!this.created_at) {
            this.created_at = new Date();
        }
    }
}
exports.Character = Character;
