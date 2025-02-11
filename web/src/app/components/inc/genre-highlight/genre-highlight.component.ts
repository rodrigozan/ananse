import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryModel } from '../../../models/StoryModel';

import { StoryCardComponent } from '../story-card/story-card.component';

@Component({
  selector: 'app-genre-highlight',
  standalone: true,
  imports: [CommonModule, StoryCardComponent],
  templateUrl: './genre-highlight.component.html',
  styleUrls: ['./genre-highlight.component.scss'],
})
export class GenreHighlightComponent {
  @Input() genre!: string;
  @Input() stories!: StoryModel[];
}