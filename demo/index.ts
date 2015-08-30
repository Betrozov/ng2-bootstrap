/// <reference path="../tsd.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

import {Collapse, dropdown} from '../components/index';

import {AccordionDemo} from './components/accordion-demo';
import {AlertDemo} from './components/alert-demo';
import {ButtonsDemo} from './components/buttons-demo';
import {DropdownDemo} from './components/dropdown-demo';
import {CarouselDemo} from './components/carousel-demo';
import {CollapseDemo} from './components/collapse-demo';
import {PaginationDemo} from './components/pagination-demo';
import {ProgressbarDemo} from './components/progressbar-demo';
import {RatingDemo} from './components/rating-demo';
import {TabsDemo} from './components/tabs-demo';
import {TimepickerDemo} from './components/timepicker-demo';
import {TooltipDemo} from './components/tooltip-demo';

@Component({
  selector: 'app'
})
@View({
  template: `
  <header class="navbar navbar-default navbar-fixed-top navbar-inner">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" (^click)="isCollapsed = !isCollapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand visible-xs" href="#">ng2-bootstrap</a>
      </div>
      <nav class="hidden-xs">
        <ul class="nav navbar-nav">
          <a href="#top" role="button" class="navbar-brand">ng2-bootstrap</a>
          <li class="dropdown" dropdown>
            <a role="button" class="dropdown-toggle" dropdown-toggle>
              Directives <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#accordion">Accordion</a></li>
              <li><a href="#alert">Alert</a></li>
              <li><a href="#buttons">Buttons</a></li>
              <li><a href="#carousel">Carousel</a></li>
              <li><a href="#collapse">Collapse</a></li>
              <!--<li><a href="#datepicker">Datepicker</a></li>-->
              <li><a href="#dropdown">Dropdown</a></li>
              <!--<li><a href="#modal">Modal</a></li>-->
              <li><a href="#pagination">Pagination</a></li>
              <!--<li><a href="#popover">Popover</a></li>-->
              <li><a href="#progressbar">Progressbar</a></li>
              <li><a href="#rating">Rating</a></li>
              <li><a href="#tabs">Tabs</a></li>
              <li><a href="#timepicker">Timepicker</a></li>
              <li><a href="#tooltip">Tooltip</a></li>
              <!--<li><a href="#typeahead">Typeahead</a></li>-->
            </ul>
          </li>
          <li><a href="#getting_started">Getting started</a></li>
        </ul>
      </nav>
      <nav class="visible-xs" [collapse]="!isCollapsed">
        <ul class="nav navbar-nav" (^click)="isCollapsed = !isCollapsed">
          <li><a href="#getting_started">Getting started</a></li>
          <li><a href="#accordion">Accordion</a></li>
          <li><a href="#alert">Alert</a></li>
          <li><a href="#buttons">Buttons</a></li>
          <li><a href="#carousel">Carousel</a></li>
          <li><a href="#collapse">Collapse</a></li>
          <!--<li><a href="#datepicker">Datepicker</a></li>-->
          <li><a href="#dropdown">Dropdown</a></li>
          <!--<li><a href="#modal">Modal</a></li>-->
          <li><a href="#pagination">Pagination</a></li>
          <!--<li><a href="#popover">Popover</a></li>-->
          <li><a href="#progressbar">Progressbar</a></li>
          <li><a href="#rating">Rating</a></li>
          <li><a href="#tabs">Tabs</a></li>
          <li><a href="#timepicker">Timepicker</a></li>
          <li><a href="#tooltip">Tooltip</a></li>
          <!--<li><a href="#typeahead">Typeahead</a></li>-->
        </ul>
      </nav>
    </div>
  </header>

  <main class="text-center header">
    <h2 class="project-tagline">Native Angular2 directives for Bootstrap</h2>
    <a class="btn btn-primary btn-lg" href="https://github.com/valor-software/ng2-bootstrap">View on GitHub</a>
       View in:
    <a class="btn btn-primary btn-lg" href="./index.html">Bootstrap 3</a>
    <a class="btn btn-primary btn-lg" href="./index-bs4.html">Bootstrap 4</a>
  </main>

  <div class="container">
    <accordion-demo class="col-md-12"></accordion-demo>
    <alert-demo class="col-md-12"></alert-demo>
    <buttons-demo class="col-md-12"></buttons-demo>
    <carousel-demo class="col-md-12"></carousel-demo>
    <collapse-demo class="col-md-12"></collapse-demo>
    <dropdown-demo class="col-md-12"></dropdown-demo>
    <pagination-demo class="col-md-12"></pagination-demo>
    <progressbar-demo class="col-md-12"></progressbar-demo>
    <rating-demo class="col-md-12"></rating-demo>
    <tabs-demo class="col-md-12"></tabs-demo>
    <timepicker-demo class="col-md-12"></timepicker-demo>
    <tooltip-demo class="col-md-12"></tooltip-demo>
  </div>

  <footer class="footer">
    <div class="container">
      <p class="text-muted text-center"><a href="https://github.com/valor-software/ng2-bootstrap">ng2-bootstrap</a> is maintained by <a href="https://github.com/valor-software">valor-software</a>.</p>
    </div>
  </footer>
  `,
  directives: [
    AlertDemo,
    AccordionDemo,
    ButtonsDemo,
    DropdownDemo,
    CarouselDemo,
    CollapseDemo,
    PaginationDemo,
    ProgressbarDemo,
    RatingDemo,
    TabsDemo,
    TimepickerDemo, // --issue in safari with Intl
    TooltipDemo,

    Collapse,
    dropdown
  ]
})
export class Home {
}

bootstrap(Home);


// "demo/index.ts",
//  "demo/typings/es6-object.d.ts",
//  "demo/components/accordion-demo.ts",
//  "demo/components/alert-demo.ts",
//  "demo/components/buttons-demo.ts",
//  "demo/components/dropdown-demo.ts",
//  "demo/components/collapse-demo.ts",
//  "demo/components/pagination-demo.ts",
//  "demo/components/progressbar-demo.ts",
//  "demo/components/rating-demo.ts",
//  "demo/components/tabs-demo.ts",
//  "demo/components/timepicker-demo.ts",
//  "demo/components/tooltip-demo.ts"
