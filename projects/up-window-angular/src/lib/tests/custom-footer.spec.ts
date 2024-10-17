import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpWindowAngularComponent } from '../up-window-angular.component';
import { By } from '@angular/platform-browser';
import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  template: `
    <up-window-angular
      [isOpen]="isWindowOpenFooter"
      title="Test Window"
      subtitle="Test Subtitle"
    >
      <div footer>
        <p class="custom-footer">Custom Footer Content</p>
        <button
          class="custom-btn close"
          (click)="isWindowOpenFooter.set(false)"
        >
          Close
        </button>
      </div>
    </up-window-angular>
  `,
})
class HostComponentWithCustomFooter {
  isWindowOpenFooter: WritableSignal<boolean> = signal(true);
}

describe('UpWindowAngularComponent HostComponentWithCustomFooter', () => {
  let fixture: ComponentFixture<HostComponentWithCustomFooter>;
  let component: HostComponentWithCustomFooter;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpWindowAngularComponent, HostComponentWithCustomFooter],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponentWithCustomFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not render default footer buttons when custom footer is provided', () => {
    const confirmButton = fixture.debugElement.query(By.css('.btn-confirm'));
    const cancelButton = fixture.debugElement.query(By.css('.btn-cancel'));

    expect(confirmButton).toBeNull();
    expect(cancelButton).toBeNull();
  });

  it('should render custom footer content when ng-content is used', () => {
    fixture.detectChanges();

    const footerTemplate = fixture.debugElement.query(
      By.css('.up-window-footer')
    );
    expect(footerTemplate).toBeTruthy();

    const projectedFooter = footerTemplate.query(By.css('.custom-footer'));
    console.log('projectedFooter', projectedFooter);

    expect(projectedFooter).toBeTruthy();
    expect(projectedFooter.nativeElement.textContent).toContain(
      'Custom Footer Content'
    );
  });
});
