const URL = "https://hipsum.co/api/?type=hipster-centric&sentences=";
import MOCKDATA from "./mockData";

export const fetchData = (sentenceNumber = 50) =>
  fetch(`${URL}${sentenceNumber}`)
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        // the api _currently_ returns the data as an array with a single entry
        return data[0];
      }
      return data;
    })
    .catch((e) => {
      return MOCKDATA;
    });

export default fetchData;
