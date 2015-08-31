/// <reference path="../tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

import {Ng2BootstrapConfig, Ng2BootstrapTheme} from '../components/index';

if (window && window['__theme'] === 'bs4') {
  Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;
}

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

import {DemoHeader} from './components/demo-header';

@Component({
  selector: 'app'
})
@View({
  template: `
  <demo-header>Loading header</demo-header>

  <main class="text-center header">
    <h2 class="project-tagline">Native Angular2 directives for Bootstrap</h2>
    <a class="btn btn-primary btn-lg" href="https://github.com/valor-software/ng2-bootstrap">View on GitHub</a>

  </main>

  <div class="container">
    <h1>Available with:</h1>
    <a class="btn btn-primary btn-lg" href="/">Bootstrap 3</a>
    <a class="btn btn-primary btn-lg" href="./index-bs4.html">Bootstrap 4</a>
    <alert-demo class="col-md-12"></alert-demo>
  </div>

  <div class="container" hidden>
    <accordion-demo class="col-md-12"></accordion-demo>
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
    DemoHeader,

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
    TooltipDemo
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
