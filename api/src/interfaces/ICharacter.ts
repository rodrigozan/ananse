import { Document } from 'mongoose';

export interface ICharacter extends Document {
    name: string;
    age: number;
    gender: string;
    race: string;
    description: string;
    backstory: string;
    abilities: {
        name: string;
        description: string;
        powerLevel: string;
    }[];
    affiliations: {
        name: string;
        role: string;
        description: string;
    }[];
    relationships: {
        name: string;
        relation: string;
        description: string;
    }[];
    inventory: {
        item: string;
        description: string;
        quantity: number;
    }[];
    status: string; // ex: vivo, morto, desaparecido
    appearance: {
        height: string;
        weight: string;
        eyeColor: string;
        hairColor: string;
        distinguishingMarks: string;
    };
    personality: {
        traits: string[];
        ideals: string[];
        bonds: string[];
        flaws: string[];
    };
    skills: {
        name: string;
        level: string;
    }[];
    equipment: {
        name: string;
        description: string;
        quantity: number;
    }[];
    background: {
        origin: string;
        family: string;
        education: string;
        occupation: string;
    };
    goals: string[];
    fears: string[];
    motivations: string[];
}