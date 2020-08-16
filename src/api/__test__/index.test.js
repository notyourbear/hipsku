import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

import fetchData from "../index";
import mockData from "../mockData";

describe("fetchData", () => {
  beforeEach(() => {
    fetchMock.mockReject();
  });

  it("returns mock data if fetch fails", async () => {
    const result = await fetchData();
    await expect(result).toEqual(mockData);
  });
});
