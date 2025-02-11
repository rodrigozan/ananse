import { scenarioServiceInstance } from '../services/ScenarioService';
import { BaseController } from './BaseController';
import { IScenario } from '../interfaces/IScenario';

class ScenarioController extends BaseController<IScenario> {
    constructor() {
        super(scenarioServiceInstance);
    }
}

export default new ScenarioController();