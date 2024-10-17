# up-window-angular

An Angular library designed to create dynamic, customizable windows and window-based components for web applications. With a simple and intuitive API, UpWindow enables developers to easily integrate responsive windows, popups, and floating windows into their projects. It provides full control over window size, position, animations, and behavior, offering a flexible solution for creating engaging user interfaces.

## Install

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
>
  Window Example content!
</up-window-angular>
```

### Component Setup

- In the `WindowExampleComponent`, a `WritableSignal<boolean>` named `isWindowOpenExample` is defined, initialized to `false`.
- The `openWindowExample` method sets `isWindowOpenExample` to `true`, which opens the window.

### Inputs

- **`@Input() title!: string;`**
   - Example: Set the title of the window.
   ```html
   <up-window-angular title="My Custom Title" />
   ```

- **`@Input() subtitle!: string;`**
   - Example: Set the subtitle of the window.
   ```html
   <up-window-angular subtitle="This is a custom subtitle" />
   ```

- **`@Input() class: string | undefined;`**
   - Example: Add custom CSS classes.
   ```html
   <up-window-angular class="custom-window-class" />
   ```

- **`@Input() isOpen: WritableSignal<boolean> = signal(false);`**
   - Example: Control the visibility of the window.
   ```typescript
   this.isWindowOpenExample.set(true); // Opens the window
   ```

- **`@Input() animation: string = 'fade';`**
   - Example: Set a different animation type.
   ```html
   <up-window-angular animation="slide" />
   ```

- **`@Input() restrictMode: boolean = false;`**
   - Example: Enable restricted mode.
   ```html
   <up-window-angular restrictMode="true" />
   ```

- **`@Input() fullScreen: boolean = false;`**
   - Example: Enable fullscreen mode for the window.
   ```html
   <up-window-angular [fullScreen]="true" />
   ```

- **`@Input() confirmText: string = 'Confirm';`**
   - Example: Customize the confirm button text.
   ```html
   <up-window-angular confirmText="Agree" />
   ```

- **`@Input() cancelText: string = 'Cancel';`**
   - Example: Customize the cancel button text.
   ```html
   <up-window-angular cancelText="Dismiss" />
   ```

- **`@Input() confirmType: string = 'primary';`**
   - Example: Set the style of the confirm button.
   ```html
   <up-window-angular confirmType="success" />
   ```

- **`@Input() cancelType: string = 'default';`**
   - Example: Set the style of the cancel button.
   ```html
   <up-window-angular cancelType="danger" />
   ```

- **`@Input() buttonAlignment: 'start' | 'end' | 'center' = 'end';`**
   - Example: Align the buttons to the center.
   ```html
   <up-window-angular buttonAlignment="center" />
   ```

- **`@Input() onConfirmClick: () => void = () => this.onConfirm();`**
   - Example: Custom confirm action.
   ```typescript
   onConfirm() {
     console.log('Confirmed!');
   }
   ```

- **`@Input() onCancelClick: () => void = () => this.onCancel();`**
   - Example: Custom cancel action.
   ```typescript
   onCancel() {
     console.log('Cancelled!');
   }
   ```

- **`@Input() hiddenActions: boolean = false;`**
   - Example: Control the visibility of action buttons (confirm and cancel). When set to `true`, the action buttons will not be displayed.
   ```html
   <up-window-angular [hiddenActions]="true" />
   ```

- **`@Input() blur: boolean = false;`**
   - Example: Enable blur effect for the window.
   ```html
   <up-window-angular [blur]="true" />
   ```

- **`@Input() grayscale: boolean = false;`**
   - Example: Enable grayscale effect for the window.
   ```html
   <up-window-angular [grayscale]="true" />
   ```

### Outputs

- **`@Output() confirm = new EventEmitter<void>();`**
   - Example: Emit an event when confirm is clicked.
   ```typescript
   this.confirm.subscribe(() => {
     console.log('Confirmed action triggered');
   });
   ```

- **`@Output() cancel = new EventEmitter<void>();`**
   - Example: Emit an event when cancel is clicked.
   ```typescript
   this.cancel.subscribe(() => {
     console.log('Cancel action triggered');
   });
   ```

### ng-content for Custom Footer

You can project custom content into the footer of the `up-window-angular` component using `ng-template`. This allows for more flexible designs in your window. Here’s how to use it:

#### Example of Custom Footer

```html
<up-window-angular
  [isOpen]="isWindowOpenExample"
  title="Window Title"
  subtitle="This is the subtitle of the window."
>
  Window Example content!

  <ng-template footer>
    <button class="custom-btn" (click)="isWindowOpenExample.set(false)">
      Close
    </button>
    <span>Custom footer content!</span>
  </ng-template>
</up-window-angular>
```
