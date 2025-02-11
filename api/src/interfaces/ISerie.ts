import { Document } from 'mongoose';

export interface ISerie extends Document {
    title: string;
    author: string; 
    description: string;
    centralConflict: string;
    books: string[];
    world?: string;
}