/// <reference path="../../tsd.d.ts" />

import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';

import {Alert} from '../../components/index';

// webpack html imports
let doc = require('../../components/alert/readme.md');

@Component({
  selector: 'alert-demo'
})
@View({
  template: `
  <section id="alert">
    <div class="page-header">
      <h1>
        Alert
        <small>(<a href="https://github.com/valor-software/ng2-bootstrap/blob/master/components/alert/alert.ts">src</a>)</small>
      </h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <span *ng-if="name">Hello, {{name}}!</span>
        <alert dismiss-on-timeout="3000">This alert will dismiss in 3s</alert>
        <alert *ng-for="#alert of alerts;#i = index" [type]="alert.type" (close)="closeAlert(i)">{{ alert.msg }}</alert>
        <div></div>
        <button type="button" class='btn btn-primary' (click)="addAlert()">Add Alert</button>
      </div>
      <div class="col-md-6">${doc}</div>
    </div>
  </section>
  `,
  directives: [Alert, CORE_DIRECTIVES]
})
export class AlertDemo {
  alerts:Array<Object>;

  constructor() {
    this.alerts = [
      {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
      {type: 'success', msg: 'Well done! You successfully read this important alert message.', closable: true}
    ];
  }

  closeAlert(i:number) {
    this.alerts.splice(i, 1);
  }

  addAlert() {
    this.alerts.push({msg: 'Another alert!', closable: true});
  }
}
