# like-button

## Platform Support

This library can be used in the **browser** only.

## Installation

Installing this module is fairly simple.

Run `jspm install github:egeland/aurelia-facebook` from your project root.

## Usage

### Configuring the plugin

Make sure your project uses a `main.js` file to initialize aurelia.
In your configure function, add the following:

```js
  aurelia.use.plugin('doktordirk/aurelia-facebook')
```

### LikeButton

In your view

```html
  <like-button homepage.bind="homepageUrl"></like-button>
```

In your view-model class

```js
  homepageUrl = 'http://the-page-you-like.com'
```
