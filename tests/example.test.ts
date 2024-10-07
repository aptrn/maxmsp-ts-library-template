import * as myLib from "../src";

describe("test example", () => {
  it("should print hello world", () => {
    let out = myLib.printHelloWorld();
    expect(out).toBe("hello world");
  });
});
