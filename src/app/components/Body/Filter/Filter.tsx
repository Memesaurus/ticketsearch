import classNames from 'classnames'
import styles from './Filter.module.css'
import { SFProText } from '@/app/Fonts/Fonts'

const Filter = () => {
  return (
    <div className={classNames(styles.filter, SFProText.className)}>
        <span className={classNames(styles.text, styles.header)}>Фильтр поиска</span>
        
        <span className={styles.text}>Название</span>
        <input className={classNames(styles.input, styles.text)} placeholder='Введите название'/>
        
        <span className={styles.text}>Жанр</span>
        <select className={classNames(styles.input, styles.select)}>
          <option className={styles.hiddenOption} hidden>Выберите жанр</option>
          <option className={styles.option}>1</option>
          <option className={styles.option}>2</option>
          <option className={styles.option}>3</option>
        </select>
        
        <span className={styles.text}>Кинотеатр</span>
        <select className={classNames(styles.input, styles.select)}>
          <option className={styles.option} hidden selected>Выберите кинотеатр</option>
          <option className={styles.option}>1</option>
          <option className={styles.option}>2</option>
          <option className={styles.option}>3</option>
        </select>
    </div>
  )
}

export default Filter