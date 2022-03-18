import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPlayersUseCase } from './listPlayersUseCase';

class ListPlayersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listPlayerUseCase = container.resolve(ListPlayersUseCase);

        const players = await listPlayerUseCase.execute();

        return response.status(201).json(players);
    }
}

export { ListPlayersController };
