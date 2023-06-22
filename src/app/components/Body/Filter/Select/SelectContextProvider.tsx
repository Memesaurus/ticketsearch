import React, { useRef, useState } from "react";
import { useSelect } from "./useSelect";

export const FilterContext = React.createContext(["default", "default"]);
export const FilterSwitcherContext = React.createContext<
  ((val: string) => void)
>(() => {});

type Props = {
    placeholder: string;
}

const SelectContextProvider = ({ placeholder, children }: Props & React.PropsWithChildren) => {
    // const ref = useRef(null);
    // const [filterValue, setValue] = useSelect(ref, placeholder);
    const [filterValue, setValue] = useState(placeholder);
    
  return (
    <FilterContext.Provider value={[filterValue, placeholder]}>
        <FilterSwitcherContext.Provider value={setValue}>
            {children}
        </FilterSwitcherContext.Provider>
    </FilterContext.Provider>
  )
}

export default SelectContextProvider