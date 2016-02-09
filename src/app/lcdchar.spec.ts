/// <reference path="../../typings/jasmine/jasmine.d.ts" />


import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {LcdCharApp} from './lcdchar';

describe('LcdCharApp', () => {

  let app: LcdCharApp;

  beforeEach(function() {
    app = new LcdCharApp();
  });

  it('should have name property', function() {
    expect(app.pixels[0]).toBe(false);
  });

});