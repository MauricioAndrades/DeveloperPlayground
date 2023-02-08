import React, { useEffect, useRef } from "react";

/**
 * Optimized version of useMemoCompare
 *
 * @template {null} T
 * @param {T} next
 * @param {(prev: ?T, next: ?T) => boolean} compare
 * @see https://usehooks.com/useMemoCompare/ This is a custom React hook for providing a behavior similar to the useMemo
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
