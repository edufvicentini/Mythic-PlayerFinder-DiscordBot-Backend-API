// dar o try, response, execute

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePlayerUseCase } from './UpdatePlayerUseCase';

class UpdatePlayerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            blizzard_btag,
            objectives,
            days_of_week_availability,
            times_of_day_availability,
        } = request.body;

        const { discord_userid } = request.headers;

        const updatePlayerUseCase = container.resolve(UpdatePlayerUseCase);

        try {
            await updatePlayerUseCase.execute({
                discord_userid,
                blizzard_btag,
                objectives,
                days_of_week_availability,
                times_of_day_availability,
            });

            return response.status(201).send();
        } catch (e) {
            return response.status(500).json({ message: (e as Error).message });
        }
    }
}

export { UpdatePlayerController };
