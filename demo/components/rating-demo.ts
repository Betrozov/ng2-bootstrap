/// <reference path="../../tsd.d.ts" />

import {Component, View, bootstrap,
  NgClass, NgStyle,
  CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {Rating} from '../../components/index';

let template = `
  <h4>Default</h4>
  <rating [(ng-model)]="rate" [max]="max" [readonly]="isReadonly" (on-hover)="hoveringOver($event)" (on-leave)="test($event)" [titles]="['one','two','three']" ></rating>
  <span class="label" [ng-class]="{'label-warning': percent<30, 'label-info': percent>=30 && percent<70, 'label-success': percent>=70}" [ng-style]="{display: (overStar && !isReadonly) ? 'inline' : 'none'}">{{percent}}%</span>

  <pre class="card card-block card-header" style="margin:15px 0;">Rate: <b>{{rate}}</b> - Readonly is: <i>{{isReadonly}}</i> - Hovering over: <b>{{overStar || "none"}}</b></pre>

  <button type="button" class="btn btn-sm btn-danger" (click)="rate = 0"  [disabled]="isReadonly">Clear</button>
  <button type="button" class="btn btn-sm btn-primary" (click)="isReadonly = ! isReadonly">Toggle Readonly</button>
  <hr />

  <h4>Custom icons</h4>
  <div>
    <rating [(ng-model)]="x" max="15" state-on="glyphicon-ok-sign" state-off="glyphicon-ok-circle"></rating> <b>(<i>Rate:</i> {{x}})</b>
  </div>
  <div>
    <rating [(ng-model)]="y" [rating-states]="ratingStates"></rating> <b>(<i>Rate:</i> {{y}})</b>
  </div>`;

// webpack html imports
let doc = require('../../components/rating/readme.md');

@Component({
  selector: 'rating-demo'
})
@View({
  template: `
  <section id="rating">
    <div class="page-header">
      <h1>
        Rating
        <small>(<a href="https://github.com/valor-software/ng2-bootstrap/blob/master/components/rating/rating.ts">src</a>)</small>
      </h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        ${template}
      </div>
      <div class="col-md-6">${doc}</div>
    </div>
  </section>`,
  directives: [Rating, NgClass, NgStyle, FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class RatingDemo {
  private x = 5;
  private y = 2;
  private max = 10;
  private rate = 7;
  private isReadonly = false;

  private overStar:number;
  private percent:number;

  private ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];

  private hoveringOver(value:number) {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  private test() {
    this.overStar = null;
  }
}
