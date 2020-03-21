import React from "react";
import style from "./CostContactForm.module.css";
import NumberFormat from "react-number-format";

const CostContactForm = ({
  userName,
  userPhone,
  nameEmpty,
  phoneEmpty,
  handleChange
}) => {
  return (
    <div className={style.contacts}>
      <div className={style.inputOverlay}>
        <input
          className={style.input}
          type="text"
          name="userName"
          id=""
          value={userName}
          placeholder="Ваше имя"
          onChange={handleChange}
        />
        {(userName && <p className={style.placeholder}>Ваше имя</p>) ||
          (nameEmpty && !userName && (
            <p className={style.placeholderEmpty}>Укажите ваше имя</p>
          ))}
      </div>
      <div className={style.inputOverlay}>
        <NumberFormat
          className={style.input}
          type="tel"
          format="+38 (###) ###-##-##"
          mask="_"
          name="userPhone"
          value={userPhone}
          placeholder="Ваш телефон"
          onChange={handleChange}
        />
        {(phoneEmpty && (
          <p className={style.placeholderEmpty}>Укажите ваш телефон</p>
        )) ||
          (userPhone && <p className={style.placeholder}>Ваш телефон</p>)}
      </div>
      <button type="submit" className={style.button}>
        Рассчитать стоимость
      </button>
    </div>
  );
};

export default CostContactForm;
