'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LikeButton = undefined;

var _dec, _class, _desc, _value, _class2, _descriptor;

exports.configure = configure;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaPal = require('aurelia-pal');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function configure(config) {
  config.globalResources('./like-button');
}

var LikeButton = exports.LikeButton = (_dec = (0, _aureliaTemplating.customElement)('like-button'), _dec(_class = (_class2 = function () {
  function LikeButton() {
    _classCallCheck(this, LikeButton);

    _initDefineProp(this, 'homepage', _descriptor, this);
  }

  LikeButton.prototype.attached = function attached() {
    var id = 'facebook-jssdk';
    if (_aureliaPal.DOM.getElementById(id)) return;

    var js = _aureliaPal.DOM.createElement('script');
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0';
    _aureliaPal.DOM.appendNode(js, _aureliaPal.DOM.body);
  };

  return LikeButton;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'homepage', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class2)) || _class);