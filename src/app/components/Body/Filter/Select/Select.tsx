'use client'

import React, { useState } from 'react'

type Props = {
  placeholder: string;
  className?: string;
}

export const FilterContext = React.createContext('default');

const Select = ({ placeholder, className, children }: Props & React.PropsWithChildren) => {
  const [filterValue, setValue] = useState(placeholder);

  return (
    <FilterContext.Provider value={filterValue}>
      <div tabIndex={0} className={className}>
        {children}
      </div>
    </FilterContext.Provider>
  )
}

export default Select;