import React from "react";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.logo}>
      <p className={style.flat}>
        Flat<span className={style.fix}>Fix</span>
      </p>
      <p className={style.logoBottom}>ремонт и строительство</p>
    </div>
  );
};

export default Logo;
