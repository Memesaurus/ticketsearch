"use client";

import { createPortal } from "react-dom";
import styles from "./CardDeleteModal.module.css";
import Image from "next/image";
import classNames from "classnames";
import { roboto } from "@/app/Fonts/Fonts";
import { useRef } from "react";
import { useOnClickOutside } from "../../../Filter/Select/useOnClickOutside";
import Cross from "../../../../../../../public/Cross.svg";

type Props = {
  handleClose: (status: boolean) => void;
};

const CardDeleteModal = ({ handleClose }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useOnClickOutside(ref, () => handleClose(false));

  if (typeof document === "undefined") {
    return null;
  }

  return (
    createPortal(
      <div className={classNames(styles.backdrop, roboto.className)}>
        <div ref={ref} className={styles.modal}>
          <div className={styles.header}>
            Удаление билета
            <Image onClick={() => handleClose(false)} src={Cross} width={16} height={16} alt="X" />
          </div>

          <span>Вы уверены, что хотите удалить билет?</span>

          <div className={styles.buttons}>
            <button onClick={() => handleClose(true)} className={styles.yes}>Да</button>
            <button onClick={() => handleClose(false)} className={styles.no}>Нет</button>
          </div>
        </div>
      </div>,
      document.body
    )
  );
};

export default CardDeleteModal;
