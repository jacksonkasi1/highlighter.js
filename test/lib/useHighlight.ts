import { useEffect, useState } from "react";

export const useHighlight = (
  ids: Array<string>,
  { color, size }: { color: string; size: string },
  spinner: string,
  isInitial: boolean,
) => {
  const [elements, setElements] = useState<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (isInitial) return;
    const newElements = ids.map((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.backgroundColor = color;
        el.style.fontSize = size;
      }
      return el;
    });
    setElements(newElements);
  }, [color, size, spinner, isInitial, ids]);

  return { elements, spinner, color, size };
};

export default useHighlight;
