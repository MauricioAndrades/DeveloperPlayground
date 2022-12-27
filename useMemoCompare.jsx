import React, { useState, useMemo } from "react";

/**
 * Optimized version of useMemoCompare
 * @see https://usehooks.com/useMemoCompare/
 * This is a custom React hook for providing a behavior similar to the useMemo
 * hook, but with a custom comparison function. It takes in two arguments: next
 * and compare. The hook uses a useRef hook to store the previous value. It then
 * passes the previous and next value to the compare function to determine if
 * they should be considered equal. If they are not equal, the previous value is
 * updated to the next value using a useEffect hook. Finally, the hook returns
 * the next value if it is not equal to the previous value, or the previous
 * value if they are considered equal according to the compare function. This
 * allows the hook to return the same value if the compare function keeps
 * returning true, just like the useMemo hook.
 * @template T
 * @param {T} next
 * @param {(prev: ?T, next: ?T)=>boolean} compare
 */
function useMemoCompare(next, compare) {
  // Use useState to store previous value
  const [ previous, setPrevious ] = useState(null);
  // Use useMemo to memoize the result of compare
  const isEqual = useMemo(() => compare(previous, next), [ compare, previous, next ]); // If not equal, update previous value with next value
  
  useEffect(() => {
    if (!isEqual) {
      setPrevious(next);
    }
  }, [ isEqual, next ]);
  // Finally, if equal then return the previous value
  return isEqual ? previous : next;
}

export default useMemoCompare;
