import { BaseService } from './BaseService';
import { IScenario } from '../interfaces/IScenario';
import { ScenarioModel } from '../models/ScenarioModel';

export class ScenarioService extends BaseService<IScenario> {
    constructor() {
        super(ScenarioModel);
    }
}

export const scenarioServiceInstance = new ScenarioService();