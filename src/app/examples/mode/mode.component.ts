import { Component, signal, WritableSignal } from '@angular/core';
import { UpWindowAngularModule } from '../../../../projects/up-window-angular/src/public-api';
import { NucleusBox } from 'nucleus-angular';

@Component({
  selector: 'examples-mode',
  standalone: true,
  imports: [UpWindowAngularModule, NucleusBox],
  templateUrl: './mode.component.html',
  styleUrl: './mode.component.scss',
})
export class ModeComponent {
  isWindowOpenRestrict: WritableSignal<boolean> = signal(false);
  isWindowOpenFullScreen: WritableSignal<boolean> = signal(false);
  isWindowOpenBlur: WritableSignal<boolean> = signal(false);
  isWindowOpenGrayscale: WritableSignal<boolean> = signal(false);
  isWindowOpenBlurGrayscale: WritableSignal<boolean> = signal(false);
  isWindowOpenDrawerBottom: WritableSignal<boolean> = signal(false);
  isWindowOpenDrawerTop: WritableSignal<boolean> = signal(false);
  isWindowOpenDrawerLeft: WritableSignal<boolean> = signal(false);
  isWindowOpenDrawerRight: WritableSignal<boolean> = signal(false);
  drawerPosition: 'bottom' | 'top' | 'left' | 'right' = 'bottom';


  openWindowExample(type: string) {
    this.isWindowOpenRestrict.set(false);
    this.isWindowOpenFullScreen.set(false);
    this.isWindowOpenBlur.set(false);
    this.isWindowOpenGrayscale.set(false);
    this.isWindowOpenBlurGrayscale.set(false);
    this.isWindowOpenDrawerBottom.set(false);
    this.isWindowOpenDrawerTop.set(false);
    this.isWindowOpenDrawerLeft.set(false);
    this.isWindowOpenDrawerRight.set(false);

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
      case 'grayscale':
        this.isWindowOpenGrayscale.set(true);
        break;
      case 'blurGrayscale':
        this.isWindowOpenBlurGrayscale.set(true);
        break;
      case 'drawer-left':
        this.drawerPosition = 'left';
        this.isWindowOpenDrawerLeft.set(true);
        break;
      case 'drawer-right':
        this.drawerPosition = 'right';
        this.isWindowOpenDrawerRight.set(true);
        break;
      case 'drawer-top':
        this.drawerPosition = 'top';
        this.isWindowOpenDrawerTop.set(true);
        break;
      case 'drawer-bottom':
        this.drawerPosition = 'bottom';
        this.isWindowOpenDrawerBottom.set(true);
        break;
    }
  }
}
