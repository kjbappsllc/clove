"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVNodeTree = void 0;

var _vnodeCreater = require("./vnode-creater");

/*
    Simple example:
    {
        node: 'div',
        onClick: () => {console.log('clicked')},
        className: 'test-class'
        children: 5 / [5]
    }
*/
var createVNodeTree = function createVNodeTree(_ref) {
  var tree = _ref.tree;

  var last = function last(arr) {
    return arr[arr.length - 1];
  };

  var iterateChildren = function iterateChildren(children) {
    if (!children) {
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

  var traverse = function traverse(node) {
    if (!isNaN(node) || typeof node === 'string') {
      return String(node);
    }

    var childrenStack = iterateChildren(node.children);
    var children = [];

    while (childrenStack.length) {
      var child = childrenStack.pop();
      var VNode = traverse(child);

      if (typeof VNode === 'string' && typeof last(children) === 'string') {
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