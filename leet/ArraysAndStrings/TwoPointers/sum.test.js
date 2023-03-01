import { sum } from "./sum";

test("returns true if two numbers in the array sum to the target", () => {
  const nums = [1, 2, 4, 6, 8, 9, 14, 15];
  expect(sum(nums, 13)).toBe(true);
  expect(sum(nums, 56)).toBe(false);
  expect(sum(nums, 25)).toBe(false);
});
