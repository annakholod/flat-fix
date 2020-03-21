import React from "react";
import style from "./MenuOverlay.module.css";
import Menu from "../Menu/Menu";

const MenuOverlay = ({ toggleMenu, delta, toggleAction }) => {
  return (
    <div className={style.menuOverlay}>
      <Menu toggleMenu={toggleMenu} delta={delta} toggleAction={toggleAction} />
    </div>
  );
};

export default MenuOverlay;
