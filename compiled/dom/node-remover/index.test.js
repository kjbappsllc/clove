"use strict";

var _ = require(".");

var _chai = require("chai");

describe('DOM - node-remover', function () {
  it('Should remove a normal dom element from its parent', function (done) {
    var parent = document.createElement('div');
    var child = document.createTextNode('Test');
    parent.appendChild(child);
    (0, _.removeNode)({
      node: child
    });
    (0, _chai.expect)(parent.children.length).to.be.equal(0, "Child node length should be equal to zero");
    done();
  });
  it('Should not remove a normal dom element if it does not have a parent', function (done) {
    var parent = document.createElement('div');
    (0, _.removeNode)({
      node: parent
    });
    (0, _chai.expect)(parent).to.exist;
    done();
  });
});