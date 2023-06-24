import { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Корзина - Билетопоиск',
  description: 'Сайт для Шри'
}

export default function Page() {
  return (
    <div className={styles.container}>
        Корзина
    </div>
  )
}