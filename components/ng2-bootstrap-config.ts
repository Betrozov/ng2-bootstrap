export enum Theme {BS3, BS4}

export interface Window {
  __theme: string;
}

export class Ng2BootstrapConfig {
  private static _theme: Theme;
  static get theme():Theme {
    return this._theme || window.__theme === 'bs4' ? Theme.BS4 : Theme.BS3;
  }
  static set theme(v:Theme){
    this._theme = v;
  }
}
