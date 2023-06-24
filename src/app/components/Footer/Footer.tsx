import classNames from "classnames";
import AdaptiveLink from "../AdaptiveLink";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classNames(styles.footer, styles.text)}>
      <AdaptiveLink to="/questions">Вопросы-ответы</AdaptiveLink>
      <AdaptiveLink to="/about">О нас</AdaptiveLink>
    </div>
  );
};

export default Footer;
