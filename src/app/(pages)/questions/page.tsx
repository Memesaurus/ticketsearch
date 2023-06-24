import { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Вопросы-ответы - Билетопоиск',
  description: 'Сайт для Шри'
}

export default function Page() {
  return (
    <div className={styles.container}>
        Вопросы-ответы
    </div>
  )
}