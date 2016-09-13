import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LcdChar }  from './app/lcdchar';
import {PixelSwitch} from './components/pixel-switch';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ LcdChar, PixelSwitch ],
  bootstrap: [ LcdChar ]
})
export class AppModule { }