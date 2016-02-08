import {Component, Input} from 'angular2/core';
import {View} from 'angular2/core';

@Component({
    selector: 'pixel-switch',
    template: `
      <span (click)="toggle()">{{pixel ? '1' : '0'}}</span>
    `
})
export class PixelSwitch {
  @Input() pixel: boolean;

  toggle() {
    this.pixel = !this.pixel;
  }
}