"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVNodeTree = void 0;

var _vnodeCreater = require("./vnode-creater");

var _childIterator = require("./child-iterator");

/*
    Simple example:
    {
        node: 'div',
        onClick: () => {console.log('clicked')},
        className: 'test-class'
        children: 5
    }
*/
var createVNodeTree = function createVNodeTree(_ref) {
  var tree = _ref.tree;

  var last = function last(arr) {
    return arr[arr.length - 1];
  };

  var traverse = function traverse(node) {
    if (!isNaN(node) || typeof node === 'string') {
      return String(node);
    }

    var childrenStack = (0, _childIterator.iterateChildren)(node.children);
    var children = [];

    while (childrenStack.length) {
      var child = childrenStack.pop();
      var VNode = traverse(child);

      if (typeof VNode === 'string' && typeof children[children.length - 1] === 'string') {
        children[children.length - 1] += VNode;
      } else {
        children.push(VNode);
      }
    }

    var vNodeName = node.node;
    var attributes = Object.keys(node).reduce(function (result, key) {
      if (!['node', 'children'].includes(key)) {
        result[key] = node[key];
      }

      return result;
    }, {});
    var key = node.key;
    return (0, _vnodeCreater.createVNode)({
      vNodeName: vNodeName,
      attributes: attributes,
      key: key,
      children: children
    });
  };

  return traverse(tree);
};

exports.createVNodeTree = createVNodeTree;