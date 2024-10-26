import { Component } from '@angular/core';
import { AnimationComponent } from './examples/animation/animation.component';
import { ModeComponent } from './examples/mode/mode.component';
import { ActionsComponent } from './examples/actions/actions.component';
import { NucleusAngularApp } from 'nucleus-angular';

import pkg from '../../package.json';
import pkgNPM from '../../projects/up-window-angular/package.json';
import { ExampleComponent } from './app.example';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AnimationComponent,
    ActionsComponent,
    ModeComponent,
    NucleusAngularApp,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public appVersion;
  public angularVersion;
  public configNucleus: {
    name: string;
    github: string;
    npm: string;
    appVersion: string;
    angularVersion: string;
    stepsInstall: Array<{ name: string; language: string; content: string }>;
  };

  constructor() {
    this.appVersion = pkgNPM.version;
    this.angularVersion = pkg.dependencies?.['@angular/core'].replace('^', '');
    this.configNucleus = {
      name: 'up-window-angular',
      github: 'https://github.com/criar-art/up-window-angular',
      npm: 'https://www.npmjs.com/package/up-window-angular',
      appVersion: this.appVersion,
      angularVersion: this.angularVersion,
      stepsInstall: [
        {
          name: 'Install',
          language: 'bash',
          content: 'npm install up-window-angular',
        },
        {
          name: 'Usage',
          language: 'tsx',
          content: ExampleComponent,
        },
      ],
    };
  }
}
