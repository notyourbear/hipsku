import { randomInt, sample, countSyllables } from "../utils";

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

describe("countSyllables", () => {
  it("returns a value from the dictionary", () => {
    expect(countSyllables("axe")).toBe(1);
  });

  it("returns a value not in the dictionary", () => {
    expect(countSyllables("hello")).toBe(2);
  });
});
