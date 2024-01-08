const calculator = require("../src/calculator");

test("Add of two Int numbers", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test("Subtract", () => {
  expect(calculator.subtract(2, 2)).toEqual(0);
});

test("Multiply", () => {
  expect(calculator.multiply(1, 2)).toEqual(2);
});

test("Division", () => {
  expect(calculator.divide(1, 2)).toEqual(0.5);
});

test("Divide with 0", () => {
  expect(calculator.divide(1, 0)).toEqual("Can't Divide a Number by 0");
});

test("Add of two string numbers", () => {
    expect(calculator.add('1', '2')).toEqual(3);
  });