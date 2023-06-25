import React, { PropsWithChildren, useState } from "react";
import { FilterKey } from "../../BodyContextProvider";


export const SelectContext = React.createContext(["default", "default"]);
export const SelectSwitcherContext = React.createContext<(val: string) => void>(
  () => {}
);
export const SelectTypeContext = React.createContext<FilterKey>('filmName');

type Props = {
  type: FilterKey;
  placeholder: string;
};

const SelectContextProvider = ({
  type,
  placeholder,
  children,
}: PropsWithChildren<Props>) => {
  const [filterValue, setValue] = useState(placeholder);

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
