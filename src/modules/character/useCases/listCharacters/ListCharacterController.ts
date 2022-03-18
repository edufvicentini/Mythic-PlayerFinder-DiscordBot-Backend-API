import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCharactersUseCase } from './ListCharactersUseCase';

class ListCharactersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCharactersUseCase = container.resolve(ListCharactersUseCase);

        try {
            const all = await listCharactersUseCase.execute();
            return res.status(201).json(all);
        } catch (e) {
            return res.status(500).json({ messsage: (e as Error).message });
        }
    }
}

export { ListCharactersController };
