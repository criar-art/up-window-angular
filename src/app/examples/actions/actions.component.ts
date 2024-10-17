import { Component, signal, WritableSignal } from '@angular/core';
import { UpWindowAngularModule } from '../../../../projects/up-window-angular/src/public-api';

@Component({
  selector: 'examples-actions',
  standalone: true,
  imports: [UpWindowAngularModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})
export class ActionsComponent {
  isWindowOpenFooter: WritableSignal<boolean> = signal(false);
  isWindowOpenHidden: WritableSignal<boolean> = signal(false);

  openWindowExample(type: string) {
    this.isWindowOpenFooter.set(false);
    this.isWindowOpenHidden.set(false);

    switch (type) {
      case 'footer':
        this.isWindowOpenFooter.set(true);
        break;
      case 'hidden':
        this.isWindowOpenHidden.set(true);
        break;
    }
  }
}
