import { checkIfPalendrome } from "../checkIfPalendrome";

test("checks if a string is a palindrome", () => {
  expect(checkIfPalendrome("racecar")).toBe(true);
  expect(checkIfPalendrome("hello")).toBe(false);
  expect(checkIfPalendrome("A man a plan a canal Panama")).toBe(true);
});
