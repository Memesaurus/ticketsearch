"use client";

import classNames from "classnames";
import styles from "./Filter.module.css";
import { SFProText } from "@/app/Fonts/Fonts";
import Select from "./Select/Select";
import SelectInput from "./Select/SelectInput";
import SelectOptions from "./Select/SelectOptions";
import FilterInput from "./Input/FilterInput";
import ModalContextProvider from "./ModalContextProvider";

const Filter = () => {
  return (
    <ModalContextProvider>
      <div
        className={classNames(styles.filter, SFProText.className)}
        id="filter"
      >
        <span className={classNames(styles.text, styles.header)}>
          Фильтр поиска
        </span>

        <div>
          <span className={classNames(styles.text, styles.marginBottom)}>
            Название
          </span>

          <FilterInput
            className={classNames(styles.input, styles.text)}
            placeholder="Введите название"
          />
        </div>

        <div>
          <span className={classNames(styles.text, styles.marginBottom)}>
            Жанр
          </span>
          <Select
            type="genre"
            className={classNames(SFProText.className, styles.selectBody)}
            placeholder="Выберите жанр"
          >
            <SelectInput
              className={classNames(
                SFProText.className,
                styles.input,
                styles.select
              )}
            />
            <SelectOptions
              className={classNames(styles.options)}
              values={["a", "b", "c", "d", "e", "f", "g", "h", "i"]}
            />
          </Select>
        </div>

        <div>
          <span className={classNames(styles.text, styles.marginBottom)}>
            Кинотеатр
          </span>
          <Select
            type="theatre"
            className={classNames(SFProText.className, styles.selectBody)}
            placeholder="Выберите кинотеатр"
          >
            <SelectInput
              className={classNames(
                SFProText.className,
                styles.input,
                styles.select
              )}
            />
            <SelectOptions
              className={classNames(styles.options)}
              values={["a", "b", "c", "d"]}
            />
          </Select>
        </div>
      </div>
    </ModalContextProvider>
  );
};

export default Filter;
