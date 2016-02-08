import {Component} from 'angular2/core';
import {View} from 'angular2/core';

import {PixelSwitch} from './pixel_switch';


@Component({
  selector: 'lcdchar-app',
  directives: [PixelSwitch],
  template: `
    <pixel-switch *ngFor="#pixel of pixels" [pixel]="pixel"></pixel-switch>
  `
})
export class LcdCharApp {
  pixels: boolean[] = [false, true, false];
}
