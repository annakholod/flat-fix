import React from "react";
import style from "./AboutWork.module.css";
import Title from "../Title/Title";
import SvgExperience from "../../svg/SvgExperience/SvgExperience";
import SvgClient from "../../svg/SvgClient/SvgClient";
import SvgPuzzle from "../../svg/SvgPuzzle/SvgPuzzle";
import SvgWarranty from "../../svg/SvgWarranty/SvgWarranty";
import SvgContract from "../../svg/SvgContract/SvgContract";
import SvgWithoutMoney from "../../svg/SvgWithoutMoney/SvgWithoutMoney";
import SvgSmallRepairs from "../../svg/SvgSmallRepairs/SvgSmallRepairs";
import SvgBigRepairs from "../../svg/SvgBigRepairs/SvgBigRepairs";
import SvgDesign from "../../svg/SvgDesign/SvgDesign";

const AboutWork = () => {
  return (
    <div className={style.about}>
      <Title title="О нашей работе" />
      <div className={style.wrapper}>
        <div className={style.container}>
          <SvgExperience />
          <p className={style.title}>
            Более <span className={style.titleDecor}>9 лет</span> работы
          </p>
        </div>
        <div className={style.container}>
          <SvgPuzzle />
          <p className={style.title}>
            <span className={style.titleDecor}>14 787 м2</span> площадь
            выполненных работ
          </p>
        </div>
        <div className={style.container}>
          <SvgClient />
          <p className={style.title}>
            <span className={style.titleDecor}>863</span> заказчика
          </p>
        </div>
        <div className={style.container}>
          <SvgWarranty />
          <p className={style.title}>
            Гарантия <span className={style.titleDecor}>2 года</span>
          </p>
        </div>
        <div className={style.container}>
          <SvgContract />
          <p className={style.title}>Работа по договору</p>
        </div>
        <div className={style.container}>
          <SvgWithoutMoney />
          <p className={style.title}>Без предоплаты</p>
        </div>
        <div className={style.container}>
          <SvgSmallRepairs />
          <p className={`${style.title} ${style.titleUpper}`}>
            <span className={style.titleDecor}>Косметический</span> ремонт от
            <span className={style.titleDecor}> 150</span> грн./м2
          </p>
        </div>
        <div className={style.container}>
          <SvgBigRepairs />
          <p className={`${style.title} ${style.titleUpper}`}>
            <span className={style.titleDecor}>Капитальный</span> ремонт от{" "}
            <span className={style.titleDecor}>300</span> грн./м2
          </p>
        </div>
        <div className={style.container}>
          <SvgDesign />
          <p className={`${style.title} ${style.titleUpper}`}>
            Дизайн проект от <span className={style.titleDecor}>450</span>{" "}
            грн./м2
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutWork;
