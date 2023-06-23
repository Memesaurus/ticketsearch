import React, { MutableRefObject, PropsWithChildren } from "react";
import { useSelect } from "./useSelect";
import { FilterKey } from "../../BodyContextProvider";


export const SelectContext = React.createContext(["default", "default"]);
export const SelectSwitcherContext = React.createContext<(val: string) => void>(
  () => {}
);
export const SelectTypeContext = React.createContext<FilterKey>('filmName');

type Props = {
  type: FilterKey;
  placeholder: string;
  element: MutableRefObject<null | HTMLDivElement>;
};

const SelectContextProvider = ({
  type,
  placeholder,
  element,
  children,
}: PropsWithChildren<Props>) => {
  const [filterValue, setValue] = useSelect(element, placeholder);

  return (
    <SelectContext.Provider value={[filterValue, placeholder]}>
      <SelectSwitcherContext.Provider value={setValue}>
        <SelectTypeContext.Provider value={type}>
          {children}
        </SelectTypeContext.Provider>
      </SelectSwitcherContext.Provider>
    </SelectContext.Provider>
  );
};

export default SelectContextProvider;
