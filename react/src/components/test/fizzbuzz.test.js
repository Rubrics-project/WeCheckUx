const fizzbuzz = require("../src/fizzbuzz");
describe("function fizzbuzz", () => {
  it("function declared", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("function return fizz if the number is multiple 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect (fizzbuzz(6)).toBe("fizz");
    expect (fizzbuzz(9)).toBe("fizz");
  });
  it("function return buzz if the number is multiple 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    
  });

  it("function return fizzbuzz if the number is multiple 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  })
});