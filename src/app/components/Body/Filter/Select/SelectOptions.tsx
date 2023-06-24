"use client";

import { CSSProperties, useContext, useRef } from "react";
import {
  SelectSwitcherContext,
  SelectTypeContext,
} from "./SelectContextProvider";
import { FilterContextChanger } from "../../BodyContextProvider";
import { createPortal } from "react-dom";
import { ModalContext, ModalContextSwitcher } from "../ModalContextProvider";
import useOnClickOutside from "./useOnClickOutside";

type Props = {
  values: string[];
  className?: string;
};

const SelectOptions = ({ values, className }: Props) => {
  const setValue = useContext(SelectSwitcherContext);
  const setFilter = useContext(FilterContextChanger);
  const type = useContext(SelectTypeContext);
  const modalState = useContext(ModalContext);
  const switchModalState = useContext(ModalContextSwitcher);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => switchModalState(null));

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
  };

  return (
    modalState === type &&
    createPortal(
      <div ref={ref} className={className} style={style}>
        {values.map((value) => (
          <div
            key={value}
            onClick={() => {
              setValue(value);
              setFilter((current) => {
                switchModalState(null);
                return current[type] === value
                  ? current
                  : (current = { ...current, [type]: value });
              });
            }}
          >
            {value}
          </div>
        ))}
      </div>,
      element
    )
  );
};

export default SelectOptions;
