import React from "react";
import style from "./Timer.module.css";

const Timer = ({
  firstDay,
  secondDay,
  firstHour,
  secondHour,
  firstMinute,
  secondMinute,
  firstSecond,
  secondSecond
}) => {
  return (
    <div className={style.timer}>
      <div className={style.timerList}>
        <div className={style.listItem}>
          <div className={style.cardOverlay}>
            <p className={style.card}>{firstDay}</p>
            <p className={style.card}>{secondDay}</p>
          </div>
          <p className={style.cardName}>дней</p>
        </div>
        <p className={style.colon}>:</p>
        <div className={style.listItem}>
          <div className={style.cardOverlay}>
            <p className={style.card}>{firstHour}</p>
            <p className={style.card}>{secondHour}</p>
          </div>
          <p className={style.cardName}>часов</p>
        </div>
        <p className={style.colon}>:</p>
        <div className={style.listItem}>
          <div className={style.cardOverlay}>
            <p className={style.card}>{firstMinute}</p>
            <p className={style.card}>{secondMinute}</p>
          </div>
          <p className={style.cardName}>минут</p>
        </div>
        <p className={style.colon}>:</p>
        <div className={style.listItem}>
          <div className={style.cardOverlay}>
            <p className={style.card}>{firstSecond}</p>
            <p className={style.card}>{secondSecond}</p>
          </div>
          <p className={style.cardName}>секунд</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
