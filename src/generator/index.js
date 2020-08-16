import syllable from "syllable";
import markovChain from "./markov";
import { sample } from "./utils";
import fetchData from "../api";

const LINECOUNT = [3, 5, 3];

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

export const generateLine = (state = {}, syllableCount = 3) => {
  const stateValues = Object.values(state);

  let count = 0;
  let phrase = "";

  while (count < syllableCount) {
    let lineOptions = sample(stateValues);
    const { value } = sample(lineOptions.value);
    console.log({ lineOptions, value });

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

const generateHaiku = () => {
  return fetchData(50).then((data) => {
    const state = markovChain(data, 1);
    const line = generateLine(state);
    const poem = LINECOUNT.reduce(
      (acc, count) => [...acc, generateLine(state, count)],
      []
    );
    console.log({ poem });
    return state;
  });
};

export default generateHaiku;
