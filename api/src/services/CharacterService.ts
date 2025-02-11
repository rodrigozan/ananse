import { BaseService } from './BaseService';
import { ICharacter } from '../interfaces/ICharacter';
import { CharacterModel } from '../models/CharacterModel';

export class CharacterService extends BaseService<ICharacter> {
    constructor() {
        super(CharacterModel);
    }
}

export const characterServiceInstance = new CharacterService();