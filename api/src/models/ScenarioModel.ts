import { Schema, model } from 'mongoose';
import { IScenario } from '../interfaces/IScenario';

const ScenarioSchema = new Schema<IScenario>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    setting: {
        location: { type: String, required: true },
        timePeriod: { type: String, required: true },
        environment: { type: String, required: true }
    },
    plot: {
        summary: { type: String, required: true },
        keyEvents: [{
            name: { type: String, required: true },
            description: { type: String, required: true },
            outcome: { type: String, required: true }
        }]
    },
    characters: [{
        name: { type: String, required: true },
        role: { type: String, required: true },
        description: { type: String, required: true }
    }],
    objectives: {
        primary: { type: String, required: true },
        secondary: [{ type: String, required: true }]
    },
    challenges: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        difficulty: { type: String, required: true }
    }],
    rewards: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        value: { type: String, required: true }
    }]
});

export const ScenarioModel = model<IScenario>('Scenario', ScenarioSchema);