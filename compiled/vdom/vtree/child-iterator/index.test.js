"use strict";

var _ = require(".");

var _chai = require("chai");

describe('VDOM-VTREE - child-iterator', function () {
  it('Should create a child stack from normal array', function (done) {
    var children = [1, 2, 3];
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql([3, 2, 1]);
    done();
  });
  it('Should create a child stack from a number', function (done) {
    var children = 5;
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql([5]);
    children = 0;
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql([0]);
    children = NaN;
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql([]);
    done();
  });
  it('Should create a child stack from a string', function (done) {
    var children = 'Hello';
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql(['Hello']);
    done();
  });
  it('Should create a child stack from an object', function (done) {
    var children = {
      test: 'Hello'
    };
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql([{
      test: 'Hello'
    }]);
    done();
  });
  it('Should create an empty child stack with a falsey children param', function (done) {
    var children = null;
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql([]);
    children = undefined;
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql([]);
    children = '';
    (0, _chai.expect)((0, _.iterateChildren)({
      children: children
    })).to.be.eql([]);
    done();
  });
});