/// <reference path="../../tsd.d.ts" />

import {Component, View, bootstrap,
  CORE_DIRECTIVES, FORM_DIRECTIVES,
  NgClass
} from 'angular2/angular2';

import {accordion} from '../../components/index';

// webpack html imports
let doc = require('../../components/accordion/readme.md');

@Component({
  selector: 'accordion-demo'
})
@View({
  template: `
  <section id="accordion">
    <div class="page-header">
      <h1>
        Accordion
        <small>(<a href="https://github.com/valor-software/ng2-bootstrap/blob/master/components/accordion/accordion.ts">src</a>)</small>
      </h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p>
          <button type="button" class="btn btn-primary btn-sm"
            (click)="status.open = !status.open">Toggle last panel</button>
          <button type="button" class="btn btn-primary btn-sm"
            (click)="status.isFirstDisabled = ! status.isFirstDisabled">Enable / Disable first panel</button>
        </p>

        <div class="checkbox">
          <label>
            <input type="checkbox" [(ng-model)]="oneAtATime">
            Open only one at a time
          </label>
        </div>
        <accordion [close-others]="oneAtATime">
          <accordion-group heading="Static Header, initially expanded"
            [is-open]="status.isFirstOpen"
            [is-disabled]="status.isFirstDisabled">
            This content is straight in the template.
          </accordion-group>
          <accordion-group heading="{{group.title}}" *ng-for="#group of groups">
            {{group.content}}
          </accordion-group>
          <accordion-group heading="Dynamic Body Content">
            <p>The body of the accordion group grows to fit the contents</p>
              <button type="button" class="btn btn-primary btn-sm" (click)="addItem()">Add Item</button>
              <div *ng-for="#item of items">{{item}}</div>
          </accordion-group>
          <accordion-group [is-open]="status.open">
              <template accordion-heading>
                  I can have markup, too! <i class="pull-right glyphicon"
                  [ng-class]="{'glyphicon-chevron-down': isOpen, 'glyphicon-chevron-right': !isOpen}"></i>
              </template>
              This is just some content to illustrate fancy headings.
          </accordion-group>
        </accordion>
      </div>
      <div class="col-md-6">${doc}</div>
    </div>
  </section>
  `,
  directives: [accordion, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class AccordionDemo {
  public oneAtATime:boolean = true;
  public groups:Array<any> = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];
  public items:Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  public status:Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public addItem() {
    this.items.push(`Items ${this.items.length + 1}`);
  }
}
