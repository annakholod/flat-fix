import React from "react";
import style from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Address from "../Address/Address";
import contacts from "../../helpers/contacts";
import Socials from "../Socials/Socials";

const Footer = () => {
  return (
    <div>
      <div className={style.footer}>
        <div className={style.overlay}>
          <div className={style.logoOverlay}>
            <div className={style.logo}>
              <Logo />
              <Address />
            </div>
            <div className={style.socials}>
              <Socials />
            </div>
          </div>
          <div className={style.contacts}>
            <p className={style.phone}>{contacts.phone}</p>
            <p className={style.phoneSecond}>{contacts.phoneSecond}</p>
            <p className={style.phone}>{contacts.email}</p>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}></div>
    </div>
  );
};

export default Footer;
