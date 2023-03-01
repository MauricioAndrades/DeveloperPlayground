import { findMaxAverage, findMaxAvgIter } from './findMaxAvg';

describe('findMaxAverage', () => {
  it('returns the maximum average of a contiguous subarray of length k', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
    expect(findMaxAverage([5], 1)).toBe(5);
    expect(findMaxAverage([-1], 1)).toBe(-1);
    expect(findMaxAverage([1, 2, 3, 4, 5], 1)).toBe(5);
    expect(findMaxAverage([1, 2, 3, 4, 5], 5)).toBe(3);
  });

  it('returns the maximum average of a contiguous subarray of length k using an iterative for loop', () => {
    expect(findMaxAvgIter([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
    expect(findMaxAvgIter([5], 1)).toBe(5);
    expect(findMaxAvgIter([-1], 1)).toBe(-1);
    expect(findMaxAvgIter([1, 2, 3, 4, 5], 1)).toBe(5);
    expect(findMaxAvgIter([1, 2, 3, 4, 5], 5)).toBe(3);
  });
});


