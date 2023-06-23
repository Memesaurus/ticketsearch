"use client";

import { CSSProperties, useContext, useMemo } from "react";
import {
  SelectSwitcherContext,
  SelectTypeContext,
} from "./SelectContextProvider";
import { FilterContextChanger } from "../../BodyContextProvider";
import { createPortal } from "react-dom";
import { ModalContext, ModalContextSwitcher } from "../ModalContextProvider";
import classNames from "classnames";

type Props = {
  values: string[];
  className?: string;
};

const SelectOptions = ({ values, className }: Props) => {
  const setValue = useContext(SelectSwitcherContext);
  const setFilter = useContext(FilterContextChanger);
  const type = useContext(SelectTypeContext);
  const modalState = useContext(ModalContext);
  const modalStateSwitcher = useContext(ModalContextSwitcher);

  if (typeof document === "undefined") {
    return null;
  }

  const element = document.getElementById("filter");
  const parentInput = document.getElementById(type);

  if (!element || !parentInput) {
    return null;
  }

  const rect = parentInput.getBoundingClientRect();
  
  const style: CSSProperties = {
    width: rect.width,
    top: rect.top - rect.height - 25,
  }

  return (
  modalState === type && createPortal(
    <div className={className} style={style}>
      {values.map((value) => (
        <div
          key={value}
          onClick={() => {
            setValue(value);
            setFilter((current) => {
              modalStateSwitcher(null);
              return current[type] === value ? current : current = {...current, [type]: value}
            });
          }}
        >
          {value}
        </div>
      ))}
    </div>
    , element)
  );
};

export default SelectOptions;
