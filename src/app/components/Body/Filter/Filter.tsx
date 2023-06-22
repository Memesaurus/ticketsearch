import classNames from "classnames";
import styles from "./Filter.module.css";
import { SFProText } from "@/app/Fonts/Fonts";
import Select from "./Select/Select";
import SelectInput from "./Select/SelectInput";
import SelectOptions from "./Select/SelectOptions";

const Filter = () => {
  return (
    <div className={classNames(styles.filter, SFProText.className)}>
      <span className={classNames(styles.text, styles.header)}>
        Фильтр поиска
      </span>

      <span className={styles.text}>Название</span>
      <input
        className={classNames(styles.input, styles.text)}
        placeholder="Введите название"
      />

      <span className={styles.text}>Жанр</span>
      <Select
        className={classNames(SFProText.className, styles.selectBody)}
        placeholder="Выберите жанр"
      >
        <SelectInput
          className={classNames(SFProText.className, styles.input, styles.select)}
        />
        <SelectOptions
          className={classNames(styles.options)}
          values={["a", "b", "c", "d"]}
        />
      </Select>

      <span className={styles.text}>Кинотеатр</span>
      <Select
        className={classNames(SFProText.className, styles.selectBody)}
        placeholder="Выберите кинотеатр"
      >
        <SelectInput
          className={classNames(SFProText.className, styles.input, styles.select)}
        />
        <SelectOptions
          className={classNames(styles.options)}
          values={["a", "b", "c", "d"]}
        />
      </Select>
    </div>
  );
};

export default Filter;
