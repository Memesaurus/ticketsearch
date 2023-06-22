'use client'
import { useContext } from 'react'
import Image from 'next/image';
import { SelectContext } from './SelectContextProvider';

type Props = {
  className?: string;
}

const SelectInput = ({ className }: Props) => {
  const [value, defaultValue] = useContext(SelectContext);
  const spanTextColor = value !== defaultValue ? {color: 'black'} : {};
  
  return (
    <div className={className}>
      <span style={spanTextColor}>{value}</span>
      <Image src='/DropDownArrow.svg' alt='arrow' width={18} height={18} />
    </div>
  )
}

export default SelectInput