"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterateChildren = void 0;

var iterateChildren = function iterateChildren(_ref) {
  var children = _ref.children;

  if (children === null || !children && isNaN(parseInt(children))) {
    return [];
  }

  if (children.constructor !== Array) {
    return [children];
  }

  var stack = [];

  for (var i = children.length; i-- > 0;) {
    stack.push(children[i]);
  }

  return stack;
};

exports.iterateChildren = iterateChildren;