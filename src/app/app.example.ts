export const ExampleComponent = `// Example Component
import { Component } from '@angular/core';
import { signal, WritableSignal } from 'signals';
import UpWindowAngularModule from 'up-window-angular';

@Component({
  selector: 'app-window-example',
  template: \`
<button class="button-window-example" type="button" (click)="openWindowExample()">
  Open Window Example
</button>

<up-window-angular
  [isOpen]="isWindowOpenExample"
  title="Window Title"
  subtitle="This is the subtitle of the window."
>
  Window Example content!
</up-window-angular>\`,
})
export class WindowExampleComponent {
  isWindowOpenExample: WritableSignal<boolean> = signal(false);

  openWindowExample() {
    this.isWindowOpenExample.set(true);
  }
}`
