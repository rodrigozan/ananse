import { BaseService } from './BaseService';
import { IWorld } from '../interfaces/IWorld';
import { WorldModel } from '../models/WorldModel';

export class WorldService extends BaseService<IWorld> {
    constructor() {
        super(WorldModel);
    }
}

export const worldServiceInstance = new WorldService();