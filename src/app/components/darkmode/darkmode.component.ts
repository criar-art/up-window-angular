import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DarkmodeComponent implements OnInit {

  @Input() hiddenLabel: boolean | undefined;

  constructor() { }

  modeLocal = localStorage.getItem('darkmode')
  mode = this.modeLocal == null ? false : JSON.parse(this.modeLocal)

  toggleMode = () => {
    this.mode = !this.mode
    this.setMode(this.mode)
  }

  setMode = (value: boolean) => {
    localStorage.setItem('darkmode', JSON.stringify(value))

    if(value) {
      document.body.classList.add('darkmode')
      document.body.classList.remove('lightmode')
    } else {
      document.body.classList.add('lightmode')
      document.body.classList.remove('darkmode')
    }
  }

  ngOnInit(): void {
    this.setMode(this.mode)
  }

}
