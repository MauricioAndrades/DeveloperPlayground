import { isSubSequence } from "./isSubSequence";

test("returns true if a string is a subsequence of another string", () => {
  expect(isSubSequence("ace", "abcde")).toBe(true);
  expect(isSubSequence("aec", "abcde")).toBe(false);
  expect(isSubSequence("abc", "abcde")).toBe(true);
  expect(isSubSequence("ade", "abcde")).toBe(true);
  expect(isSubSequence("abc", "abdcdec")).toBe(true);
  expect(isSubSequence("abcd", "abdcdec")).toBe(true);
  expect(isSubSequence("", "abcde")).toBe(true);
  expect(isSubSequence("abcde", "")).toBe(false);
  expect(isSubSequence("axc", "ahbgdc")).toBe(false);
});
