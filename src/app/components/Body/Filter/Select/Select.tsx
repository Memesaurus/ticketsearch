"use client";

import React, { useRef } from "react";
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
  const ref = useRef(null);

  return (
    <SelectContextProvider ref={ref} placeholder={placeholder}>
        <div ref={ref} tabIndex={0} className={className}>
          {children}
        </div>
    </SelectContextProvider>
  );
};

export default Select;
