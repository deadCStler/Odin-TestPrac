const analyzeArray = require("../src/analyzeArray");

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

test("Average", () => {
  expect(object.average()).toEqual(4);
});

test("Minimum", () => {
  expect(object.min()).toEqual(1);
});

test("Maximum", () => {
  expect(object.max()).toEqual(8);
});

test("Length", () => {
  expect(object.length()).toEqual(6);
});
