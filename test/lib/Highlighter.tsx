import React from 'react';
import * as Spinners from 'react-loader-spinner';

interface HighlighterProps {
  color: string,
  size: number,
  show: keyof typeof Spinners
}

export const Highlighter: React.FC<HighlighterProps> = 
  ({ color, size, show }) => {
  const Spinner = Spinners[show];
  return <Spinner color={color} size={size} />;
};
