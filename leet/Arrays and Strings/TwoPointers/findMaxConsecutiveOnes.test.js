import { findMaxConsecutiveOnes } from "./findMaxConsecutiveOnes";

describe("findMaxConsecutiveOnes", () => {
    test("returns the maximum number of consecutive ones with at most k flips", () => {
        expect(findMaxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 4)).toBe(6);
        expect(findMaxConsecutiveOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10);
        expect(findMaxConsecutiveOnes([0, 0, 0, 0], 1)).toBe(1);
        expect(findMaxConsecutiveOnes([1, 1, 1, 1], 0)).toBe(4);
        expect(findMaxConsecutiveOnes([0, 0, 0, 0, 0], 3)).toBe(3);
    });
});
