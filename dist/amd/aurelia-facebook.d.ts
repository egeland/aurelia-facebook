declare module 'aurelia-facebook' {
  import {
    bindable,
    customElement
  } from 'aurelia-templating';
  import {
    DOM
  } from 'aurelia-pal';
  export function configure(config: any): any;
  export class LikeButton {
    homepage: any;
    attached(): any;
  }
}