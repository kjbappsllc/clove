"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "setAttribute", {
  enumerable: true,
  get: function get() {
    return _attrSetter.setAttribute;
  }
});
Object.defineProperty(exports, "handleEventListener", {
  enumerable: true,
  get: function get() {
    return _eventHandler.handleEventListener;
  }
});
Object.defineProperty(exports, "createNode", {
  enumerable: true,
  get: function get() {
    return _nodeCreator.createNode;
  }
});
Object.defineProperty(exports, "removeNode", {
  enumerable: true,
  get: function get() {
    return _nodeRemover.removeNode;
  }
});
Object.defineProperty(exports, "setRef", {
  enumerable: true,
  get: function get() {
    return _referenceSetter.setRef;
  }
});
Object.defineProperty(exports, "setStyle", {
  enumerable: true,
  get: function get() {
    return _styleSetter.setStyle;
  }
});
Object.defineProperty(exports, "createText", {
  enumerable: true,
  get: function get() {
    return _textCreator.createText;
  }
});

var _attrSetter = require("./attr-setter");

var _eventHandler = require("./event-handler");

var _nodeCreator = require("./node-creator");

var _nodeRemover = require("./node-remover");

var _referenceSetter = require("./reference-setter");

var _styleSetter = require("./style-setter");

var _textCreator = require("./text-creator");