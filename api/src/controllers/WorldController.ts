import { worldServiceInstance } from '../services/WorldService';
import { BaseController } from './BaseController';
import { IWorld } from '../interfaces/IWorld';

class WorldController extends BaseController<IWorld> {
    constructor() {
        super(worldServiceInstance);
    }
}

export default new WorldController();