"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const charactersRepository_1 = require("../../modules/character/repositories/implementations/charactersRepository");
const PlayersRepository_1 = require("../../modules/player/repositories/implementations/PlayersRepository");
// ICategoriesRepository
tsyringe_1.container.registerSingleton('PlayersRepository', PlayersRepository_1.PlayersRepository);
tsyringe_1.container.registerSingleton('CharactersRepository', charactersRepository_1.CharactersRepository);
