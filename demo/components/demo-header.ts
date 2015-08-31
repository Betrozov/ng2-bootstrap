/// <reference path="../../tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Collapse, dropdown} from '../../components/index';

@Component({
  selector: 'demo-header'
})
@View({
  template: `
  <header class="navbar navbar-default navbar-fixed-top navbar-inner">
    <div class="container">
      <div class="navbar-header hidden-md-up">
        <button type="button" class="navbar-toggle" (^click)="isCollapsed = !isCollapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand visible-xs" href="#">ng2-bootstrap</a>
      </div>
      <nav class="hidden-xs hidden-xs-down">
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
      <nav class="visible-xs hidden-md-up">
        <ul class="nav navbar-nav scrollable-menu" [collapse]="!isCollapsed" (^click)="isCollapsed = !isCollapsed">
          <li><a href="#getting_started">Getting started</a></li>
          <li><a href="#accordion">Accordion</a></li>
          <li><a href="#alert">Alert</a></li>
          <li><a href="#buttons">Buttons</a></li>
          <li><a href="#carousel">Carousel</a></li>
          <li><a href="#collapse">Collapse</a></li>
          <li><a href="#datepicker">Datepicker</a></li>
          <li><a href="#dropdown">Dropdown</a></li>
          <li><a href="#modal">Modal</a></li>
          <li><a href="#pagination">Pagination</a></li>
          <li><a href="#popover">Popover</a></li>
          <li><a href="#progressbar">Progressbar</a></li>
          <li><a href="#rating">Rating</a></li>
          <li><a href="#tabs">Tabs</a></li>
          <li><a href="#timepicker">Timepicker</a></li>
          <li><a href="#tooltip">Tooltip</a></li>
          <li><a href="#typeahead">Typeahead</a></li>
        </ul>
      </nav>
    </div>
  </header>`,
  directives: [
    Collapse,
    dropdown
  ]
})
export class DemoHeader {
}
