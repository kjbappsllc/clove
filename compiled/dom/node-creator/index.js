"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNode = void 0;

var createNode = function createNode(_ref) {
  var nodeName = _ref.nodeName;
  return document.createElement(nodeName);
};

exports.createNode = createNode;