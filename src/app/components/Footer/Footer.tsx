import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.text}> Вопросы-ответы </span>
      <span className={styles.text}> О нас </span>
    </div>
  );
};

export default Footer;
