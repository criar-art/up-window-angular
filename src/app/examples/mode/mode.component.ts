import { Component, signal, WritableSignal } from '@angular/core';
import { UpWindowAngularModule } from '../../../../projects/up-window-angular/src/public-api';

@Component({
  selector: 'examples-mode',
  standalone: true,
  imports: [UpWindowAngularModule],
  templateUrl: './mode.component.html',
  styleUrl: './mode.component.scss'
})
export class ModeComponent {
  isWindowOpenRestrict: WritableSignal<boolean> = signal(false);
  isWindowOpenFullScreen: WritableSignal<boolean> = signal(false);
  isWindowOpenBlur: WritableSignal<boolean> = signal(false);

  openWindowExample(type: string) {
    this.isWindowOpenRestrict.set(false);
    this.isWindowOpenFullScreen.set(false);
    this.isWindowOpenBlur.set(false);

    switch (type) {
      case 'restrict':
        this.isWindowOpenRestrict.set(true);
        break;
      case 'fullscreen':
        this.isWindowOpenFullScreen.set(true);
        break;
      case 'blur':
        this.isWindowOpenBlur.set(true);
        break;
    }
  }
}
