import { ChangeEvent, FormEvent, useCallback, useContext } from "react";
import { FilterContextChanger, FilterKey } from "../../BodyContextProvider";
import { debounce } from "lodash";

type Props = {
    className: string;
    placeholder: string;
}

const FilterInput = ({ className, placeholder}: Props) => {
    const setFilter = useContext(FilterContextChanger);

    //lodash сказали можно юзать
    const handleOnChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
        setFilter((current) => current = {...current, 'filmName': event.target.value});
    }, 500);

  return (
    <input className={className} placeholder={placeholder} onInput={handleOnChange} />
  )
}

export default FilterInput