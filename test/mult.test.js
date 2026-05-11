const mult = require("../src/mult");

test("mult de 2 e 3 deve ser 6", () => {
  expect(mult(2, 3)).toBe(6);
});