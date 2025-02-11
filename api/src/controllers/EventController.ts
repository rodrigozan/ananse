import { eventServiceInstance } from '../services/EventService';
import { BaseController } from './BaseController';
import { IEvent } from '../interfaces/IEvent';

class EventController extends BaseController<IEvent> {
    constructor() {
        super(eventServiceInstance);
    }
}

export default new EventController();