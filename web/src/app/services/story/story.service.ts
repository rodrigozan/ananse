import { Injectable } from '@angular/core';
import { StoryModel } from '../../models/StoryModel';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  getFeaturedStories(): StoryModel[] {
    // Simulação de dados
    return [
      {
        title: 'História 1',
        shortDescription: 'Descrição curta da história 1',
        coverImage: 'https://via.placeholder.com/300',
        author: '',
        summary: '',
        genre: '',
        subgenre: '',
        centralConflict: '',
        characters: {
          protagonists: [],
          mainCharacters: [],
          secondaryCharacters: []
        },
        literaryStructure: {
          act1: '',
          act2a: '',
          act2b: '',
          act3: '',
          plotPoints: []
        },
        scenes: {
          oddScenes: [],
          evenScenes: []
        }
      },
    ];
  }

  getStoriesByGenre(): { name: string; stories: StoryModel[] }[] {
    // Simulação de dados
    return [
      {
        name: 'Fantasia',
        stories: [
          {
            title: 'História 2',
            shortDescription: 'Descrição curta da história 2',
            coverImage: 'https://via.placeholder.com/300',
            author: '',
            summary: '',
            genre: '',
            subgenre: '',
            centralConflict: '',
            characters: {
              protagonists: [],
              mainCharacters: [],
              secondaryCharacters: []
            },
            literaryStructure: {
              act1: '',
              act2a: '',
              act2b: '',
              act3: '',
              plotPoints: []
            },
            scenes: {
              oddScenes: [],
              evenScenes: []
            }
          },
          // Adicione mais histórias
        ],
      },
      // Adicione mais gêneros
    ];
  }
}