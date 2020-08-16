import { randomInt, sample } from "../utils";

describe("randomInt", () => {
  it("returns a number between 1 and 3", () => {
    const value = randomInt(1, 3);
    expect(value >= 1).toBe(true);
    expect(value <= 3).toBe(true);
  });
});

describe("sample", () => {
  it("returns the first element of an array of length 1", () => {
    const array = [1];
    expect(sample(array).value).toBe(1);
    expect(sample(array).index).toBe(0);
  });

  it("returns an value from an array", () => {
    const array = [1, 2, 3, 4];
    const { value, index } = sample(array);
    expect(array.includes(value)).toBe(true);
    expect(array[index]).toBe(value);
  });
});
