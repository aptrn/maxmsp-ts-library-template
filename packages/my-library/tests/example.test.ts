import * as myLib from "../src";

describe("test example", () => {
  it("should say hi from typescript", () => {
    let out = myLib.greet();
    expect(out).toBe("Hello! Writing from typescript!");
  });
});
