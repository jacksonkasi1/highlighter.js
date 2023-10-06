import React from 'react';
import useHighlight from './useHighlight';

function SamplePage() {
  const highlight = useHighlight('my-hello', { color: 'red', size: '24px', Spinner: Puff, timeout: 5000 });

  return (
    <div>
      <div id="my-hello">Hello World!</div>
      <button onClick={highlight}>Highlight</button>
    </div>
  );
}

export default SamplePage;