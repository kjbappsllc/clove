"use strict";

var _ = require(".");

var _chai = require("chai");

describe('DOM - text-creator', function () {
  it('Should create a dom text element with the specified value', function (done) {
    var textElement = (0, _.createText)({
      value: 'test'
    });
    (0, _chai.expect)(textElement.data).to.be.equal('test', "Should equal the string that was passed into createText");
    done();
  });
  it('Should create a text element from a value that is not a string', function (done) {
    var textElement = (0, _.createText)({
      value: [1, 2, 3]
    });
    (0, _chai.expect)(textElement.data).to.be.equal('1,2,3', "Should of converted the value into a string");
    done();
  });
});