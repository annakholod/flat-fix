import React from "react";
import style from "./ModalMessage.module.css";

const ModalMessage = ({ userName, text, textSecond }) => {
  return (
    <div className={style.messageOverlay}>
      <p className={style.text}>{`${userName}, cпасибо за ваш запрос!`}</p>
      <p className={style.text}>{text}</p>
      <p className={style.textSecond}>{textSecond}</p>
    </div>
  );
};

export default ModalMessage;
