import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeComponent } from './mode.component';

describe('ModeComponent', () => {
  let component: ModeComponent;
  let fixture: ComponentFixture<ModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
