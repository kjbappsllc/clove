"use strict";

var _vtreeCreator = require("./vdom/vtree-creator");

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var container = function container(_ref) {
  _objectDestructuringEmpty(_ref);

  return {
    node: 'div',
    onClick: function onClick() {
      console.log('clicked');
    },
    className: 'test-class',
    children: [5, 6, "hello", {
      node: 'div',
      className: 'div-test-class',
      children: [{
        node: 'div',
        className: 'nested-test-class'
      }]
    }, "Test"]
  };
};

var element = (0, _vtreeCreator.createVNodeTree)({
  tree: container({})
});
console.log(element);