'use client'

import { useContext } from 'react'
import { FilterContext } from './Select';
import Image from 'next/image';

type Props = {
  className?: string;
}

const SelectInput = ({ className }: Props) => {
  const [value, defaultValue] = useContext(FilterContext);
  const spanTextColor = value !== defaultValue ? {color: 'black'} : {};
  return (
    <div className={className}>
      <span style={spanTextColor}>{value}</span>
      <Image src='/DropDownArrow.svg' alt='arrow' width={18} height={18} />
    </div>
  )
}

export default SelectInput