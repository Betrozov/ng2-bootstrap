/// <reference path="../../tsd.d.ts" />

import {Component, View, NgFor, bootstrap, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {carousel} from '../../components/index';

let template = `
<div class="row">
  <div>
    <carousel [interval]="myInterval" [no-wrap]="noWrapSlides">
      <slide *ng-for="#slidez of slides; #index=index" [active]="slidez.active">
        <img [src]="slidez.image" style="margin:auto;">
        <div class="carousel-caption">
          <h4>Slide {{index}}</h4>
          <p>{{slidez.text}}</p>
        </div>
      </slide>
    </carousel>
    <br>
  </div>
  <div class="row">
    <div class="col-md-6">
      <button type="button" class="btn btn-info" (click)="addSlide()">Add Slide</button><br><br>
      <button type="button" class="btn btn-info" (click)="removeSlide(2)">Remove Slide#3</button><br><br>
      <div class="checkbox">
        <label>
          <input type="checkbox" [(ng-model)]="noWrapSlides">
          Disable Slide Looping
        </label>
      </div>
    </div>
    <div class="col-md-6">
      Interval, in milliseconds: <input type="number" class="form-control" [(ng-model)]="myInterval">
      <br />Enter a negative number or 0 to stop the interval.
    </div>
  </div>
</div>
`;

// webpack html imports
let doc = require('../../components/carousel/readme.md');

@Component({
  selector: 'carousel-demo'
})
@View({
  template:  `
  <section id="carousel">
    <div class="page-header">
      <h1>
        Carousel
        <small>(<a href="https://github.com/valor-software/ng2-bootstrap/blob/master/components/carousel/carousel.ts">src</a>)</small>
      </h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        ${template}
      </div>
      <div class="col-md-6">${doc}</div>
    </div>
  </section>`,
  directives: [carousel, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CarouselDemo {
  private myInterval:number = 5000;
  private noWrapSlides:boolean = false;
  private slides:Array<any> = [];

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }

  private addSlide() {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  private removeSlide(index) {
    this.slides.splice(index, 1);
  }
}
