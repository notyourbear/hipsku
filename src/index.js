import generateHaiku, { generateLine } from "./generator";

const querySelectors = [".line-1", ".line-2", ".line-3"];

generateHaiku().then((hipsku) => {
  querySelectors.forEach(
    (selector, index) =>
      (document.querySelector(selector).innerHTML = hipsku[index])
  );
});
