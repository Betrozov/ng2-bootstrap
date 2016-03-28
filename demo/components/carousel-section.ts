import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {TAB_DIRECTIVES} from '../../ng2-bootstrap';
import {CarouselDemo} from './carousel/carousel-demo';
import {DemoSection} from './demo-section';

// webpack html imports
let doc = require('../../components/carousel/readme.md');
let titleDoc = require('../../components/carousel/title.md');

let ts = require('!!prismjs?lang=typescript!./carousel/carousel-demo.ts');
let html = require('!!prismjs?lang=markup!./carousel/carousel-demo.html');

@Component({
  selector: 'carousel-section',
  directives: [DemoSection, CarouselDemo, TAB_DIRECTIVES, CORE_DIRECTIVES],
  template: `
    <demo-section [name]="name" [src]="src" [titleDoc]="titleDoc" [html]="html" [ts]="ts" [doc]="doc">
      <carousel-demo></carousel-demo>
    </demo-section>`
})

export class CarouselSection {
  private name:string = 'Carousel';
  private src:string = 'https://github.com/valor-software/ng2-bootstrap/blob/master/components/carousel';
  private html:string = html;
  private ts:string = ts;
  private titleDoc:string = titleDoc;
  private doc:string = doc;
}
