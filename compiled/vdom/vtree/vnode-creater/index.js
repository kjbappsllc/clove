"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVNode = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VNode = function VNode() {
  _classCallCheck(this, VNode);
};

var createVNode = function createVNode(_ref) {
  var vNodeName = _ref.vNodeName,
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === void 0 ? undefined : _ref$attributes,
      _ref$key = _ref.key,
      key = _ref$key === void 0 ? null : _ref$key,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? [] : _ref$children;
  var newVNode = new VNode();
  newVNode.vNodeName = vNodeName;
  newVNode.attributes = attributes;
  newVNode.key = key;
  newVNode.children = children;
  return newVNode;
};

exports.createVNode = createVNode;