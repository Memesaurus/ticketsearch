"use client";

import React, { PropsWithChildren } from "react";
import SelectContextProvider from "./SelectContextProvider";
import { FilterKey } from "../../RootContextProvider";

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

  return (
    <SelectContextProvider type={type} placeholder={placeholder}>
        <div tabIndex={0} className={className}>
          {children}
        </div>
    </SelectContextProvider>
  );
};

export default Select;
