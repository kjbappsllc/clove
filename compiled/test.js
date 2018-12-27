"use strict";

var _treeCreator = require("./vdom/tree-creator");

var _vnodeCreater = require("./vdom/vnode-creater");

var createTree = (0, _treeCreator.createVNodeTree)({
  createVNode: _vnodeCreater.createVNode
});
var node = {
  node: 'div',
  onClick: function onClick() {
    console.log('clicked');
  },
  className: 'test-class',
  children: [5]
};
createTree({
  tree: node
});