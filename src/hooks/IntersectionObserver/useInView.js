import React, { useEffect, useRef, useState, createElement } from 'react';
import type { FC } from 'react';
import type { IntersectionObserverProps, PlainChildrenProps } from './index';
import { observe } from './observe';

type State = {
  inView: boolean;
  entry?: IntersectionObserverEntry;
};

function isPlainChildren(
  props: IntersectionObserverProps | PlainChildrenProps,
): props is PlainChildrenProps {
  return typeof props.children !== 'function';
}

const InView: FC<IntersectionObserverProps | PlainChildrenProps> = (props) => {
  const [state, setState] = useState<State>({
    inView: !!props.initialInView,
    entry: undefined,
  });
  const nodeRef = useRef<Element | null>(null);
  const unobserveCbRef = useRef<(() => void) | null>(null);

  const handleNode = (node?: Element | null) => {
    if (nodeRef.current) {
      unobserve();

      if (!node && !props.triggerOnce && !props.skip) {
        setState({ inView: !!props.initialInView, entry: undefined });
      }
    }

    nodeRef.current = node ? node : null;
    observeNode();
  };

  const handleChange = (inView: boolean, entry: IntersectionObserverEntry) => {
    if (inView && props.triggerOnce) {
      unobserve();
    }

    if (!isPlainChildren(props)) {
      setState({ inView, entry });
    }

    if (props.onChange) {
      props.onChange(inView, entry);
    }
  };

  const observeNode = () => {
    if (!nodeRef.current || props.skip) return;

    const {
      threshold,
      root,
      rootMargin,
      trackVisibility,
      delay,
      fallbackInView,
    } = props;

    unobserveCbRef.current = observe(
      nodeRef.current,
      handleChange,
      {
        threshold,
        root,
        rootMargin,
        // @ts-ignore
        trackVisibility,
        // @ts-ignore
        delay,
      },
      fallbackInView,
    );
  };

  const unobserve = () => {
    if (unobserveCbRef.current) {
      unobserveCbRef.current();
      unobserveCbRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      unobserve();
      nodeRef.current = null;
    };
  }, []);

  if (!isPlainChildren(props)) {
    const { inView, entry } = state;
    return props.children({ inView, entry, ref: handleNode });
  }

  const {
    children,
    as,
    triggerOnce,
    threshold,
    root,
    rootMargin,
    onChange,
    skip,
    trackVisibility,
    delay,
    initialInView,
    fallbackInView,
    ...rest
  } = props;

  return createElement(
    as || 'div',
    { ref: handleNode, ...rest },
    children,
  );
};

export default InView;
