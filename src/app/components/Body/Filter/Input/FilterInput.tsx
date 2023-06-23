import { ChangeEvent, useCallback, useContext } from "react";
import { FilterContextChanger } from "../../BodyContextProvider";
import { debounce } from "lodash";

type Props = {
    className: string;
    placeholder: string;
}

const FilterInput = ({ className, placeholder}: Props) => {
    const setFilter = useContext(FilterContextChanger);

    const handleOnChange = useCallback(() => debounce((event: ChangeEvent<HTMLInputElement>) => {
        setFilter((current) => current = {...current, 'filmName': event.target.value === "" ? null : event.target.value});
    }, 500), [setFilter]);

  return (
    <input className={className} placeholder={placeholder} onInput={handleOnChange()} />
  )
}

export default FilterInput