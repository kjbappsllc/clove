"use strict";

var _ = require(".");

var _chai = require("chai");

describe('DOM - style-setter', function () {
  it('Should add to cssText with the value being inline string css', function (done) {
    var node = document.createElement('div');
    var newValueCssText = "background-color: green;";
    (0, _.setStyles)({
      node: node,
      oldValue: null,
      newValue: newValueCssText
    });
    (0, _chai.expect)(node.style.cssText).to.be.equal(newValueCssText);
    done();
  });
  it('Should set cssText back to empty if new value is null', function (done) {
    var node = document.createElement('div');
    var oldValueCssText = "background-color: green;";
    node.style.cssText = oldValueCssText;
    (0, _.setStyles)({
      node: node,
      oldValue: oldValueCssText,
      newValue: null
    });
    (0, _chai.expect)(node.style.cssText).to.be.equal('');
    done();
  });
  it('Should set the appropriate style in cssText and in the css prop list when old value is null and new value is an object', function (done) {
    var node = document.createElement('div');
    var newValueCssObj = {
      backgroundColor: 'green'
    };
    (0, _.setStyles)({
      node: node,
      oldValue: null,
      newValue: newValueCssObj
    });
    (0, _chai.expect)(node.style.cssText).to.be.equal('background-color: green;');
    (0, _chai.expect)(node.style.backgroundColor).to.be.equal('green');
    done();
  });
  it('Should appropriately change style in cssText and in the css prop list when old value is not null and new value is an object', function (done) {
    var node = document.createElement('div');
    var oldValueCssText = "background-color: green;";
    node.style.cssText = oldValueCssText;
    var newValueCssObj = {
      backgroundColor: 'blue'
    };
    (0, _.setStyles)({
      node: node,
      oldValue: oldValueCssText,
      newValue: newValueCssObj
    });
    (0, _chai.expect)(node.style.cssText).to.be.equal('background-color: blue;');
    (0, _chai.expect)(node.style.backgroundColor).to.be.equal('blue');
    done();
  });
  it('Should add a pixel value to style properties that need pixels values', function (done) {
    var node = document.createElement('div');
    var newValueCssObj = {
      height: 10,
      width: 10
    };
    (0, _.setStyles)({
      node: node,
      oldValue: null,
      newValue: newValueCssObj
    });
    (0, _chai.expect)(node.style.cssText).to.not.equal('');
    (0, _chai.expect)(node.style.height).to.be.equal('10px');
    (0, _chai.expect)(node.style.width).to.be.equal('10px');
    done();
  });
  it('Should not add a pixel value to style properties who are not pixel dependent', function (done) {
    var node = document.createElement('div');
    var newValueCssObj = {
      opacity: 0.10,
      zIndex: 5
    };
    (0, _.setStyles)({
      node: node,
      oldValue: null,
      newValue: newValueCssObj
    });
    (0, _chai.expect)(node.style.cssText).to.not.equal('');
    (0, _chai.expect)(node.style.opacity).to.be.equal('0.1');
    (0, _chai.expect)(node.style.zIndex).to.be.equal('5');
    done();
  });
  it('Should remove an old value when the new value does not contain the style anymore', function (done) {
    var node = document.createElement('div');
    var oldValue = "background-color: green";
    var newValueCssObj = {
      opacity: 0.10
    };
    node.style.cssText = oldValue;
    (0, _.setStyles)({
      node: node,
      oldValue: oldValue,
      newValue: newValueCssObj
    });
    (0, _chai.expect)(node.style.cssText).to.not.equal('');
    (0, _chai.expect)(node.style.opacity).to.be.equal('0.1');
    (0, _chai.expect)(node.style.backgroundColor).to.be.equal('');
    done();
  });
});