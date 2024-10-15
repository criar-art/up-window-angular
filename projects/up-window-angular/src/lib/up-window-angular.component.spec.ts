import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { UpWindowAngularComponent } from './up-window-angular.component';
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

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render title and subtitle', () => {
    component.title = 'Test Title';
    component.subtitle = 'Test Subtitle';
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(
      By.css('.up-window-title')
    ).nativeElement;
    const subtitleElement = fixture.debugElement.query(
      By.css('.up-window-subtitle')
    ).nativeElement;

    expect(titleElement.textContent).toContain('Test Title');
    expect(subtitleElement.textContent).toContain('Test Subtitle');
  });

  it('should apply the correct animation class when opening and closing the window', fakeAsync(() => {
    component.animation = 'slide';

    component.isOpen.set(true);
    component.openingAnimation = true;
    component.closingAnimation = false;
    fixture.detectChanges();

    tick(100);

    let windowElement = fixture.debugElement.query(By.css('.up-window'));

    expect(windowElement.classes['slide']).toBeTrue();

    component.closingAnimation = true;
    component.openingAnimation = false;
    component.isOpen.set(false);
    fixture.detectChanges();

    tick(600);

    windowElement = fixture.debugElement.query(By.css('.up-window'));

    expect(windowElement.classes['slide-out']).toBeTrue();
    expect(component.isOpen()).toBeFalse();
  }));

  it('should trigger onConfirm and onCancel when buttons are clicked', async () => {
    spyOn(component, 'onConfirm').and.callThrough();
    spyOn(component, 'onCancel').and.callThrough();

    component.isOpen.set(true);
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    const confirmButton = fixture.debugElement.query(By.css('.btn-confirm'));
    const cancelButton = fixture.debugElement.query(By.css('.btn-cancel'));

    expect(confirmButton).toBeTruthy();
    expect(cancelButton).toBeTruthy();

    confirmButton.nativeElement.click();
    await fixture.whenStable();
    expect(component.onConfirm).toHaveBeenCalled();
    expect(component.isOpen()).toBeFalse();

    component.isOpen.set(true);
    fixture.detectChanges();

    await fixture.whenStable();
    cancelButton.nativeElement.click();
    await fixture.whenStable();
    expect(component.onCancel).toHaveBeenCalled();
    expect(component.isOpen()).toBeFalse();
  });

  it('should apply custom class from @Input', () => {
    component.class = 'custom-class';
    fixture.detectChanges();

    const windowElement = fixture.debugElement.query(By.css('.up-window'));
    expect(windowElement.classes['custom-class']).toBeTruthy();
  });

  it('should set isOpen to true when openWindow is called', () => {
    component.isOpen.set(true);
    expect(component.isOpen()).toBeTrue();
  });

  it('should set isOpen to false after closeWindow is called', fakeAsync(() => {
    component.isOpen.set(true);
    fixture.detectChanges();

    component.isOpen.set(false);
    fixture.detectChanges();

    tick(600);
    expect(component.isOpen()).toBeFalse();
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
});
