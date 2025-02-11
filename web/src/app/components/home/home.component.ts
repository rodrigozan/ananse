import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryModel } from '../../models/StoryModel';

import { StoryService } from '../../services/story/story.service';

import { HeaderComponent } from '../inc/header/header.component';
import { StoryCardComponent } from '../inc/story-card/story-card.component';
import { GenreHighlightComponent } from '../inc/genre-highlight/genre-highlight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, StoryCardComponent, GenreHighlightComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  featuredStories: StoryModel[] = [];
  genres: { name: string; stories: StoryModel[] }[] = [];

  constructor(private storyService: StoryService) {}

  ngOnInit() {
    this.featuredStories = this.storyService.getFeaturedStories();
    this.genres = this.storyService.getStoriesByGenre();
  }
}