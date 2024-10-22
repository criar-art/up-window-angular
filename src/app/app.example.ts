export const ExampleComponent = `// Example Component
import { Component } from '@angular/core';
import { signal, WritableSignal } from 'signals';
import UpWindowAngularModule from 'up-window-angular';

@Component({
  selector: 'app-window-example',
  template: \`
<button (click)="openWindowExample()">
  Open Window Example
</button>

<up-window-angular
  [isOpen]="isWindowState"
  title="Window Title"
  subtitle="This is the subtitle of the window."
>
  Window Example content!
</up-window-angular>\`,
})
export class WindowExampleComponent {
  isWindowState: WritableSignal<boolean> = signal(false);

  openWindowExample() {
    this.isWindowState.set(true);
  }
}`
