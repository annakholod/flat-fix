import React from "react";
import style from "./Address.module.css";

const Address = () => {
  return (
    <div className={style.addressSection}>
      <p className={style.addressTitle}>Наш адрес</p>
      <p className={style.address}>Проспект Гагарина 158В</p>
    </div>
  );
};

export default Address;
