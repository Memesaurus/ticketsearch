import { MutableRefObject, useCallback, useEffect } from "react";

export default function useOnClickOutside(
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: (event: MouseEvent) => void
) {
    useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback(event);
      }
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, callback]);
}
