import { pickWord, generateLine, generateHaiku } from "../index";

describe("pickWord", () => {
  it("picks a word with the correct syllable count", () => {
    const words = { the: [], quicker: [], puppydog: [] };
    expect(pickWord(words, 1)).toBe("the");
    expect(pickWord(words, 2)).toBe("quicker");
    expect(pickWord(words, 3)).toBe("puppydog");
  });
});
