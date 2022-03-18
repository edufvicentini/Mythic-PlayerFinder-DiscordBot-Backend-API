import { container } from 'tsyringe';

import { UpdateByRaiderIOUseCase } from './UpdateByRaiderIOUseCase';

class UpdateByRaiderIOController {
    handle() {
        const updateByRaiderIOUseCase = container.resolve(
            UpdateByRaiderIOUseCase,
        );
        updateByRaiderIOUseCase.execute();
    }
}

export { UpdateByRaiderIOController };
