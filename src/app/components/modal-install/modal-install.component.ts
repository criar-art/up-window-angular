import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AppCodeComponent } from '../app-code/app-code.component';

@Component({
  selector: 'app-modal-install',
  standalone: true,
  templateUrl: './modal-install.component.html',
  styleUrl: './modal-install.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [AppCodeComponent],
})
export class ModalinstallComponent {
  @Input() active: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  codeExample: string = `import { UpWindowAngularModule } from 'up-window-angular';

// Example of imports within @NgModule or @Component
// imports: [ UpWindowAngularModule ]

<up-window-angular name="angular" />`;
}
