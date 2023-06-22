import { useCallback, useState } from "react";

export const useCount = (initialValue: number = 0) => {
  const [count, setCount] = useState(initialValue);

  const decrement = useCallback(() => setCount((current) => current - 1), []);
  const increment = useCallback(() => setCount((current) => current + 1), []);

  return { count, decrement, increment };
};

export default useCount;
