'use client'

import React, { useContext } from 'react'
import { FilterContext } from './Select';
import Image from 'next/image';

type Props = {
  className?: string;
}

const SelectInput = ({ className }: Props) => {
  const value = useContext(FilterContext);

  return (
    <div className={className}>
      <span>{value}</span>
      <Image src='/DropDownArrow.svg' alt='arrow' width={18} height={18} />
    </div>
  )
}

export default SelectInput