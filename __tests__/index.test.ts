import Optional from "../src";

describe("of", () => {
  test("of case 1", () => {
    expect(Optional.of(1).get()).toBe(1);
  });
  // test("sum case 1", () => {
  //   expect(sum(1, 2)).toBe(3);
  // });
  // test("sum case 2", () => {
  //   expect(sum(1, -2)).toBe(-1);
  // });
  // test("sum case 3", () => {
  //   expect(sum(-1, -2)).toBe(-3);
  // });
});

describe("subtraction", () => {
  // test("subtraction case 1", () => {
  //   expect(subtraction(1, 2)).toBe(-1);
  // });
  // test("subtraction case 2", () => {
  //   expect(subtraction(1, -2)).toBe(3);
  // });
  // test("subtraction case 3", () => {
  //   expect(subtraction(-1, -2)).toBe(1);
  // });
});
