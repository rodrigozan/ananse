import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCtaComponent } from './auth-cta.component';

describe('AuthCtaComponent', () => {
  let component: AuthCtaComponent;
  let fixture: ComponentFixture<AuthCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthCtaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
