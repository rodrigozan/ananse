import { Schema, model } from 'mongoose';

import { IBook } from 'src/interfaces/IBook';

const BookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    shortDescription: { type: String, required: true },
    summary: { type: String, required: true },
    centralConflict: { type: String, required: true },
    characters: {
        protagonists: { type: [String], default: [] },
        mainCharacters: { type: [String], default: [] },
        secondaryCharacters: { type: [String], default: [] },
    },
    literaryStructure: {
        act1: { type: String, default: '' },
        act2a: { type: String, default: '' },
        act2b: { type: String, default: '' },
        act3: { type: String, default: '' },
        plotPoints: { type: [String], default: [] },
    },
    scenes: {
        oddScenes: { type: [String], default: [] },
        evenScenes: { type: [String], default: [] },
    },
});

export const Book = model<IBook>('Book', BookSchema);