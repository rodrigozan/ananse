import { Document } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string; // ID do usuário (escritor)
    shortDescription: string;
    summary: string;
    centralConflict: string;
    characters: {
        protagonists: string[];
        mainCharacters: string[];
        secondaryCharacters: string[];
    };
    literaryStructure: {
        act1: string;
        act2a: string;
        act2b: string;
        act3: string;
        plotPoints: string[];
    };
    scenes: {
        prolog: string;
        oddScenes: string[];
        evenScenes: string[];
        series?: string;
        world?: string;
    };
}