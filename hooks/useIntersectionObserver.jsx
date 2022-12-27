import { useEffect, useRef } from "react";

const SUPPORTS_INTERSECTION_OBSERVER =
  typeof window === "object" && "IntersectionObserver" in window;

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

/**
 * Observe changes in the intersection of an element with its ancestor elements
 *
 * @param {(entry: IntersectionObserverEntry) => void} onIntersect - Callback function to be called when element * intersects with viewport
 * @param {IntersectionObserverInit} [options] - Intersection observer options
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * 
 @example
 *   const SomeComp = (props) => {
 *     const ref = useIntersectionObserver(() => {
 *       console.log("Element has intersected with viewport!");
 *     });
 *     return <div ref={ref}>Hello World!</div>;
 *   };
 */
function useIntersectionObserver(onIntersect, options) {
  const observerRef = useRef(null);
  const targetRef = useRef(null);
  const { root, rootMargin, threshold } = options || DEFAULT_OPTIONS;

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (SUPPORTS_INTERSECTION_OBSERVER) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              onIntersect(entry);
            }
          });
        },
        { root, rootMargin, threshold }
      );
    }

    // If a target element exists, start observing it
    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [ onIntersect, root, rootMargin, threshold ]);

  return targetRef;
}

export default useIntersectionObserver;
