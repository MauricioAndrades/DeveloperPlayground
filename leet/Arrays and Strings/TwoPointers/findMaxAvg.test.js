import { findMaxAverage } from './findMaxAvg';

describe('findMaxAverage', () => {
  it('returns the maximum average of a contiguous subarray of length k', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
    expect(findMaxAverage([5], 1)).toBe(5);
    expect(findMaxAverage([-1], 1)).toBe(-1);
    expect(findMaxAverage([1, 2, 3, 4, 5], 1)).toBe(5);
    expect(findMaxAverage([1, 2, 3, 4, 5], 5)).toBe(3);
  });
});


