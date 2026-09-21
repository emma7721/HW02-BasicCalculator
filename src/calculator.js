function assertNumber(value, name) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new TypeError(`${name} must be a finite number`);
  }
}

function add(left, right) {
  assertNumber(left, "left");
  assertNumber(right, "right");
  return left + right;
}

function subtract(left, right) {
  assertNumber(left, "left");
  assertNumber(right, "right");
  return left - right;
}

function multiply(left, right) {
  assertNumber(left, "left");
  assertNumber(right, "right");
  return left * right;
}

function divide(left, right) {
  assertNumber(left, "left");
  assertNumber(right, "right");
  if (right === 0) {
    throw new RangeError("Cannot divide by zero");
  }
  return left / right;
}

module.exports = { add, subtract, multiply, divide };
