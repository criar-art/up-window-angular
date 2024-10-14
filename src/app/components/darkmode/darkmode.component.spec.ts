import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DarkmodeComponent } from './darkmode.component';

describe('DarkmodeComponent', () => {
  let component: DarkmodeComponent;
  let fixture: ComponentFixture<DarkmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkmodeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(DarkmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle light and dark mode', fakeAsync(() => {
    const btnMode = fixture.debugElement.query(By.css('.btn-mode')).nativeElement;

    // Check initial state (LightMode)
    expect(modeButtonText()).toBe('LightMode');
    expect(buttonIcon('[aria-label="Icon Light Mode"]')).toBeTruthy();

    // Toggle to DarkMode
    btnMode.click();
    fixture.detectChanges();
    tick();

    expect(modeButtonText()).toBe('DarkMode');
    expect(buttonIcon('[aria-label="Icon Dark Mode"]')).toBeTruthy();

    // Toggle back to LightMode
    btnMode.click();
    fixture.detectChanges();
    tick();

    expect(modeButtonText()).toBe('LightMode');
    expect(buttonIcon('[aria-label="Icon Light Mode"]')).toBeTruthy();
  }));

  function modeButtonText(): string {
    fixture.detectChanges();
    tick();
    return fixture.debugElement.query(By.css('.btn-mode')).nativeElement.textContent.trim();
  }

  function buttonIcon(selector: string): HTMLElement | null {
    fixture.detectChanges();
    tick();
    return fixture.debugElement.query(By.css(selector))?.nativeElement || null;
  }
});
