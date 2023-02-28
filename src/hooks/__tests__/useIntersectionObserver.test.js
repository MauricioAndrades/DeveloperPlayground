import React from 'react';
import { screen, render } from '@testing-library/react';
import { useIntersectionObserver } from '../useIntersectionObserver';

const HookComponent = ({ onIntersect, options }) => {
  const ref = useIntersectionObserver(onIntersect, options);
  return <div ref={ref}>Hello World!</div>;
};

test('should create a hook inView', () => {
  const options = {}
  render(<HookComponent onIntersect={()=>{}} options={options} />);
});