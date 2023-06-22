"use client";

import { useContext } from "react";
import {
  SelectSwitcherContext,
  SelectTypeContext,
} from "./SelectContextProvider";
import { FilterContextChanger } from "../../BodyContextProvider";

type Props = {
  values: string[];
  className?: string;
};

const SelectOptions = ({ values, className }: Props) => {
  const setValue = useContext(SelectSwitcherContext);
  const setFilter = useContext(FilterContextChanger);
  const type = useContext(SelectTypeContext);

  return (
    <div className={className}>
      {values.map((value) => (
        <div
          key={value}
          onClick={() => {
            setValue(value);
            setFilter((current) => (current[type] === value ? current : current = {...current, [type]: value}));
          }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default SelectOptions;
