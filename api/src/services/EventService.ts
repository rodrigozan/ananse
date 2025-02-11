import { BaseService } from './BaseService';
import { IEvent } from '../interfaces/IEvent';
import { EventModel } from '../models/EventModel';

export class EventService extends BaseService<IEvent> {
    constructor() {
        super(EventModel);
    }
}

export const eventServiceInstance = new EventService();