import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  signal,
} from '@angular/core';

@Component({
  selector: 'up-window-angular',
  templateUrl: './up-window-angular.component.html',
  styleUrls: ['./up-window-angular.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UpWindowAngularComponent implements OnInit {
  @Input() size: string | undefined;
  @Input() class: string | undefined;

  ngOnInit(): void {}

  public techClass(name: string): string[] {
    const className = name?.toLowerCase() || '';
    return [this.class || '', className];
  }
}
