import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationComponent } from './animation.component';

describe('AnimationComponent', () => {
  let component: AnimationComponent;
  let fixture: ComponentFixture<AnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
