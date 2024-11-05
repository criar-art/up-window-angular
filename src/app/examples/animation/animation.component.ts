import { Component, signal, WritableSignal } from '@angular/core';
import { UpWindowAngularModule } from '../../../../projects/up-window-angular/src/public-api';
import { NucleusBox } from 'nucleus-angular';

@Component({
  selector: 'examples-animation',
  standalone: true,
  imports: [UpWindowAngularModule, NucleusBox],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.scss'
})
export class AnimationComponent {
  isWindowOpenFade: WritableSignal<boolean> = signal(false);
  isWindowOpenSlideLeft: WritableSignal<boolean> = signal(false);
  isWindowOpenSlideRight: WritableSignal<boolean> = signal(false);
  isWindowOpenSlideUp: WritableSignal<boolean> = signal(false);
  isWindowOpenSlideDown: WritableSignal<boolean> = signal(false);
  isWindowOpenScale: WritableSignal<boolean> = signal(false);
  isWindowOpenRotateLeft: WritableSignal<boolean> = signal(false);
  isWindowOpenRotateRight: WritableSignal<boolean> = signal(false);
  isWindowOpenFlipperLeft: WritableSignal<boolean> = signal(false);
  isWindowOpenFlipperRight: WritableSignal<boolean> = signal(false);
  isWindowOpenFlipperUp: WritableSignal<boolean> = signal(false);

  openWindowExample(type: string) {
    this.isWindowOpenFade.set(false);
    this.isWindowOpenSlideLeft.set(false);
    this.isWindowOpenSlideRight.set(false);
    this.isWindowOpenSlideUp.set(false);
    this.isWindowOpenSlideDown.set(false);
    this.isWindowOpenScale.set(false);
    this.isWindowOpenRotateLeft.set(false);
    this.isWindowOpenRotateRight.set(false);
    this.isWindowOpenFlipperLeft.set(false);
    this.isWindowOpenFlipperRight.set(false);
    this.isWindowOpenFlipperUp.set(false);

    switch (type) {
      case 'fade':
        this.isWindowOpenFade.set(true);
        break;
      case 'slide-left':
        this.isWindowOpenSlideLeft.set(true);
        break;
      case 'slide-right':
        this.isWindowOpenSlideRight.set(true);
        break;
      case 'slide-up':
        this.isWindowOpenSlideUp.set(true);
        break;
      case 'slide-down':
        this.isWindowOpenSlideDown.set(true);
        break;
      case 'scale':
        this.isWindowOpenScale.set(true);
        break;
      case 'rotate-left':
        this.isWindowOpenRotateLeft.set(true);
        break;
      case 'rotate-right':
        this.isWindowOpenRotateRight.set(true);
        break;
      case 'flipper-left':
        this.isWindowOpenFlipperLeft.set(true);
        break;
      case 'flipper-right':
        this.isWindowOpenFlipperRight.set(true);
        break;
      case 'flipper-up':
        this.isWindowOpenFlipperUp.set(true);
        break;
    }
  }

  handleConfirm() {
    console.log('Confirmed from emit action!');
  }

  handleCancel() {
    console.log('Cancelled from emit action!');
  }
}
