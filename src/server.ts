import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import { MongoDBConnect } from './database';
import './shared/container';
import { UpdateByRaiderIOController } from './modules/character/useCases/updateCharacterByRaiderIO/UpdateByRaiderIOController';
import { router } from './routes';

const swaggerFile = YAML.load(path.resolve(__dirname, 'swagger.yaml'));
const app = express();
const updateByRaiderIO = new UpdateByRaiderIOController();

app.use(express.json());

app.use(cors());

async function connect() {
    MongoDBConnect();
    updateByRaiderIO.handle();
    app.use(
        '/api-docs',
        swaggerUi.serve,
        swaggerUi.setup(swaggerFile, {
            customCss: '.swagger-ui .topbar { display: none}',
        }),
    );

    app.use(router);

    app.listen(process.env.PORT || 3333);
}

connect();
