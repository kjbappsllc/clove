"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simulateClick = void 0;

var simulateClick = function simulateClick(_ref) {
  var node = _ref.node;
  var evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 20
  });
  node.dispatchEvent(evt);
};

exports.simulateClick = simulateClick;