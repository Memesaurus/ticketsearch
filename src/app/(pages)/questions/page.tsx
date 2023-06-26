import { Metadata } from "next";
import styles from "./page.module.css";
import DropdownQuestion from "../../components/Questions/DropdownQuestion";

export const metadata: Metadata = {
  title: "Вопрос-ответ - Билетопоиск",
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.question}>Вопросы-ответы</h1>
      <DropdownQuestion prompt="Что такое билетопоиск?">
        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
        фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео
        и интересные факты, поставить фильмам оценки, написать рецензии и
        дополнить описание фильмов.
      </DropdownQuestion>
      <DropdownQuestion prompt="Какой компании принадлежит Билетопоиск?">
        Мне.
      </DropdownQuestion>
      <DropdownQuestion prompt="Как купить билет на Билетопоиск?">
        Я откуда знаю? Я кнопки крашу.
      </DropdownQuestion>
      <DropdownQuestion prompt="Как оставить отзыв на Билетопоиск?">
        🤙
      </DropdownQuestion>
    </div>
  );
}
