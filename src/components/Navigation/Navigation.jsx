import React, { Component } from "react";
import style from "./Navigation.module.css";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import contacts from "../../helpers/contacts.json";
import MenuOverlay from "../MenuOverlay/MenuOverlay";
import BtnOpenMenu from "../BtnOpenMenu/BtnOpenMenu";

class Navigation extends Component {
  state = {
    isOpenMenu: false
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isOpenMenu: !prevState.isOpenMenu
    }));
  };

  render() {
    const { isOpenMenu } = this.state;
    const { delta, toggleAction } = this.props;

    return (
      <div className={style.nav}>
        <Logo />
        <BtnOpenMenu isOpenMenu={isOpenMenu} toggleMenu={this.toggleMenu} />
        {document.documentElement.clientWidth > 767 && <Menu />}
        {isOpenMenu && (
          <MenuOverlay
            toggleMenu={this.toggleMenu}
            delta={delta}
            toggleAction={toggleAction}
          />
        )}
        <div className={style.contacts}>
          <p className={style.phone}>{contacts.phone}</p>
          <p className={style.email}>{contacts.email}</p>
        </div>
      </div>
    );
  }
}

export default Navigation;
