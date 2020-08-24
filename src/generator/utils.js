import { DICTIONARY } from "./dictionary";
import syllable from "syllable";

export const randomInt = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const sample = (array = []) => {
  const min = 0;
  const max = array.length - 1;
  const index = randomInt(min, max);

  return {
    value: array[index],
    index,
  };
};

export const countSyllables = (word = "") => {
  return word.split(" ").reduce((sum, word) => {
    const count = DICTIONARY[word.toLowerCase()] || syllable(word);
    return sum + count;
  }, 0);
};

export default {
  sample,
};
