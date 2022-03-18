import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetCharactersByDiscordUserUseCase } from './GetCharactersByDiscordUserUseCase';

class GetCharactersByDiscordUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { discord_username } = req.headers;

        const getCharactersByDiscordUserUseCase = container.resolve(
            GetCharactersByDiscordUserUseCase,
        );
        try {
            const characters = await getCharactersByDiscordUserUseCase.execute({
                discord_username,
            });
            return res.status(201).json(characters);
        } catch (e) {
            return res.status(500).json({ message: (e as Error).message });
        }
    }
}

export { GetCharactersByDiscordUserController };
