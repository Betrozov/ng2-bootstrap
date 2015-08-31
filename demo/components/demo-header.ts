/// <reference path="../../tsd.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Collapse, dropdown, Ng2BootstrapConfig, Ng2BootstrapTheme} from '../../components/index';

let templates = {
  [Ng2BootstrapTheme.BS3]: `
    <header class="navbar navbar-default navbar-fixed-top navbar-inner bg-faded">
    <div class="container">
      <div class="navbar-header hidden-md-up">
        <button type="button" class="navbar-toggle navbar-toggler pull-right" (^click)="isCollapsed = !isCollapsed">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand visible-xs" href="#">ng2-bootstrap</a>
      </div>
      <nav class="hidden-xs hidden-xs-down">
        <ul class="nav navbar-nav">
          <li class="nav-item"><a href="#top" role="button" class="navbar-brand">ng2-bootstrap</a></li>
          <li class="nav-item dropdown" dropdown>
            <a role="button" class="nav-link dropdown-toggle" dropdown-toggle>
              Directives <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#accordion">Accordion</a></li>
              <li><a class="dropdown-item" href="#alert">Alert</a></li>
              <li><a class="dropdown-item" href="#buttons">Buttons</a></li>
              <li><a class="dropdown-item" href="#carousel">Carousel</a></li>
              <li><a class="dropdown-item" href="#collapse">Collapse</a></li>
              <!--<li><a class="dropdown-item" href="#datepicker">Datepicker</a></li>-->
              <li><a class="dropdown-item" href="#dropdown">Dropdown</a></li>
              <!--<li><a class="dropdown-item" href="#modal">Modal</a></li>-->
              <li><a class="dropdown-item" href="#pagination">Pagination</a></li>
              <!--<li><a class="dropdown-item" href="#popover">Popover</a></li>-->
              <li><a class="dropdown-item" href="#progressbar">Progressbar</a></li>
              <li><a class="dropdown-item" href="#rating">Rating</a></li>
              <li><a class="dropdown-item" href="#tabs">Tabs</a></li>
              <li><a class="dropdown-item" href="#timepicker">Timepicker</a></li>
              <li><a class="dropdown-item" href="#tooltip">Tooltip</a></li>
              <!--<li><a class="dropdown-item" href="#typeahead">Typeahead</a></li>-->
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="#getting_started">Getting started</a></li>
          <li class="nav-item"><a class="nav-link" href="#migration">Migration</a></li>
        </ul>
      </nav>
      <nav class="visible-xs hidden-md-up">
        <ul class="nav nav-pills nav-stacked scrollable-menu" [collapse]="!isCollapsed" (^click)="isCollapsed = !isCollapsed">
          <li class="nav-item"><a class="nav-link" href="#getting_started">Getting started</a></li>
          <li class="nav-item"><a class="nav-link" href="#migration">Migration</a></li>
          <li class="nav-item"><a class="nav-link" href="#accordion">Accordion</a></li>
          <li class="nav-item"><a class="nav-link" href="#alert">Alert</a></li>
          <li class="nav-item"><a class="nav-link" href="#buttons">Buttons</a></li>
          <li class="nav-item"><a class="nav-link" href="#carousel">Carousel</a></li>
          <li class="nav-item"><a class="nav-link" href="#collapse">Collapse</a></li>
          <!--<li class="nav-item"><a class="nav-link" href="#datepicker">Datepicker</a></li>-->
          <li class="nav-item"><a class="nav-link" href="#dropdown">Dropdown</a></li>
          <!--<li class="nav-item"><a class="nav-link" href="#modal">Modal</a></li>-->
          <li class="nav-item"><a class="nav-link" href="#pagination">Pagination</a></li>
          <!--<li class="nav-item"><a class="nav-link" href="#popover">Popover</a></li>-->
          <li class="nav-item"><a class="nav-link" href="#progressbar">Progressbar</a></li>
          <li class="nav-item"><a class="nav-link" href="#rating">Rating</a></li>
          <li class="nav-item"><a class="nav-link" href="#tabs">Tabs</a></li>
          <li class="nav-item"><a class="nav-link" href="#timepicker">Timepicker</a></li>
          <li class="nav-item"><a class="nav-link" href="#tooltip">Tooltip</a></li>
          <!--<li class="nav-item"><a class="nav-link" href="#typeahead">Typeahead</a></li>-->
          <li class="nav-item"><a class="dropdown-item">&nbsp;</a></li>
        </ul>
      </nav>
    </div>
  </header>`,
  [Ng2BootstrapTheme.BS4]: `
  <header class="navbar navbar-default navbar-fixed-top navbar-inner bg-faded">
  <div class="container">
    <nav>
      <ul class="nav navbar-nav">
        <li><a href="#top" role="button" class="navbar-brand">ng2-bootstrap</a></li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item"><a class="nav-link" href="#getting_started">Getting started</a></li>
        <li class="nav-item"><a class="nav-link" href="#migration">Migration</a></li>
      </ul>
    </nav>
  </div>
  </header>
  `
};

@Component({
  selector: 'demo-header'
})
@View({
  //template: templates[Ng2BootstrapConfig.theme],
  template: templates[Ng2BootstrapTheme.BS3],
  directives: [
    Collapse,
    dropdown
  ]
})
export class DemoHeader {
}
