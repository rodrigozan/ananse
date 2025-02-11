import { Document } from 'mongoose';

export interface IScenario extends Document {
    title: string;
    description: string;
    setting: {
        location: string;
        timePeriod: string;
        environment: string;
    };
    plot: {
        summary: string;
        keyEvents: {
            name: string;
            description: string;
            outcome: string;
        }[];
    };
    characters: {
        name: string;
        role: string;
        description: string;
    }[];
    objectives: {
        primary: string;
        secondary: string[];
    };
    challenges: {
        name: string;
        description: string;
        difficulty: string;
    }[];
    rewards: {
        name: string;
        description: string;
        value: string;
    }[];
}