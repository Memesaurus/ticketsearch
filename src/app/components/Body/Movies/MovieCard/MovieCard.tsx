import Image from 'next/image'
import styles from './MovieCard.module.css'
import src from './src.json'
import MovieCardCounter from './MovieCardCounter'

const MovieCard = () => {
    
  return (
        <div className={styles.container}>
            <Image className={styles.image} src={src.src} width={100} height={120} alt='imgname'/>
            <div className={styles.title}>
              <span> Название Фильма </span>
              <span> Жанр </span>
            </div>

            <MovieCardCounter className={styles.counter} />
        </div>
  )
}

export default MovieCard