import React from 'react'

type Props = {
    values: string[],
    className?: string
}

const SelectOptions = ({ values, className }: Props) => {
  return (
    <div className={className}>
      {values.map((value)=> <div key={value}>{value}</div> )}
    </div>
  )
}

export default SelectOptions