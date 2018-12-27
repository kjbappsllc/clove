"use strict";

var _ = require(".");

var _chai = require("chai");

describe('DOM - node-creator', function () {
  it('Should create normal dom element when passed a defined tag', function (done) {
    var node = (0, _.createNode)({
      nodeName: 'div'
    });
    (0, _chai.expect)(node.tagName).to.be.equal('DIV');
    done();
  });
});