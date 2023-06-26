'use client'
import { useContext } from 'react'
import Image from 'next/image';
import { SelectContext, SelectTypeContext } from './SelectContextProvider';
import { ModalContextSwitcher, ModalKey } from '../ModalContextProvider';
import DropDownArrow from "../../../../../../public/DropDownArrow.svg";

type Props = {
  className?: string;
}

const SelectInput = ({ className }: Props) => {
  const type = useContext(SelectTypeContext);
  const [value, defaultValue] = useContext(SelectContext);
  const modalStateSwitch = useContext(ModalContextSwitcher);
  const spanTextColor = value !== defaultValue ? {color: 'black'} : {};

  return (
    <div id={type} className={className} onClick={() => modalStateSwitch(type)}>
      <span style={spanTextColor}>{value}</span>
      <Image src={DropDownArrow} alt='arrow' width={18} height={18} />
    </div>
  )
}

export default SelectInput