import { characterServiceInstance } from '../services/CharacterService';
import { BaseController } from './BaseController';
import { ICharacter } from '../interfaces/ICharacter';

class CharacterController extends BaseController<ICharacter> {
    constructor() {
        super(characterServiceInstance);
    }
}

export default new CharacterController();