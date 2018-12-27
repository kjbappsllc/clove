"use strict";

var _ = require(".");

var _chai = require("chai");

describe('DOM - attr-setter', function () {
  it('Should set an attribute that is defined for that html element', function (done) {
    var node = document.createElement('div');
    (0, _.setAttribute)({
      node: node,
      propertyName: 'id',
      newValue: 'test-id'
    });
    (0, _chai.expect)('id' in node).to.be.true;
    done();
  });
  it('Should not set an attribute that is not defined for that html element', function (done) {
    var node = document.createElement('div');
    (0, _.setAttribute)({
      node: node,
      propertyName: 'value',
      newValue: 'test-value'
    });
    (0, _chai.expect)('value' in node).to.be.false;
    done();
  });
  it('Should remove an attribute when the newValue is null', function (done) {
    var node = document.createElement('div');
    (0, _.setAttribute)({
      node: node,
      propertyName: 'id',
      newValue: 'test-id'
    });
    (0, _.setAttribute)({
      node: node,
      propertyName: 'id',
      newValue: null
    });
    (0, _chai.expect)('value' in node).to.be.false;
    done();
  });
  it('Should correctly map dom properties to attribute names if they differ', function (done) {
    var node = document.createElement('div');
    (0, _.setAttribute)({
      node: node,
      propertyName: 'className',
      newValue: 'test-class'
    });
    (0, _chai.expect)(node.hasAttribute('class')).to.be.true;
    done();
  });
});