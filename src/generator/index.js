import markovChain from "./markov";
import { sample, countSyllables, randomInt } from "./utils";
import fetchData from "../api";

const LINECOUNT = [3, 5, 3];

// selects a single word with a specific syllable count
// used in generateLine to add additional syllables, if necessary
export const pickWord = (state = {}, desiredSyllableCount = 1) => {
  let words = Object.keys(state);
  let word = sample(words);

  while (countSyllables(word.value) !== desiredSyllableCount) {
    words = [...words.slice(0, word.index), ...words.slice(word.index + 1)];
    word = sample(words);
  }

  return word.value;
};

// creates a haiku line from the passed in markov chain
export const generateLine = (state = {}, syllableCount = 3) => {
  const stateValues = Object.values(state);

  let count = 0;
  let phrase = "";

  while (count < syllableCount) {
    let lineOptions = sample(stateValues);
    const { value } = sample(lineOptions.value);
    const addedSyllables = countSyllables(value);

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
    const states = [
      markovChain(data, 1),
      markovChain(data, 2),
      markovChain(data, 1),
    ];
    const poem = LINECOUNT.reduce(
      (acc, count, i) => [...acc, generateLine(states[i], count)],
      []
    );

    return poem;
  });
};

export default generateHaiku;
