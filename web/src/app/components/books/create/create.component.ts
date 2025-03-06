import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StoryModel } from '../../../models/StoryModel';

import { StoryService } from '../../../services/story/story.service';

import { HeaderComponent } from '../../inc/header/header.component';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateBookComponent {
  book: StoryModel = {
    title: '',
    author: '', 
    shortDescription: '',
    summary: '',
    coverImage: '',
    genre: '',
    subgenre: '',
    centralConflict: '',
    characters: {
      protagonists: [],
      mainCharacters: [],
      secondaryCharacters: [],
    },
    literaryStructure: {
      act1: '',
      act2a: '',
      act2b: '',
      act3: '',
      plotPoints: [],
    },
    scenes: {
      oddScenes: [],
      evenScenes: [],
    },
  };

  constructor(private bookService: StoryService, private router: Router) {}

  onSubmit(): void {
    this.bookService.create(this.book).subscribe({
      next: (response) => {
        console.log('Livro criado com sucesso:', response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erro ao criar livro:', error);
      },
    });
  }
}