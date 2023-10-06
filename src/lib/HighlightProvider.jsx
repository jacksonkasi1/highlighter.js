import React, { useRef, useEffect, useState, useContext } from 'react';
import * as Spinners from 'react-loader-spinner';
import ReactDOM, { createPortal } from 'react-dom';

const HighlightContext = React.createContext();

function HighlightProvider({ children, color, size, type, ...rest }) {
  const [highlights, setHighlights] = useState([]);
  const Highlighter = Spinners[type];

  useEffect(() => {
    const timers = highlights.map((highlight, index) =>
      setTimeout(() => {
        setHighlights((currentHighlights) => currentHighlights.filter((_, i) => i !== index));
      }, 5000)
    );
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [highlights]);

  return (
    <HighlightContext.Provider
      value={(id) => setHighlights((old) => [...old, id])}
    >
      {children}

      {highlights.map((highlight, index) => {
        const ref = document.getElementById(highlight);
        if (!ref) return <React.Fragment key={index} />;
        const rect = ref.getBoundingClientRect();

        return ReactDOM.createPortal(
          <div
            key={index}
            style={{
              position: 'absolute',
              top: rect.y,
              left: rect.x,
            }}
          >
            <Highlighter color={color} height={size} width={size} {...rest} />
          </div>,
          document.getElementById(highlight)
        );
      })}
    </HighlightContext.Provider>
  );
};

export default HighlightProvider;
export { HighlightContext };
