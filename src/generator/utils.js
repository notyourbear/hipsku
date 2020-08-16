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

export default {
  sample,
};
