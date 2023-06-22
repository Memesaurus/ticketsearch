'use client'
import Image from 'next/image';
import useCount from './useCount';

type Props = {
    className?: string;
}

const MovieCardCounter = ({ className }: Props) => {
  const {count, increment, decrement} = useCount(0);
  return (
    <div className={className}>
    <button onClick={decrement} disabled={count === 0}>
      <Image src="/Minus.svg" width={20} height={20} alt='-' />
    </button>

    {count}

    <button onClick={increment} disabled={count >= 30}>
      <Image src="/Plus.svg" width={20} height={20} alt='+'/>
    </button>
    </div>
  )
}

export default MovieCardCounter