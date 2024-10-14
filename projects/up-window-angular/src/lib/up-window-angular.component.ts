import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  signal,
  WritableSignal,
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

  onConfirm() {
    console.log('Confirmed!');
    this.closeWindow();
  }

  onCancel() {
    console.log('Cancelled!');
    this.closeWindow();
  }
}
