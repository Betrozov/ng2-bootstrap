export enum Ng2BootstrapTheme {BS3, BS4}

export class Ng2BootstrapConfig {
  private static _theme: Ng2BootstrapTheme;
  static get theme():Ng2BootstrapTheme {
    return this._theme || Ng2BootstrapTheme.BS3;
  }
  static set theme(v:Ng2BootstrapTheme){
    this._theme = v;
  }
}
