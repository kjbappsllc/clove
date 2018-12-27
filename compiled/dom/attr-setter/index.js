"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAttribute = void 0;

var setAttribute = function setAttribute(_ref) {
  var node = _ref.node,
      propertyName = _ref.propertyName,
      newValue = _ref.newValue;
  var propToAttributeMap = {
    className: 'class'
  };
  var attributeName = propToAttributeMap[propertyName] || propertyName;

  if (newValue) {
    if (node[propertyName] !== void 0) {
      node.setAttribute(attributeName, newValue);
    }
  } else {
    node.removeAttribute(attributeName);
  }
};

exports.setAttribute = setAttribute;