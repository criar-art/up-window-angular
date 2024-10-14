import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  signal,
  WritableSignal,
  Output,
  EventEmitter,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'up-window-angular',
  templateUrl: './up-window-angular.component.html',
  styleUrls: ['./up-window-angular.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UpWindowAngularComponent implements OnInit, OnDestroy {
  @Input() title: string = 'Default Title';
  @Input() subtitle: string = 'Default Subtitle';
  @Input() size: string = 'medium';
  @Input() class: string | undefined;
  @Input() isOpen: WritableSignal<boolean> = signal(false);
  @Input() animation: string = 'fade';
  @Input() confirmText: string = 'Confirm';
  @Input() cancelText: string = 'Cancel';
  @Input() confirmType: string = 'primary';
  @Input() cancelType: string = 'default';
  @Input() buttonAlignment: 'start' | 'end' | 'center' = 'end';
  @Input() onConfirmClick: () => void = () => this.onConfirm();
  @Input() onCancelClick: () => void = () => this.onCancel();

  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  closingAnimation: boolean = false;
  focusableElements!: NodeListOf<HTMLElement>;
  firstFocusableElement!: HTMLElement;
  lastFocusableElement!: HTMLElement;

  @ViewChild('modal') modal!: ElementRef;

  ngOnInit(): void {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  ngAfterViewInit(): void {
    if (this.modal) {
      this.focusableElements = this.modal.nativeElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (this.focusableElements.length > 0) {
        this.firstFocusableElement = this.focusableElements[0];
        this.lastFocusableElement =
          this.focusableElements[this.focusableElements.length - 1];
      }
    }
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen()) {
      this.closeWindow();
    }

    if (event.key === 'Tab' && this.isOpen()) {
      this.trapFocus(event);
    }
  }

  trapFocus(event: KeyboardEvent) {
    const isShiftPressed = event.shiftKey;
    const activeElement = document.activeElement as HTMLElement;

    if (!isShiftPressed && activeElement === this.lastFocusableElement) {
      event.preventDefault();
      this.firstFocusableElement.focus();
    } else if (isShiftPressed && activeElement === this.firstFocusableElement) {
      event.preventDefault();
      this.lastFocusableElement.focus();
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleKeydown.bind(this));
  }

  openWindow() {
    this.isOpen.set(true);
  }

  closeWindow() {
    this.closingAnimation = true;

    setTimeout(() => {
      this.isOpen.set(false);
      this.closingAnimation = false;
    }, 300);
  }

  getClass() {
    return {
      ...(this.class ? { [this.class]: true } : {}),
      [this.animation]: !this.closingAnimation,
      [`${this.animation}-out`]: this.closingAnimation,
    };
  }

  getButtonClass(type: string) {
    switch (type) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      default:
        return 'btn-default';
    }
  }

  onCancel() {
    console.log('Confirmed!');
    this.confirm.emit();
    this.closeWindow();
  }

  onConfirm() {
    console.log('Cancelled!');
    this.cancel.emit();
    this.closeWindow();
  }
}
