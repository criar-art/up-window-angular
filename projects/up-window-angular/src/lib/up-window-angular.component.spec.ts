import { ComponentFixture, TestBed } from '@angular/core/testing';
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

    const titleElement = fixture.debugElement.query(By.css('.up-window-title')).nativeElement;
    const subtitleElement = fixture.debugElement.query(By.css('.up-window-subtitle')).nativeElement;

    expect(titleElement.textContent).toContain('Test Title');
    expect(subtitleElement.textContent).toContain('Test Subtitle');
  });

  it('should apply the correct animation class when opening and closing the window', () => {
    component.animation = 'slide';
    component.isOpen.set(true);
    fixture.detectChanges();

    let windowElement = fixture.debugElement.query(By.css('.up-window'));
    expect(windowElement.classes['slide']).toBeTruthy();

    component.closeWindow();
    fixture.detectChanges();

    setTimeout(() => {
      windowElement = fixture.debugElement.query(By.css('.up-window'));
      expect(windowElement.classes['slide-out']).toBeTruthy();
      expect(component.isOpen()).toBeFalse();
    }, 300);
  });

  it('should trigger onConfirm and onCancel when buttons are clicked', () => {
    spyOn(component, 'onConfirm').and.callThrough();
    spyOn(component, 'onCancel').and.callThrough();

    const confirmButton = fixture.debugElement.query(By.css('.btn-confirm')).nativeElement;
    const cancelButton = fixture.debugElement.query(By.css('.btn-cancel')).nativeElement;

    confirmButton.click();
    expect(component.onConfirm).toHaveBeenCalled();

    cancelButton.click();
    expect(component.onCancel).toHaveBeenCalled();
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

  it('should set isOpen to false after closeWindow is called', () => {
    component.isOpen.set(true);
    fixture.detectChanges();

    component.closeWindow();
    fixture.detectChanges();

    setTimeout(() => {
      expect(component.isOpen()).toBeFalse();
    }, 300);
  });
});
