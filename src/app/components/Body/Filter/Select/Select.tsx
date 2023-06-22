"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { useSelect } from "./useSelect";
import SelectContextProvider from "./SelectContextProvider";

type Props = {
  placeholder: string;
  className?: string;
};



const Select = ({
  placeholder,
  className,
  children,
}: Props & React.PropsWithChildren) => {
  return (
    <SelectContextProvider placeholder={placeholder}>
        <div tabIndex={0} className={className}>
          {children}
        </div>
    </SelectContextProvider>
  );
};

export default Select;
