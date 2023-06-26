import Image from "next/image";
import { PropsWithChildren } from "react";
import DropdownArrowBlack from "../../../../public/DropDownArrowBlack.svg";
import styles from "./DropdownQuestion.module.css";

type Props = {
  prompt: string;
};

const DropdownQuestion = ({ prompt, children }: PropsWithChildren<Props>) => {
  return (
    <div tabIndex={0} className={styles.questionBlock}>
      <div className={styles.question}>
        {prompt}
        <Image src={DropdownArrowBlack} width={32} height={32} alt="˅" />
      </div>
      <span className={styles.answer}>{children}</span>
    </div>
  );
};

export default DropdownQuestion;
