"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createText = void 0;

var createText = function createText(_ref) {
  var value = _ref.value;
  var text = String(value);
  return document.createTextNode(text);
};

exports.createText = createText;