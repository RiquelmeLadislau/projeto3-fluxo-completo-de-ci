const sum = require("../src/sum");

test("soma 2 + 3 = 5", () => {
  expect(sum(2, 3)).toBe(5);
});