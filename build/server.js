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
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const yamljs_1 = __importDefault(require("yamljs"));
const database_1 = require("./database");
require("./shared/container");
const UpdateByRaiderIOController_1 = require("./modules/character/useCases/updateCharacterByRaiderIO/UpdateByRaiderIOController");
const routes_1 = require("./routes");
const swaggerFile = yamljs_1.default.load(path_1.default.resolve(__dirname, 'swagger.yaml'));
const app = (0, express_1.default)();
const updateByRaiderIO = new UpdateByRaiderIOController_1.UpdateByRaiderIOController();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, database_1.MongoDBConnect)();
        updateByRaiderIO.handle();
        app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerFile, {
            customCss: '.swagger-ui .topbar { display: none}',
        }));
        app.use(routes_1.router);
        app.listen(process.env.PORT || 3333);
    });
}
connect();
