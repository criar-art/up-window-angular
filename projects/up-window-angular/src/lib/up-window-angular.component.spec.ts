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
    fixture.detectChanges();

    let windowElement = fixture.debugElement.query(By.css('.up-window'));
    expect(windowElement.classes['slide']).toBeTruthy();

    component.closeWindow();
    fixture.detectChanges();

    tick(300); // Simulate the passage of time for the animation duration

    windowElement = fixture.debugElement.query(By.css('.up-window'));
    expect(windowElement.classes['slide-out']).toBeTruthy();
    expect(component.isOpen()).toBeFalse();
  }));

  it('should trigger onConfirm and onCancel when buttons are clicked', async () => {
    spyOn(component, 'onConfirm').and.callThrough();
    spyOn(component, 'onCancel').and.callThrough();

    component.isOpen.set(true); // Open the modal
    fixture.detectChanges(); // Trigger change detection

    await fixture.whenStable(); // Wait for any asynchronous tasks to finish
    fixture.detectChanges(); // Re-render the component

    // Check if buttons are present
    const confirmButton = fixture.debugElement.query(By.css('.btn-confirm'));
    const cancelButton = fixture.debugElement.query(By.css('.btn-cancel'));

    expect(confirmButton).toBeTruthy(); // Ensure confirm button exists
    expect(cancelButton).toBeTruthy(); // Ensure cancel button exists

    // Simulate click on confirm button
    confirmButton.nativeElement.click();
    await fixture.whenStable(); // Wait for any asynchronous tasks
    expect(component.onConfirm).toHaveBeenCalled();
    expect(component.isOpen()).toBeFalse(); // Check if modal is closed

    // Reset state and check cancel
    component.isOpen.set(true); // Re-open the modal
    fixture.detectChanges();

    await fixture.whenStable(); // Wait for any asynchronous tasks
    cancelButton.nativeElement.click();
    await fixture.whenStable(); // Wait for any asynchronous tasks
    expect(component.onCancel).toHaveBeenCalled();
    expect(component.isOpen()).toBeFalse(); // Check if modal is closed
});



  it('should apply custom class from @Input', () => {
    component.class = 'custom-class';
    fixture.detectChanges();

    const windowElement = fixture.debugElement.query(By.css('.up-window'));
    expect(windowElement.classes['custom-class']).toBeTruthy();
  });

  it('should set isOpen to true when openWindow is called', () => {
    component.openWindow();
    expect(component.isOpen()).toBeTrue();
  });

  it('should set isOpen to false after closeWindow is called', fakeAsync(() => {
    component.isOpen.set(true);
    fixture.detectChanges();

    component.closeWindow();
    fixture.detectChanges();

    tick(300); // Wait for the closing animation
    expect(component.isOpen()).toBeFalse();
  }));

  it('should not display close button in restricted mode', () => {
    component.isOpen.set(true);
    component.restrictMode = true; // Enable restricted mode
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(By.css('.close-window'));
    expect(closeButton).toBeFalsy(); // Close button should not be present
  });

  it('should prevent closing when clicking on the overlay in restricted mode', fakeAsync(() => {
    component.isOpen.set(true);
    component.restrictMode = true; // Enable restricted mode
    fixture.detectChanges();

    const overlay = fixture.debugElement.query(
      By.css('.overlay')
    ).nativeElement;
    overlay.click(); // Click on the overlay
    expect(component.isOpen()).toBeTrue(); // Modal should still be open
  }));
});
