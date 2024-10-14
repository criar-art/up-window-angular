import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpWindowAngularComponent } from './up-window-angular.component';

describe('UpWindowAngularComponent', () => {
  let component: UpWindowAngularComponent;
  let fixture: ComponentFixture<UpWindowAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpWindowAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpWindowAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
