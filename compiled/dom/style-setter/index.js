"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStyles = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var setStyles = function setStyles(_ref) {
  var node = _ref.node,
      oldValue = _ref.oldValue,
      newValue = _ref.newValue;
  var notPixelDependent = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
  node.style.cssText = newValue || '';

  if (newValue && _typeof(newValue) === 'object') {
    if (typeof oldValue !== 'string') {
      for (var styleProp in oldValue) {
        if (!(styleProp in newValue)) node.style[styleProp] = '';
      }
    }

    for (var _styleProp in newValue) {
      node.style[_styleProp] = !isNaN(newValue[_styleProp]) && !notPixelDependent.test(_styleProp) ? newValue[_styleProp] + 'px' : newValue[_styleProp];
    }
  }
};

exports.setStyles = setStyles;