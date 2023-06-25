"use client";

import classNames from "classnames";
import styles from "./Filter.module.css";
import { SFProText } from "@/app/Fonts/Fonts";
import Select from "./Select/Select";
import SelectInput from "./Select/SelectInput";
import SelectOptions from "./Select/SelectOptions";
import FilterInput from "./Input/FilterInput";
import ModalContextProvider from "./ModalContextProvider";
import { useGetCinemasQuery } from "@/app/redux/services/movieApi";

export type Cinema = {
  id: string;
  name: string;
  movieIds: string[];
};

const Filter = () => {
  const { data, isError, isLoading } = useGetCinemasQuery();

  if ((!data && !isLoading) || isError) {
    return <div className={styles.filter}>Ошибка при получении данных</div>;
  }

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
              values={[
                { id: null, name: "Все жанры" },
                { id: "fantasy", name: "Фентези" },
                { id: "horror", name: "Ужасы" },
                { id: "action", name: "Боевик" },
                { id: "comedy", name: "Комедия" },
              ]}
            />
          </Select>
        </div>

        <div>
          <span className={classNames(styles.text, styles.marginBottom)}>
            Кинотеатр
          </span>
          {isLoading ? (
            <div
              className={classNames(
                SFProText.className,
                styles.input,
                styles.select
              )}
            >
              <span>Загрузка...</span>
            </div>
          ) : (
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
                values={data && [{ id: null, name: "Все кинотеатры" }, ...data]}
              />
            </Select>
          )}
        </div>
      </div>
    </ModalContextProvider>
  );
};

export default Filter;
