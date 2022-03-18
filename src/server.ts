import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';

import { MongoDBConnect } from './database';
import './shared/container';
import { UpdateByRaiderIOController } from './modules/character/useCases/updateCharacterByRaiderIO/UpdateByRaiderIOController';
import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();
const updateByRaiderIO = new UpdateByRaiderIOController();

app.use(express.json());

app.use(cors());

async function connect() {
    MongoDBConnect();
    updateByRaiderIO.handle();
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(router);

    app.listen(process.env.PORT || 3333);
}

connect();
