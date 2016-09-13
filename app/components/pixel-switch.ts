import { Component, Input } from '@angular/core';
import {Pixel} from '../models/pixel';


@Component({
  selector: 'pixel-switch',
  template: `
    <span (click)="toggle()">{{pixel.value ? '1' : '0'}}</span>
  `
})
export class PixelSwitch {
  @Input() pixel: Pixel;

  toggle() {
    this.pixel.toggle();
  }
}