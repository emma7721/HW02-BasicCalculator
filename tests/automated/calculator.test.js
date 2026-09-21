const test = require("node:test");
const assert = require("node:assert/strict");
const { add, subtract, multiply, divide } = require("../../src/calculator");

test("TC-CALC-001: adds two valid numbers", () => {
  assert.equal(add(12, 8), 20);
});

test("TC-CALC-002: rejects division by zero", () => {
  assert.throws(() => divide(10, 0), {
    name: "RangeError",
    message: "Cannot divide by zero"
  });
});

test("TC-CALC-003: rejects non-numeric operands", () => {
  assert.throws(() => multiply("2", 3), {
    name: "TypeError",
    message: "left must be a finite number"
  });
});

test("supports remaining basic operations", () => {
  assert.equal(subtract(12, 8), 4);
  assert.equal(divide(20, 4), 5);
});
