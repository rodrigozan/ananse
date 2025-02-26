import { BaseService } from './BaseService';
import { ISerie } from '../interfaces/ISerie';
import { Serie } from '../models/SerieModel';

export class SerieService extends BaseService<ISerie> {
    constructor() {
        super(Serie);
    }
}

export const serieServiceInstance = new SerieService();