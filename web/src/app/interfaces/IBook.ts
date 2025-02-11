export interface IBook {
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
}