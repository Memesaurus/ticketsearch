import { MutableRefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!(ref.current?.contains(event.target as Node))) {
        callback(event);

        if (document.activeElement instanceof HTMLElement) {
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
