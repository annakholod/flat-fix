import React, { Component } from "react";
import style from "./Cost.module.css";
import Title from "../Title/Title";
import CostRepairs from "../CostRepairs/CostRepairs";
import CostBuilding from "../CostBuilding/CostBuilding";
import CostDesign from "../CostDesign/CostDesign";

class Cost extends Component {
  state = {
    isCostRepairs: true,
    isCostBuilding: false,
    isCostDesign: false
  };

  checkMenu = ({ target }) => {
    const { name } = target;

    if (name === "repairs") {
      this.setState({
        isCostRepairs: true,
        isCostBuilding: false,
        isCostDesign: false
      });
    } else if (name === "building") {
      this.setState({
        isCostRepairs: false,
        isCostBuilding: true,
        isCostDesign: false
      });
    } else if (name === "design") {
      this.setState({
        isCostRepairs: false,
        isCostBuilding: false,
        isCostDesign: true
      });
    }
  };

  render() {
    const { isCostRepairs, isCostBuilding, isCostDesign } = this.state;

    return (
      <div className={style.cost}>
        <Title title="Рассчет стоимости" />
        <button
          name="repairs"
          type="button"
          className={
            isCostRepairs
              ? `${style.btnMenu} ${style.btnMenuActive}`
              : style.btnMenu
          }
          onClick={this.checkMenu}
        >
          Отделка
        </button>
        <button
          name="building"
          type="button"
          className={
            isCostBuilding
              ? `${style.btnMenu} ${style.btnMenuActive}`
              : style.btnMenu
          }
          onClick={this.checkMenu}
        >
          Строительство
        </button>
        <button
          name="design"
          type="button"
          className={
            isCostDesign
              ? `${style.btnMenu} ${style.btnMenuActive}`
              : style.btnMenu
          }
          onClick={this.checkMenu}
        >
          Дизайн
        </button>
        {isCostRepairs && <CostRepairs />}
        {isCostBuilding && <CostBuilding />}
        {isCostDesign && <CostDesign />}
      </div>
    );
  }
}

export default Cost;
