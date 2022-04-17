import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindPlayerUseCase } from './FindPlayerUseCase';

class FindPlayerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { discord_userid } = request.headers;

        const findPlayerUseCase = container.resolve(FindPlayerUseCase);

        try {
            const player = await findPlayerUseCase.execute({
                discord_userid,
            });
            return response.status(200).json(player);
        } catch (e) {
            return response.status(500).json({ message: (e as Error).message });
        }
    }
}

export { FindPlayerController };
