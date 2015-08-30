/// <reference path="../../tsd.d.ts" />

import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

import {Collapse} from '../../components/index';

let template = `
  <div>
    <button type="button" class="btn btn-primary"
      (click)="isCollapsed = !isCollapsed">Toggle collapse</button>
    <hr>
    <div [collapse]="isCollapsed" class="card card-block card-header">
      <div class="well well-lg">Some content</div>
    </div>
  </div>`;

// webpack html imports
let doc = require('../../components/collapse/readme.md');

@Component({
  selector: 'collapse-demo'
})
@View({
  template: `
  <section id="collapse">
    <div class="page-header">
      <h1>
        Collapse
        <small>(<a href="https://github.com/valor-software/ng2-bootstrap/blob/master/components/collapse/collapse.ts">src</a>)</small>
      </h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        ${template}
      </div>
      <div class="col-md-6">${doc}</div>
    </div>
  </section>`,
  directives: [Collapse, CORE_DIRECTIVES]
})
export class CollapseDemo {
  public isCollapsed:boolean = false;
}
