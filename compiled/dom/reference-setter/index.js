"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRef = void 0;

var setRef = function setRef(_ref) {
  var node = _ref.node,
      oldValue = _ref.oldValue,
      newValue = _ref.newValue;

  var applyRef = function applyRef(refFunc, nodeRef) {
    if (refFunc && typeof refFunc === 'function') refFunc(nodeRef);
  };

  applyRef(oldValue, null);
  applyRef(newValue, node);
};

exports.setRef = setRef;