const myFunctions = require("./practice.js");

test("Testing sum -- success", () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test("Testing divide -- success", () => {
  const target = 0.5;
  const result = myFunctions.div(5, 10);
  expect(target).toBe(result);
});

test("Testing divide -- success", () => {
  const target = Infinity;
  const result = myFunctions.div(5, 0);
  expect(target).toBe(result);
});

test("Testing text contains a number -- success", () => {
  const result = myFunctions.containsNumbers("1 2 4 5 house");
  expect(result).toBeTruthy();
});

test("Testing text contains a number -- success", () => {
  const result = myFunctions.containsNumbers("3");
  expect(result).toBeTruthy();
});
