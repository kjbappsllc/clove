"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleEventListener = void 0;

var handleEventListener = function handleEventListener(_ref) {
  var node = _ref.node,
      eventName = _ref.eventName,
      oldValue = _ref.oldValue,
      newValue = _ref.newValue;
  node._listeners || (node._listeners = {});

  var proxy = function proxy(e) {
    return node._listeners[e.type].handler(e);
  };

  var domEventName = eventName.toLowerCase().substring(2);

  if (newValue) {
    if (!oldValue) {
      node._listeners[domEventName] = {};
      node.addEventListener(domEventName, proxy);
      node._listeners[domEventName].handler = newValue;

      node._listeners[domEventName].removeListener = function () {
        return node.removeEventListener(domEventName, proxy);
      };
    }
  } else {
    node._listeners[domEventName] && node._listeners[domEventName].removeListener();
    node._listeners[domEventName] = undefined;
    node._listeners = JSON.parse(JSON.stringify(node._listeners));
  }
};

exports.handleEventListener = handleEventListener;