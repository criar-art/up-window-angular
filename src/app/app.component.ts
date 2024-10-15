import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { ModalinstallComponent } from './components/modal-install/modal-install.component';
import { DarkmodeComponent } from './components/darkmode/darkmode.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { FormsModule } from '@angular/forms';
import { AnimationComponent } from './examples/animation/animation.component';
import { ModeComponent } from './examples/mode/mode.component';
import { ActionsComponent } from './examples/actions/actions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    AppHeaderComponent,
    ModalinstallComponent,
    DarkmodeComponent,
    AnimationComponent,
    ActionsComponent,
    ModeComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}

  codeString: string = '<up-window-angular />';
  isModalActive: boolean = false;

  openModal(): void {
    this.isModalActive = true;
    this.renderer.addClass(document.body, 'modal-active');
  }

  closeModal(): void {
    this.isModalActive = false;
    this.renderer.removeClass(document.body, 'modal-active');
  }
}
