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

1. **`@Input() title: string = 'Default Title';`**
   - Example: Set the title of the window.
   ```html
   <up-window-angular title="My Custom Title" ...></up-window-angular>
   ```

2. **`@Input() subtitle: string = 'Default Subtitle';`**
   - Example: Set the subtitle of the window.
   ```html
   <up-window-angular subtitle="This is a custom subtitle" ...></up-window-angular>
   ```

3. **`@Input() size: string = 'medium';`**
   - Example: Change the size of the window to large.
   ```html
   <up-window-angular size="large" ...></up-window-angular>
   ```

4. **`@Input() class: string | undefined;`**
   - Example: Add custom CSS classes.
   ```html
   <up-window-angular class="custom-window-class" ...></up-window-angular>
   ```

5. **`@Input() isOpen: WritableSignal<boolean> = signal(false);`**
   - Example: Control the visibility of the window.
   ```typescript
   this.isWindowOpenExample.set(true); // Opens the window
   ```

6. **`@Input() animation: string = 'fade';`**
   - Example: Set a different animation type.
   ```html
   <up-window-angular animation="slide" ...></up-window-angular>
   ```

7. **`@Input() restrictMode: boolean = false;`**
   - Example: Enable restricted mode.
   ```html
   <up-window-angular restrictMode="true" ...></up-window-angular>
   ```

8. **`@Input() fullScreen: boolean = false;`**
   - Example: Enable fullscreen mode for the window.
   ```html
   <up-window-angular [fullScreen]="true" ...></up-window-angular>
   ```

9. **`@Input() confirmText: string = 'Confirm';`**
   - Example: Customize the confirm button text.
   ```html
   <up-window-angular confirmText="Agree" ...></up-window-angular>
   ```

10. **`@Input() cancelText: string = 'Cancel';`**
    - Example: Customize the cancel button text.
    ```html
    <up-window-angular cancelText="Dismiss" ...></up-window-angular>
    ```

11. **`@Input() confirmType: string = 'primary';`**
    - Example: Set the style of the confirm button.
    ```html
    <up-window-angular confirmType="success" ...></up-window-angular>
    ```

12. **`@Input() cancelType: string = 'default';`**
    - Example: Set the style of the cancel button.
    ```html
    <up-window-angular cancelType="danger" ...></up-window-angular>
    ```

13. **`@Input() buttonAlignment: 'start' | 'end' | 'center' = 'end';`**
    - Example: Align the buttons to the center.
    ```html
    <up-window-angular buttonAlignment="center" ...></up-window-angular>
    ```

14. **`@Input() onConfirmClick: () => void = () => this.onConfirm();`**
    - Example: Custom confirm action.
    ```typescript
    onConfirm() {
      console.log('Confirmed!');
    }
    ```

15. **`@Input() onCancelClick: () => void = () => this.onCancel();`**
    - Example: Custom cancel action.
    ```typescript
    onCancel() {
      console.log('Cancelled!');
    }
    ```

### Outputs

1. **`@Output() confirm = new EventEmitter<void>();`**
   - Example: Emit an event when confirm is clicked.
   ```typescript
   this.confirm.subscribe(() => {
     console.log('Confirmed action triggered');
   });
   ```

2. **`@Output() cancel = new EventEmitter<void>();`**
   - Example: Emit an event when cancel is clicked.
   ```typescript
   this.cancel.subscribe(() => {
     console.log('Cancel action triggered');
   });
   ```
