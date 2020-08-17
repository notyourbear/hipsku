import syllable from "syllable";
import markovChain from "./markov";
import { sample } from "./utils";
import fetchData from "../api";

const LINECOUNT = [3, 5, 3];

// selects a single word with a specific syllable count
// used in generateLine to add additional syllables, if necessary
export const pickWord = (state = {}, syllableCount = 1) => {
  let words = Object.keys(state);
  let word = words[0];

  while (syllable(word) !== syllableCount) {
    let { index, value } = sample(words);
    words = [...words.slice(0, index), ...words.slice(index + 1)];
    word = value;
  }

  return word;
};

// creates a haiku line from the passed in markov chain
export const generateLine = (state = {}, syllableCount = 3) => {
  const stateValues = Object.values(state);

  let count = 0;
  let phrase = "";

  while (count < syllableCount) {
    let lineOptions = sample(stateValues);
    const { value } = sample(lineOptions.value);
    const addedSyllables = syllable(value);

    if (count + addedSyllables <= syllableCount) {
      count += addedSyllables;
      phrase = `${value} ${phrase}`;
    }

    if (syllableCount - count === 1) {
      const word = pickWord(state);
      count += 1;
      phrase = `${phrase}${word}`;
    }
  }

  return phrase.trim();
};

// returns a haiku form an api call
const generateHaiku = () => {
  return fetchData(50).then((data) => {
    const state = markovChain(data, 1);
    const poem = LINECOUNT.reduce(
      (acc, count) => [...acc, generateLine(state, count)],
      []
    );

    return poem;
  });
};

export default generateHaiku;
