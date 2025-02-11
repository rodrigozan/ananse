import { IBook } from "../interfaces/IBook";

export class StoryModel implements IBook {
    title: string;
    author: string;
    shortDescription: string;
    summary: string;
    coverImage: string;
    genre: string;
    subgenre: string;
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
        this.genre = data.genre;
        this.subgenre = data.subgenre;
        this.centralConflict = data.centralConflict;
        this.characters = data.characters;
        this.literaryStructure = data.literaryStructure;
        this.scenes = data.scenes;
    }
}