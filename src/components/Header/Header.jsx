import React from "react";
import style from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import HeaderMain from "../HeaderMain/HeaderMain";
import FormCallMaster from "../FormCallMaster/FormCallMaster";
import Action from "../Action/Action";
import Address from "../Address/Address";
import Socials from "../Socials/Socials";
import { Link } from "react-scroll";
import Modal from "../Modal/Modal";

const Header = ({
  delta,
  firstDay,
  secondDay,
  firstHour,
  secondHour,
  firstMinute,
  secondMinute,
  firstSecond,
  secondSecond,
  isOpenAction,
  toggleAction
}) => {
  return (
    <div className={style.header}>
      <div className={style.headerWrapper}>
        <Navigation delta={delta} toggleAction={toggleAction} />
        <HeaderMain />
        <div className={style.formCallOverlay}>
          <FormCallMaster />
        </div>
        {delta && (
          <Action
            firstDay={firstDay}
            secondDay={secondDay}
            firstHour={firstHour}
            secondHour={secondHour}
            firstMinute={firstMinute}
            secondMinute={secondMinute}
            firstSecond={firstSecond}
            secondSecond={secondSecond}
          />
        )}
        <div className={style.footer}>
          <Address />
          <Link
            className={style.buttonScroll}
            to="aboutWork"
            spy={true}
            smooth={true}
            duration={400}
          >
            <i className="material-icons">keyboard_arrow_down</i>
          </Link>
          <div className={style.socials}>
            <Socials />
          </div>
        </div>
      </div>
      {isOpenAction && (
        <Modal closeModal={toggleAction}>
          <Action
            isOpenAction={isOpenAction}
            firstDay={firstDay}
            secondDay={secondDay}
            firstHour={firstHour}
            secondHour={secondHour}
            firstMinute={firstMinute}
            secondMinute={secondMinute}
            firstSecond={firstSecond}
            secondSecond={secondSecond}
          />
        </Modal>
      )}
    </div>
  );
};

export default Header;
