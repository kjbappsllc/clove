"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeNode = void 0;

var removeNode = function removeNode(_ref) {
  var node = _ref.node;
  var parent = node.parentNode;
  if (parent) parent.removeChild(node);
};

exports.removeNode = removeNode;