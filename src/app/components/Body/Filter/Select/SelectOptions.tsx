'use client'

import { useContext } from 'react'
import { FilterSwitcherContext } from './SelectContextProvider'

type Props = {
    values: string[],
    className?: string
}

const SelectOptions = ({ values, className }: Props) => {
  const setValue = useContext(FilterSwitcherContext);

  return (
    <div className={className}>
      {values.map((value)=> <div key={value} onClick={() => setValue(value)}>{value}</div> )}
    </div>
  )
}

export default SelectOptions