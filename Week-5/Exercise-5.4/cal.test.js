const { add, sub, mul } = require("./cal");

describe("Calculator testing", () => {
  test("Adding two numbers", () => {
    var res = add(4, 8);
    expect(res).toBe(12);
  });

  test("Subtracting two numbers", () => {
    var res = sub(8, 4);
    expect(res).toBe(4);
  });

  test("Multiplying two numbers", () => {
    var res = mul(2, 4);
    expect(res).toBe(8);
  });
});
