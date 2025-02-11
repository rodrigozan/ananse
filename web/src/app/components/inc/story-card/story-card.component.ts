import { Component, Input } from '@angular/core';
import { StoryModel } from '../../../models/StoryModel';

@Component({
  selector: 'app-story-card',
  standalone: true,
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss'],
})
export class StoryCardComponent {
  @Input() story!: StoryModel;
}