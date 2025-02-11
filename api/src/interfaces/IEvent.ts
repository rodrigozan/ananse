import { Document } from 'mongoose';

export interface IEvent extends Document {
    name: string;
    date: string;
    description: string;
    significance: string;
    participants: {
        name: string;
        role: string;
        description: string;
    }[];
    outcomes: {
        description: string;
        impact: string;
    }[];
    location: {
        name: string;
        description: string;
        coordinates: {
            latitude: number;
            longitude: number;
        };
    };
}