/* @jest-environment node */

import { useGetDataFetcher } from "./useGetDataFetcher";

it("calls the expected URL on fetch", async () => {
  jest.spyOn(global, "fetch").mockImplementation(
    jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ myKey: "my value" }),
      })
    ) as jest.Mock
  );

  const result = await useGetDataFetcher();

  expect(global.fetch).toHaveBeenCalledWith(
    "https://pokeapi.co/api/v2/pokemon/ditto"
  );

	expect(result).toEqual({ myKey: "my value" })
});
