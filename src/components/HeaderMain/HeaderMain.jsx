import React from "react";
import style from "./HeaderMain.module.css";
import { Link } from "react-scroll";

const HeaderMain = () => {
  return (
    <div className={style.main}>
      <p className={style.titleBold}>Ремонт под ключ</p>
      <p className={style.titleRegular}>от 18 м2 по полу</p>
      <p className={style.descr}>
        Лучший помошник в сфере{" "}
        <span className={style.descrDecor}>ремонта</span> и{" "}
        <span className={style.descrDecor}>строительства</span> по версии наших
        клиентов!
      </p>
      <Link
        className={style.buttonScroll}
        to="feedback"
        spy={true}
        smooth={true}
        duration={400}
      >
        <button type="button" className={style.btnMore}>
          Подробнее
        </button>
      </Link>
    </div>
  );
};

export default HeaderMain;
