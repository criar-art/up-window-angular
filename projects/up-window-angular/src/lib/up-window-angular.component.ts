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
  effect,
} from '@angular/core';

@Component({
  selector: 'up-window-angular',
  templateUrl: './up-window-angular.component.html',
  styleUrls: [
    './up-window-angular.variables.scss',
    './up-window-angular.animation.scss',
    './up-window-angular.component.scss',
    './up-window-angular.btn.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class UpWindowAngularComponent implements OnInit, OnDestroy {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() class: string | undefined;
  @Input() isOpen: WritableSignal<boolean> = signal(false);
  @Input() animation: string = 'fade';
  @Input() restrictMode: boolean = false;
  @Input() fullScreen: boolean = false;
  @Input() blur: boolean = false;
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
  openingAnimation: boolean = false;
  shakeAnimation: boolean = false;
  focusableElements!: NodeListOf<HTMLElement>;
  firstFocusableElement!: HTMLElement;
  lastFocusableElement!: HTMLElement;

  @ViewChild('modal') modal!: ElementRef;

  constructor() {
    effect(() => {
      this.isOpen()
        ? this.startOpeningAnimation()
        : this.startClosingAnimation();
    });
  }

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
    if (event.key === 'Escape' && this.isOpen() && !this.restrictMode) {
      this.closeWindow();
    } else if (event.key === 'Escape' && this.isOpen() && this.restrictMode) {
      this.triggerShakeAnimation();
    }

    if (event.key === 'Tab' && this.isOpen()) {
      this.trapFocus(event);
    }
  }

  triggerShakeAnimation() {
    this.shakeAnimation = true;
    setTimeout(() => {
      this.shakeAnimation = false;
    }, 300);
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

  startOpeningAnimation() {
    this.openingAnimation = true;
    setTimeout(() => {
      this.openingAnimation = false;
    }, 400);
  }

  startClosingAnimation() {
    this.closingAnimation = true;
    setTimeout(() => {
      this.closingAnimation = false;
    }, 400);
  }

  closeWindow(from?: string) {
    if (from == 'overlay' && this.restrictMode) {
      this.triggerShakeAnimation();
    } else {
      this.closingAnimation = true;

      setTimeout(() => {
        this.isOpen.set(false);
        this.closingAnimation = false;
      }, 400);
    }
  }

  getClass() {
    return {
      ...(this.class ? { [this.class]: true } : {}),
      [this.animation]: this.openingAnimation && !this.closingAnimation,
      [`${this.animation}-out`]: this.closingAnimation,
      shake: this.shakeAnimation,
      fullscreen: this.fullScreen,
      blur: this.blur,
    };
  }

  getButtonClass(type: string) {
    const buttonClasses: { [key: string]: string } = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      danger: 'btn-danger',
    };

    return buttonClasses[type] || 'btn-default';
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
