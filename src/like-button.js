import {bindable, customElement} from 'aurelia-templating';
import {DOM} from 'aurelia-pal';

@customElement('like-button')
export class LikeButton {

  // the homepage url to be liked
  @bindable homepage;

  attached() {
    // check if script alread attached
    let id = 'facebook-jssdk';
    if (DOM.getElementById(id)) return;

    // attach fb connect script
    let js = DOM.createElement('script');
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0';
    DOM.appendNode(js, DOM.body);
  }
}
