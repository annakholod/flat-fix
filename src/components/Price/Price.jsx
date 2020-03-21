import React from "react";
import style from "./Price.module.css";
import Title from "../../components/Title/Title";
import price from "../../helpers/price.json";

const Price = () => {
  return (
    <div className={style.price}>
      <Title title="Цены на услуги" />
      <ul className={style.priceList}>
        {price.map((el, index) => (
          <li className={style.listItem} key={el.id}>
            <div className={style.imgOverlay}>
              <img className={style.image} src={el.image} alt={el.title} />
            </div>
            <p className={style.title}>{el.title}</p>
            {el.category && <p className={style.category}>({el.category})</p>}
            <p className={style.mainPrice}>
              от <span className={style.cost}>{el.price}</span> {el.unit}
            </p>
            <button type="button" className={style.button}>
              Посчитать
            </button>
            <p className={style.number}>{index + 1}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Price;
