import React, { Component } from "react";
import style from "./Menu.module.css";
import { Link } from "react-scroll";

class Menu extends Component {
  handleClickAction = () => {
    const { toggleMenu, toggleAction } = this.props;
    toggleAction();
    toggleMenu();
  };

  render() {
    const { toggleMenu, delta } = this.props;
    return (
      <div className={style.menu}>
        <ul className={style.navList}>
          <Link to="aboutWork" spy={true} smooth={true} duration={400}>
            <li className={style.listItem} onClick={toggleMenu}>
              О нас
            </li>
          </Link>
          <Link to="services" spy={true} smooth={true} duration={400}>
            <li className={style.listItem} onClick={toggleMenu}>
              Наши услуги
            </li>
          </Link>
          <Link to="works" spy={true} smooth={true} duration={400}>
            <li className={style.listItem} onClick={toggleMenu}>
              Портфолио
            </li>
          </Link>
          <Link to="cost" spy={true} smooth={true} duration={400}>
            <li className={style.listItem} onClick={toggleMenu}>
              Узнать цену
            </li>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={400}>
            <li className={style.listItem} onClick={toggleMenu}>
              Контакты
            </li>
          </Link>
          {document.documentElement.clientWidth < 767 && delta && (
            <li
              className={`${style.listItem} ${style.listItemAction}`}
              onClick={this.handleClickAction}
            >
              Скидка 15%
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Menu;
