import classNames from 'classnames'
import styles from './Filter.module.css'

const Filter = () => {
  return (
    <div className={styles.filter}>
        <span className={classNames(styles.text, styles.header)}>Фильтр поиска</span>
        
        <span className={styles.text}>Название</span>
        <input className={classNames(styles.input, styles.text)} placeholder='Введите название'/>
        
        <span className={styles.text}>Жанр</span>
        <select className={classNames(styles.input, styles.select)}>
          <option>Выберите жанр</option>
        </select>
        
        <span className={styles.text}>Кинотеатр</span>
        <select className={classNames(styles.input, styles.select)}>
          <option>Выберите кинотеатр</option>
        </select>
    </div>
  )
}

export default Filter