import { Dispatch, useCallback, useState } from "react";

export const useSelect = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  initialValue: string = "default"
): [string, ((val: string) => void)] => {
  const [value, setValue] = useState(initialValue);

  const setSelectValue = useCallback((val: string) => {
    setValue(val);
    ref?.current?.blur();
  }, [ref]);

  return [value, setSelectValue];
};
