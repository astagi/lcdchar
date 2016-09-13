import { Component } from '@angular/core';
import {PixelSwitch} from '../components/pixel-switch';
import {Pixel} from '../models/pixel';


@Component({
  selector: 'lcdchar-app',
  template: `
    <pixel-switch *ngFor="let pixel of pixels" [pixel]="pixel"></pixel-switch>
    <div *ngFor="let pixel of pixels">{{pixel.value}}</div>

  `
})
export class LcdChar {
    pixels: Pixel[] = [new Pixel(false), new Pixel(false), new Pixel(false)];
}
