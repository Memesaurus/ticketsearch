"use client";

import React, {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useState,
} from "react";

export type FilterKey = "filmName" | "genre" | "theatre";
export type FilterRecord = Record<FilterKey, string | null>;

const initialValue = { filmName: null, genre: null, theatre: null };

export const FilterContext = React.createContext<FilterRecord>(initialValue);
export const FilterContextChanger = React.createContext<
  Dispatch<SetStateAction<FilterRecord>>
>(() => {});

const BodyContextProvider = ({ children }: PropsWithChildren) => {
  const [filter, changeFilter] = useState<FilterRecord>(initialValue);

  return (
    <FilterContext.Provider value={filter}>
      <FilterContextChanger.Provider value={changeFilter}>
        {children}
      </FilterContextChanger.Provider>
    </FilterContext.Provider>
  );
};

export default BodyContextProvider;
