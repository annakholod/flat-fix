import React from "react";
import style from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div className={style.sectionTitle}>
      <div className={style.decor}></div>
      <p className={style.title}>{title}</p>
    </div>
  );
};

export default Title;
