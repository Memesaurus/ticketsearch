"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useSelect } from "./useSelect";

type Props = {
  placeholder: string;
  className?: string;
};

export const FilterContext = React.createContext(["default", "default"]);
export const FilterSwitcherContext = React.createContext<
  ((val: string) => void)
>(() => {});

const Select = ({
  placeholder,
  className,
  children,
}: Props & React.PropsWithChildren) => {
  const ref = useRef(null);
  const [filterValue, setValue] = useSelect(ref, placeholder);

  return (
    <FilterContext.Provider value={[filterValue, placeholder]}>
      <FilterSwitcherContext.Provider value={setValue}>
        <div ref={ref} tabIndex={0} className={className}>
          {children}
        </div>
      </FilterSwitcherContext.Provider>
    </FilterContext.Provider>
  );
};

export default Select;
