import { Schema, model } from 'mongoose';
import { IEvent } from '../interfaces/IEvent';

const EventSchema = new Schema<IEvent>({
    name: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    significance: { type: String, required: true },
    participants: [{
        name: { type: String, required: true },
        role: { type: String, required: true },
        description: { type: String, required: true }
    }],
    outcomes: [{
        description: { type: String, required: true },
        impact: { type: String, required: true }
    }],
    location: {
        name: { type: String, required: true },
        description: { type: String, required: true },
        coordinates: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true }
        }
    }
});

export const EventModel = model<IEvent>('Event', EventSchema);