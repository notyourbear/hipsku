import markovChain from "./markov";
import api from "../api";

const generate = () => {
  return api.fetchData(50).then((data) => {
    const state = markovChain(data);
    return state;
  });
};

export default generate;
