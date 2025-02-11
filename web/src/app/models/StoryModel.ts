import { IBook } from "../interfaces/i-book";

export class StoryModel implements IBook {
    title: string;
    author: string;
    shortDescription: string;
    summary: string;
    coverImage: string;
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
        oddScenes: string[];
        evenScenes: string[];
    };

    constructor(data: IBook) {
        this.title = data.title;
        this.author = data.author;
        this.shortDescription = data.shortDescription;
        this.summary = data.summary;
        this.coverImage = data.coverImage;
        this.centralConflict = data.centralConflict;
        this.characters = data.characters;
        this.literaryStructure = data.literaryStructure;
        this.scenes = data.scenes;
    }
}