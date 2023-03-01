import { combineArrays } from "./combineArrays.js";

test("combines two sorted arrays", () => {
  const arrOne = [1, 4, 7, 20];
  const arrTwo = [3, 5, 6];
  const expected = [1, 3, 4, 5, 6, 7, 20];

  const result = combineArrays(arrOne, arrTwo);

  expect(result).toMatchObject(expected);
});
