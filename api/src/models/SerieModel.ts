import { Schema, model } from 'mongoose';

import { ISerie } from 'src/interfaces/ISerie';

const SerieSchema = new Schema<ISerie>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    books: { type: [String], default: [] },
    world: { type: String, default: null },
});

export const Serie = model<ISerie>('Series', SerieSchema);