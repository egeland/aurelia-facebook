import {DOM} from 'aurelia-pal';
import {StageComponent} from './../component-tester';

describe('like-button', () => {
  let component;

  beforeAll( done => {
    component = StageComponent
      .withResources('src/like-button')
      .inView('<like-button homepage.bind="boundValue"></like-button>')
      .boundTo({boundValue: 'http://example.com'});

    component.bootstrap(aurelia => {
      aurelia.use.standardConfiguration();
    });

    component.create().then(done);
  });

  it('bind homepage to data-href', () => {
    let likeButton = component.element.querySelectorAll('.fb-like')[0];
    expect(likeButton.getAttribute('data-href'))
      .toBe('http://example.com');
  });

  it('attach facebook-jssdk script', () => {
    let jssdk = DOM.querySelectorAll('#facebook-jssdk')[0];
    expect(jssdk).toBeDefined();
    expect(jssdk.getAttribute('src'))
      .toBe('//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0');
  });

  it('attach fb-root script', done => {
    setTimeout(() => {
      let fbRoot = DOM.querySelectorAll('#fb-root')[0];
      expect(fbRoot).toBeDefined();
      expect(fbRoot.getAttribute('class').trim()).toBe('fb_reset');
      done();
    }, 3000);
  });
});
