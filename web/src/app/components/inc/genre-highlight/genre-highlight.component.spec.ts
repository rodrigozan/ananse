import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreHighlightComponent } from './genre-highlight.component';

describe('GenreHighlightComponent', () => {
  let component: GenreHighlightComponent;
  let fixture: ComponentFixture<GenreHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
