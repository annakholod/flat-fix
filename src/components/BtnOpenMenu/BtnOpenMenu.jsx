import React from "react";
import style from "./BtnOpenMenu.module.css";

const BtnOpenMenu = ({ isOpenMenu, toggleMenu }) => {
  return (
    <button type="button" className={style.openMenu} onClick={toggleMenu}>
      {isOpenMenu ? (
        <i className="material-icons">close</i>
      ) : (
        <i className="material-icons">menu</i>
      )}
    </button>
  );
};

export default BtnOpenMenu;
