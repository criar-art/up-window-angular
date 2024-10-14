import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  signal,
  WritableSignal,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'up-window-angular',
  templateUrl: './up-window-angular.component.html',
  styleUrls: ['./up-window-angular.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UpWindowAngularComponent implements OnInit {
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

  ngOnInit(): void {}

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
