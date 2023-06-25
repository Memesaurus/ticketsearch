import { MutableRefObject, useEffect } from "react";

// Какой-то ужасный костыль для того, чтобы модалка закрывалась по клику вне активной модалки. 
// Скорее всего это можно сделать круче через рефы и реактовские ивенты.
// (100% так и надо делать, но я не успеваю :((())))

const isActiveElementNotInput = (element: Element | null): element is HTMLElement => 
  element instanceof HTMLElement && document.activeElement?.id !== 'input';

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!(ref.current?.contains(event.target as Node))) {
        callback(event);
        
        if (isActiveElementNotInput(document.activeElement)) {
          document.activeElement?.blur();
        }
      }
    };

    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, callback]);
};
