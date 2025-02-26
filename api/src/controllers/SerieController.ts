import { serieServiceInstance } from '../services/SerieService';
import { BaseController } from './BaseController';
import { ISerie } from '../interfaces/ISerie';

class SerieController extends BaseController<ISerie> {
    constructor() {
        super(serieServiceInstance);
    }
}

export default new SerieController();