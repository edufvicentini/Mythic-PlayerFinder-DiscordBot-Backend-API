import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCharacterUseCase } from './UpdateCharacterUseCase';

class UpdateCharacterController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { nickname, realm, main_spec } = request.body;
        const { player_id } = request.headers;
        const updateCharacterUseCase = container.resolve(
            UpdateCharacterUseCase,
        );

        try {
            const character = await updateCharacterUseCase.execute({
                nickname,
                realm,
                main_spec,
                player_id,
            });

            return response.status(201).json(character);
        } catch (e) {
            return response.status(500).json({ message: (e as Error).message });
        }
    }
}

export { UpdateCharacterController };