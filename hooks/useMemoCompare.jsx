import React, { useEffect, useRef } from "react";

/**
 * Optimized version of useMemoCompare
 *
 * @template {null} T
 * @param {T} next
 * @param {(prev: ?T, next: ?T) => boolean} compare
 * @see https://usehooks.com/useMemoCompare/ This is a custom React hook for providing a behavior similar to the useMemo
 * hook, but with a custom comparison function. It takes in two arguments: next
 * and compare. The hook uses a useRef hook to store the previous value. It then
 * passes the previous and next value to the compare function to determine if
 * they should be considered equal. If they are not equal, the previous value is
 * updated to the next value using a useEffect hook. Finally, the hook returns
 * the next value if it is not equal to the previous value, or the previous
 * value if they are considered equal according to the compare function. This
 * allows the hook to return the same value if the compare function keeps
 * returning true, just like the useMemo hook.
 */
function useMemoCompare(next, compare) {
  // Ref for storing previous value
  const previousRef = useRef(null);

  // check whether the values of previous and next are both null or both not null or compare.
  const isEqual =
    (previousRef.current == null) !== (next == null)
      ? false
      : compare(previousRef.current, next);

  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  }, [isEqual, next]);
  // Finally, if equal then return the previous value
  return isEqual ? previousRef.current : next;
}

export default useMemoCompare;
