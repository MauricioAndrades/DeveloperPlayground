import {sortedSquares} from './sortedSquares';

describe('sortedSquares', () => {
    it('returns the sorted squares of the input array', () => {
      expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
      expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
      expect(sortedSquares([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
      expect(sortedSquares([-5, -4, -3, -2, -1])).toEqual([1, 4, 9, 16, 25]);
    });
  });

// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].