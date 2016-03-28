import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {TAB_DIRECTIVES} from '../../ng2-bootstrap';
import {TypeaheadDemo} from './typeahead/typeahead-demo';
import {DemoSection} from './demo-section';

// webpack html imports
let doc = require('../../components/typeahead/readme.md');
let titleDoc = require('../../components/typeahead/title.md');

let ts = require('!!prismjs?lang=typescript!./typeahead/typeahead-demo.ts');
let html = require('!!prismjs?lang=markup!./typeahead/typeahead-demo.html');

@Component({
  selector: 'typeahead-section',
  directives: [DemoSection, TypeaheadDemo, TAB_DIRECTIVES, CORE_DIRECTIVES],
  template: `
    <demo-section [name]="name" [src]="src" [titleDoc]="titleDoc" [html]="html" [ts]="ts" [doc]="doc">
      <typeahead-demo></typeahead-demo>
    </demo-section>`
})

export class TypeaheadSection {
  private name:string = 'Typeahead';
  private src:string = 'https://github.com/valor-software/ng2-bootstrap/blob/master/components/typeahead';
  private html:string = html;
  private ts:string = ts;
  private titleDoc:string = titleDoc;
  private doc:string = doc;
}
