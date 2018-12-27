"use strict";

var _ = require(".");

var _chai = require("chai");

var _testUtils = require("../../utils/test-utils");

describe('DOM - event-handler', function () {
  it('Should add a ._listeners property on a dom element', function (done) {
    var node = document.createElement('div');
    var eventName = 'onClick';
    var oldValue = void 0;

    var newValue = function newValue() {};

    (0, _.handleEventListener)({
      node: node,
      eventName: eventName,
      oldValue: oldValue,
      newValue: newValue
    });
    (0, _chai.expect)(node._listeners).to.exist;
    done();
  });
  it('Should set appropriate dom event in ._listeners', function (done) {
    var node = document.createElement('div');
    var eventName = 'onClick';
    var expectedDomEventName = 'click';
    var oldValue = void 0;

    var newValue = function newValue() {};

    (0, _.handleEventListener)({
      node: node,
      eventName: eventName,
      oldValue: oldValue,
      newValue: newValue
    });
    (0, _chai.expect)(node._listeners[expectedDomEventName]).to.exist;
    done();
  });
  it('Should register an event listener in the dom when there is no old value for the node and there exists a new value', function (done) {
    var firstEventClicked = false;
    var node = document.createElement('div');
    var eventName = 'onClick';
    var oldValue = void 0;

    var newValue = function newValue() {
      firstEventClicked = true;
    };

    (0, _.handleEventListener)({
      node: node,
      eventName: eventName,
      oldValue: oldValue,
      newValue: newValue
    });
    (0, _testUtils.simulateClick)({
      node: node
    });
    (0, _chai.expect)(firstEventClicked).to.be.true;
    done();
  });
  it('Should not add additional event listener if there exists an old value', function (done) {
    var firstEventClicked = false;
    var node = document.createElement('div');
    var eventName = 'onClick';

    var oldValue = function oldValue() {};

    var newValue = function newValue() {
      firstEventClicked = true;
    };

    (0, _.handleEventListener)({
      node: node,
      eventName: eventName,
      oldValue: oldValue,
      newValue: newValue
    });
    (0, _testUtils.simulateClick)({
      node: node
    });
    (0, _chai.expect)(firstEventClicked).to.be.false;
    done();
  });
  it('Should remove appropriate event listener from dom if the new value is null', function (done) {
    var firstEventClicked = false;
    var node = document.createElement('div');
    var eventName = 'onClick';

    var oldValue = function oldValue() {
      firstEventClicked = !firstEventClicked;
    };

    (0, _.handleEventListener)({
      node: node,
      eventName: eventName,
      oldValue: null,
      newValue: oldValue
    });
    (0, _testUtils.simulateClick)({
      node: node
    });
    (0, _chai.expect)(firstEventClicked).to.be.true;
    (0, _.handleEventListener)({
      node: node,
      eventName: eventName,
      oldValue: oldValue,
      newValue: null
    });
    (0, _testUtils.simulateClick)({
      node: node
    });
    (0, _chai.expect)(firstEventClicked).to.be.true;
    done();
  });
  it('Should remove dom event key from ._listeners in dom element if the new value is null', function (done) {
    var node = document.createElement('div');
    var eventName = 'onClick';
    var expectedDomEventName = 'click';

    var oldValue = function oldValue() {};

    (0, _.handleEventListener)({
      node: node,
      eventName: eventName,
      oldValue: null,
      newValue: oldValue
    });
    (0, _.handleEventListener)({
      node: node,
      eventName: eventName,
      oldValue: oldValue,
      newValue: null
    });
    (0, _chai.expect)(node._listeners[expectedDomEventName]).to.be.undefined;
    done();
  });
});