"use strict";

var _ = require(".");

var _chai = require("chai");

describe('DOM - reference-setter', function () {
  it('Should create a variable that references a dom element', function (done) {
    var node = document.createElement('div');
    node.textContent = "hello";
    var referenceNode = null;

    var refFunc = function refFunc(ref) {
      return referenceNode = ref;
    };

    (0, _.setRef)({
      node: node,
      oldValue: null,
      newValue: refFunc
    });
    (0, _chai.expect)(referenceNode).to.not.be.null;
    (0, _chai.expect)(referenceNode.textContent).to.be.equal("hello");
    done();
  });
  it('Should replace a previous ref with null when set to a new one', function (done) {
    var node = document.createElement('div');
    node.textContent = "hello";
    var referenceNode = null;
    var referenceNode2 = null;

    var refFunc = function refFunc(ref) {
      return referenceNode = ref;
    };

    (0, _.setRef)({
      node: node,
      oldValue: null,
      newValue: refFunc
    });
    (0, _chai.expect)(referenceNode).to.not.be.null;
    (0, _chai.expect)(referenceNode.textContent).to.be.equal("hello");

    var secondRefFunc = function secondRefFunc(ref) {
      return referenceNode2 = ref;
    };

    (0, _.setRef)({
      node: node,
      oldValue: refFunc,
      newValue: secondRefFunc
    });
    (0, _chai.expect)(referenceNode).to.be.null;
    (0, _chai.expect)(referenceNode2).to.not.be.null;
    (0, _chai.expect)(referenceNode2.textContent).to.be.equal("hello");
    done();
  });
});