import { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Вопрос-ответ - Билетопоиск",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.question}>Вопросы-ответы</h1>

      <div tabIndex={0} className={styles.questionBlock}>
        <div className={styles.question}>
          Что такое билетопоиск?
          <Image
            src={"/DropDownArrowBlack.svg"}
            width={32}
            height={32}
            alt="X"
          />
        </div>
        <span className={styles.answer}>
          Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
          фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
          видео и интересные факты, поставить фильмам оценки, написать рецензии
          и дополнить описание фильмов.
        </span>
      </div>
      <div tabIndex={0} className={styles.questionBlock}>
        <div className={styles.question}>
          Какой компании принадлежит Билетопоиск?
          <Image
            src={"/DropDownArrowBlack.svg"}
            width={32}
            height={32}
            alt="X"
          />
        </div>
        <span className={styles.answer}>
          Мне
        </span>
      </div>
      <div tabIndex={0} className={styles.questionBlock}>
        <div className={styles.question}>
          Как купить билет на Билетопоиск?
          <Image
            src={"/DropDownArrowBlack.svg"}
            width={32}
            height={32}
            alt="X"
          />
        </div>
        <span className={styles.answer}>
          Я откуда знаю? Я кнопки крашу.
        </span>
      </div>
      <div tabIndex={0} className={styles.questionBlock}>
        <div className={styles.question}>
          Как оставить отзыв на Билетопоиск?
          <Image
            src={"/DropDownArrowBlack.svg"}
            width={32}
            height={32}
            alt="X"
          />
        </div>
        <span className={styles.answer}>
          🤙
        </span>
      </div>
    </div>
  );
}
