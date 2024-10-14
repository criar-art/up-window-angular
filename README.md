# up-window-angular

UpWindow is an Angular library designed to create dynamic, customizable windows and window-based components for web applications. With a simple and intuitive API, UpWindow enables developers to easily integrate responsive windows, popups, and floating windows into their projects. It provides full control over window size, position, animations, and behavior, offering a flexible solution for creating engaging user interfaces.

<img alt="Screenshot" width="100%" src="https://raw.githubusercontent.com/criar-art/up-window-angular/master/public/screen-up-window-angular.png" />

Install
```bash
npm install up-window-angular
```

### Usage Example

```typescript
import { Component } from '@angular/core';
import { signal, WritableSignal } from 'signals';
import UpWindowAngularModule from 'up-window-angular';

@Component({
  selector: 'app-window-example',
  templateUrl: './window-example.component.html',
})
export class WindowExampleComponent {
  isWindowOpenExample: WritableSignal<boolean> = signal(false);

  openWindowExample() {
    this.isWindowOpenExample.set(true);
  }
}
```

### HTML Template

```html
<button class="button-window-example" type="button" (click)="openWindowExample()">
  Open Window Example
</button>

<up-window-angular
  [isOpen]="isWindowOpenExample"
  title="Window Title"
  subtitle="This is the subtitle of the window."
  size="medium"
>
  Window Example content!
</up-window-angular>
```

1. **Component Setup**:
   - In the `WindowExampleComponent`, a `WritableSignal<boolean>` named `isWindowOpenExample` is defined, initialized to `false`.
   - The `openWindowExample` method sets `isWindowOpenExample` to `true`, which opens the window.

2. **HTML Template**:
   - A button is provided to trigger the window opening by calling `openWindowExample`.
   - The `up-window-angular` component is used with bindings for `isOpen`, `title`, `subtitle`. The content inside the window is defined in the component template.
