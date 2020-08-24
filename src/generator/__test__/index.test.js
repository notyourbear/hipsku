import { enableFetchMocks } from "jest-fetch-mock";
import { countSyllables } from "../utils";
import generateHaiku, { pickWord, generateLine } from "../index";

enableFetchMocks();

const state = {
  the: ["the quick", "the other", "the side"],
  quick: ["quick brown", "quick helper", "quick result"],
  other: ["other side", "other person", "other team"],
  side: ["side hussle", "side project", "side car"],
};

describe("pickWord", () => {
  it("picks a word with the correct syllable count", () => {
    const words = { the: [], quicker: [], puppydog: [] };
    expect(pickWord(words, 1)).toBe("the");
    expect(pickWord(words, 2)).toBe("quicker");
    expect(pickWord(words, 3)).toBe("puppydog");
  });
});

describe("generateLine", () => {
  it("returns correct amount of syllables per line", () => {
    const threeLiner = generateLine(state, 3);
    const fiveLiner = generateLine(state, 5);

    expect(countSyllables(threeLiner)).toEqual(3);
    expect(countSyllables(fiveLiner)).toEqual(5);
  });
});

describe("generateHaiku", () => {
  it("returns a haiku from the mockded data", async () => {
    const haiku = await generateHaiku();
    expect(countSyllables(haiku[0])).toEqual(3);
    expect(countSyllables(haiku[1])).toEqual(5);
    expect(countSyllables(haiku[2])).toEqual(3);
  });
});
