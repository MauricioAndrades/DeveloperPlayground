import { reverseString } from "../reverseString";

test("reverses a string in place", () => {
  const input = ["h", "e", "l", "l", "o"];
  const expected = ["o", "l", "l", "e", "h"];
  expect(reverseString(input)).toMatchObject(expected);
});
