import React from "react";
import style from "./RequestMasterModal.module.css";
import NumberFormat from "react-number-format";

const RequestMasterModal = ({
  userName,
  userPhone,
  nameEmpty,
  phoneEmpty,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className={style.formOverlay}>
      <p className={style.title}>
        Записаться на бесплатный замер. выезд замерщика в день обращения
      </p>
      <form action="" className={style.form}>
        <div className={style.inputOverlay}>
          <input
            className={style.input}
            type="text"
            name="userName"
            value={userName}
            id=""
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
        <button type="submit" className={style.button} onClick={handleSubmit}>
          Оставить заявку
        </button>
      </form>
    </div>
  );
};

export default RequestMasterModal;
