"use client";

import React, { PropsWithChildren, useRef } from "react";
import SelectContextProvider from "./SelectContextProvider";
import { FilterKey } from "../../BodyContextProvider";

type Props = {
  type: FilterKey
  placeholder: string;
  className?: string;
};

const Select = ({
  type,
  placeholder,
  className,
  children,
}: PropsWithChildren<Props>) => {
  const ref = useRef(null);

  return (
    <SelectContextProvider type={type} element={ref} placeholder={placeholder}>
        <div ref={ref} tabIndex={0} className={className}>
          {children}
        </div>
    </SelectContextProvider>
  );
};

export default Select;
