import { Component, Renderer2, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { UpWindowAngularModule } from 'up-window-angular';
import { UpWindowAngularModule } from '../../projects/up-window-angular/src/public-api';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ModalinstallComponent } from './components/modal-install/modal-install.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    UpWindowAngularModule,
    AppHeaderComponent,
    ModalinstallComponent,
    DarkmodeComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}

  codeString: string = '<up-window-angular />';
  isModalActive: boolean = false;
  isWindowOpenFade: WritableSignal<boolean> = signal(false);
  isWindowOpenSlideLeft: WritableSignal<boolean> = signal(false);
  isWindowOpenSlideRight: WritableSignal<boolean> = signal(false);
  isWindowOpenSlideUp: WritableSignal<boolean> = signal(false);
  isWindowOpenSlideDown: WritableSignal<boolean> = signal(false);
  isWindowOpenScale: WritableSignal<boolean> = signal(false);

  openWindowExample(animation: string) {
    this.isWindowOpenFade.set(false);
    this.isWindowOpenSlideLeft.set(false);
    this.isWindowOpenSlideRight.set(false);
    this.isWindowOpenSlideUp.set(false);
    this.isWindowOpenSlideDown.set(false);
    this.isWindowOpenScale.set(false);

    switch (animation) {
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
    }
  }

  openModal(): void {
    this.isModalActive = true;
    this.renderer.addClass(document.body, 'modal-active');
  }

  closeModal(): void {
    this.isModalActive = false;
    this.renderer.removeClass(document.body, 'modal-active');
  }

  handleConfirm() {
    console.log('Confirmed from emit action!');
  }

  handleCancel() {
    console.log('Cancelled from emit action!');
  }
}
