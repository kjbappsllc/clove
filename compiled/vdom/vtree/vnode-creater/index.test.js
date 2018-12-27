"use strict";

var _ = require(".");

var _chai = require("chai");

describe('VDOM-VTREE - vnode-creator', function () {
  it('Should create normal vdom element when passed the neccesarry parameters', function (done) {
    var node = (0, _.createVNode)({
      vNodeName: 'div',
      attributes: {
        className: 'test'
      },
      key: 1,
      children: []
    });
    (0, _chai.expect)(node.vNodeName).to.be.equal('div');
    (0, _chai.expect)(node.attributes).to.be.eql({
      className: 'test'
    });
    (0, _chai.expect)(node.key).to.be.equal(1);
    (0, _chai.expect)(node.children).to.be.eql([]);
    done();
  });
});