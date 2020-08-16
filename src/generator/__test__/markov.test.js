import markovChain from "../markov";

const TEST_TEXT = "the quick brown fox jumps over the lazy dog";

describe("markovChain", () => {
  it("creates a default markov state", () => {
    const state = markovChain(TEST_TEXT);
    expect(Object.keys(state).length).toBe(TEST_TEXT.split(" ").length - 1);
    expect(state.the.length).toBe(2);
    expect(state.quick[0]).toEqual("quick brown");
  });
});
