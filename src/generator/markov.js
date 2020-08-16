const markovChain = (sentences = "", cognitionLevel = 1) => {
  const state = {};

  const arrayOfWords = sentences.split(" ");

  arrayOfWords.forEach((word, index, array) => {
    if (!state[word]) {
      state[word] = [];
    }

    const phrase = array.slice(index, index + cognitionLevel + 1).join(" ");

    const isPhraseRecorded = state[word].includes(phrase);
    if (!isPhraseRecorded) {
      state[word] = [...state[word], phrase];
    }
  });

  return state;
};

export default markovChain;
