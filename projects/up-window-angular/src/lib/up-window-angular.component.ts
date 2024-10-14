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

  ngOnInit(): void {}

  openWindow() {
    this.isOpen.set(true);
  }

  closeWindow() {
    const upWindowElement = document.querySelector('.up-window');
    if (upWindowElement) {
      upWindowElement.classList.add(`${this.animation}-out`);
      setTimeout(() => {
        this.isOpen.set(false);
        upWindowElement.classList.remove(`${this.animation}-out`);
      }, 300);
    }
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
