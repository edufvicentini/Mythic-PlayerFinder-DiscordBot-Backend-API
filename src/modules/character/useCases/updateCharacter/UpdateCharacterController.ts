import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCharacterUseCase } from './UpdateCharacterUseCase';

class UpdateCharacterController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nickname, keystone_dungeon, keystone_level } = request.body;
        const updateCharacterUseCase = container.resolve(
            UpdateCharacterUseCase,
        );

        try {
            const character = await updateCharacterUseCase.execute({
                nickname,
                keystone_dungeon,
                keystone_level,
            });

            return response.status(201).json(character);
        } catch (e) {
            return response.status(500).json({ message: (e as Error).message });
        }
    }
}

export { UpdateCharacterController };
