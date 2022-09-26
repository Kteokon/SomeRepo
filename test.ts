import "mocha";
import {assert} from "chai";

describe("Addition function", function() {

    it("2 + 4 = 6", function() {
      assert.equal(2 + 4, 6);
    });
  
    it("2 + (-14) = -12", function() {
      assert.equal(2 - 14, -12);
    });

    it("2 + 4 != 43", function() {
      assert.notEqual(2 + 4, 43);
    });

    it("Failed test", function() {
      assert.equal(2 + 4, 7);
    });
  });