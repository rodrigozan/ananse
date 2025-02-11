import { BaseService } from './BaseService';
import { ISerie } from 'src/interfaces/ISerie';
import { Serie } from 'src/models/SerieModel';

export class SerieService extends BaseService<ISerie> {
    constructor() {
        super(Serie);
    }
}

export const serieServiceInstance = new SerieService();