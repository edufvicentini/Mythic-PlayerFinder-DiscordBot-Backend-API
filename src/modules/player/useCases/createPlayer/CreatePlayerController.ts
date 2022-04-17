import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreatePlayerUseCase } from './CreatePlayerUseCase';

class CreatePlayerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            discord_username,
            blizzard_btag,
            objectives,
            days_of_week_availability,
            times_of_day_availability,
            discord_userid,
        } = request.body;

        const createPlayerUseCase = container.resolve(CreatePlayerUseCase);

        try {
            await createPlayerUseCase.execute({
                discord_username,
                discord_userid,
                blizzard_btag,
                objectives,
                days_of_week_availability,
                times_of_day_availability,
            });
        } catch (e) {
            return response.status(500).json({ message: (e as Error).message });
        }
        return response.status(201).send();
    }
}

export { CreatePlayerController };
