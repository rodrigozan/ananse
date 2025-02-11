import { Schema, model } from 'mongoose';
import { ICharacter } from '../interfaces/ICharacter';

const CharacterSchema = new Schema<ICharacter>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    race: { type: String, required: true },
    description: { type: String, required: true },
    backstory: { type: String, required: true },
    abilities: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        powerLevel: { type: String, required: true }
    }],
    affiliations: [{
        name: { type: String, required: true },
        role: { type: String, required: true },
        description: { type: String, required: true }
    }],
    relationships: [{
        name: { type: String, required: true },
        relation: { type: String, required: true },
        description: { type: String, required: true }
    }],
    inventory: [{
        item: { type: String, required: true },
        description: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    status: { type: String, required: true },
    appearance: {
        height: { type: String, required: true },
        weight: { type: String, required: true },
        eyeColor: { type: String, required: true },
        hairColor: { type: String, required: true },
        distinguishingMarks: { type: String, required: true }
    },
    personality: {
        traits: [{ type: String, required: true }],
        ideals: [{ type: String, required: true }],
        bonds: [{ type: String, required: true }],
        flaws: [{ type: String, required: true }]
    },
    skills: [{
        name: { type: String, required: true },
        level: { type: String, required: true }
    }],
    equipment: [{
        name: { type: String, required: true },
        description: { type: String, required: true },
        quantity: { type: Number, required: true }
    }],
    background: {
        origin: { type: String, required: true },
        family: { type: String, required: true },
        education: { type: String, required: true },
        occupation: { type: String, required: true }
    },
    goals: [{ type: String, required: true }],
    fears: [{ type: String, required: true }],
    motivations: [{ type: String, required: true }]
});

export const CharacterModel = model<ICharacter>('Character', CharacterSchema);