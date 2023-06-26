import Image from "next/image";
import styles from "./Review.module.css";
import NoAvatar from "../../../../../public/NoAvatar.svg";

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: string;
};

type Props = {
  review: Review;
};

const Review = ({ review }: Props) => {
  const { name, rating, text } = review;

  return (
    <div className={styles.review}>
      <div className={styles.avatarFrame}>
        <Image src={NoAvatar} width={32} height={32} alt=":)" />
      </div>

      <div className={styles.reviewContent}>
        <div className={styles.heading}>
          <span>{name}</span>
          <div>
            <span>Оценка: </span> {rating}
          </div>
        </div>

        <div className={styles.reviewBody}>{text}</div>
      </div>
    </div>
  );
};

export default Review;
