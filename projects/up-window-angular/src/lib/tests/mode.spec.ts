import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { UpWindowAngularComponent } from '../up-window-angular.component';
import { By } from '@angular/platform-browser';

describe('UpWindowAngularComponent', () => {
  let component: UpWindowAngularComponent;
  let fixture: ComponentFixture<UpWindowAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpWindowAngularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpWindowAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should prevent closing when clicking on the overlay in restricted mode', fakeAsync(() => {
    component.isOpen.set(true);
    component.restrictMode = true;
    fixture.detectChanges();

    const overlay = fixture.debugElement.query(
      By.css('.overlay')
    ).nativeElement;
    overlay.click();

    tick(600);
    expect(component.isOpen()).toBeTrue();
  }));

  it('should prevent closing when clicking on the overlay in restricted mode', fakeAsync(() => {
    component.isOpen.set(true);
    component.restrictMode = true;
    fixture.detectChanges();

    const overlay = fixture.debugElement.query(
      By.css('.overlay')
    ).nativeElement;
    overlay.click();
    tick(600);
    fixture.detectChanges();

    expect(component.isOpen()).toBeTrue();
  }));

  it('should apply fullscreen class when fullScreen is true', () => {
    component.fullScreen = true;
    fixture.detectChanges();

    const windowElement = fixture.debugElement.query(By.css('.up-window'));
    expect(windowElement.classes['fullscreen']).toBeTrue();
  });

  it('should not apply fullscreen class when fullScreen is false', () => {
    component.fullScreen = false;
    fixture.detectChanges();

    const windowElement = fixture.debugElement.query(By.css('.up-window'));
    expect(windowElement.classes['fullscreen']).toBeFalsy();
  });

  it('should apply blur class when blur input is true', () => {
    component.blur = true;
    fixture.detectChanges();

    const overlayElement = fixture.debugElement.query(By.css('.overlay'));
    expect(overlayElement.classes['blur']).toBeTrue();
  });

  it('should not apply blur class when blur input is false', () => {
    component.blur = false;
    fixture.detectChanges();

    const overlayElement = fixture.debugElement.query(By.css('.overlay'));
    expect(overlayElement.classes['blur']).toBeFalsy();
  });

  it('should apply grayscale class when grayscale input is true', () => {
    component.grayscale = true;
    fixture.detectChanges();

    const overlayElement = fixture.debugElement.query(By.css('.overlay'));
    expect(overlayElement.classes['grayscale']).toBeTrue();
  });

  it('should not apply grayscale class when grayscale input is false', () => {
    component.grayscale = false;
    fixture.detectChanges();

    const overlayElement = fixture.debugElement.query(By.css('.overlay'));
    expect(overlayElement.classes['grayscale']).toBeFalsy();
  });
});
