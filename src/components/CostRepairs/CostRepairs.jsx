import React, { Component } from "react";
import style from "./CostRepairs.module.css";
import { optionsType, optionsRepairs } from "../../helpers/options";
import NumberFormat from "react-number-format";
import CostContactForm from "../CostContactForm/CostContactForm";
import Modal from "../Modal/Modal";
import ModalMessage from "../ModalMessage/ModalMessage";

class CostRepairs extends Component {
  state = {
    typeBuilding: undefined,
    typeRepair: undefined,
    space: "",
    needRepair: false,
    needDesign: false,
    userName: "",
    userPhone: "",
    isOpenModal: false,
    typeBuildingEmpty: false,
    typeRepairEmpty: false,
    spaceEmpty: false,
    nameEmpty: false,
    phoneEmpty: false
  };

  componentDidMount() {
    try {
      const repair = localStorage.getItem("repair");
      const repairParse = JSON.parse(repair);
      this.setState({
        typeBuilding:
          repairParse.typeBuilding === null
            ? undefined
            : repairParse.typeBuilding,
        typeRepair:
          repairParse.typeRepair === null ? undefined : repairParse.typeRepair,
        space: repairParse.space === null ? "" : repairParse.space,
        needRepair:
          repairParse.needRepair === null ? false : repairParse.needRepair,
        needDesign:
          repairParse.needDesign === null ? false : repairParse.needDesign,
        userName: repairParse.userName === null ? "" : repairParse.userName,
        userPhone: repairParse.userPhone === null ? "" : repairParse.userPhone
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      typeBuilding,
      typeRepair,
      space,
      needRepair,
      needDesign,
      userName,
      userPhone
    } = this.state;

    if (
      prevState.typeBuilding !== typeBuilding ||
      prevState.typeRepair !== typeRepair ||
      prevState.space !== space ||
      prevState.needRepair !== needRepair ||
      prevState.needDesign !== needDesign ||
      prevState.userName !== userName ||
      prevState.userPhone !== userPhone
    ) {
      const repair = {
        typeBuilding,
        typeRepair,
        space,
        needRepair,
        needDesign,
        userName,
        userPhone
      };
      try {
        localStorage.setItem("repair", JSON.stringify(repair));
      } catch (err) {
        console.log(err);
      }
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "space" && value[0] === "0") {
      this.setState({ spaceEmpty: true });
      return;
    }
    this.setState({
      [name]: value.trim(),
      phoneEmpty: name === "userPhone" && false
    });
  };

  handleChangeCheckbox = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: target.checked ? true : false
    });
  };

  handleSubmit = evt => {
    const { typeBuilding, typeRepair, space, userName, userPhone } = this.state;
    evt.preventDefault();

    if (
      !typeBuilding ||
      !typeRepair ||
      !space ||
      !userName ||
      !userPhone ||
      userPhone.includes("_")
    ) {
      if (!typeBuilding) {
        this.setState({
          typeBuildingEmpty: true
        });
      }
      if (!typeRepair) {
        this.setState({
          typeRepairEmpty: true
        });
      }
      if (!space || space === "0") {
        this.setState({
          spaceEmpty: true
        });
      }
      if (!userName) {
        this.setState({
          nameEmpty: true
        });
      }
      if (!userPhone || userPhone.includes("_")) {
        this.setState({
          phoneEmpty: true
        });
      }
    } else {
      //////
      this.setState({
        isOpenModal: true
      });
    }
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      typeBuilding: undefined,
      typeRepair: undefined,
      space: "",
      needRepair: false,
      needDesign: false,
      userName: "",
      userPhone: "",
      typeBuildingEmpty: false,
      typeRepairEmpty: false,
      spaceEmpty: false,
      nameEmpty: false,
      phoneEmpty: false
    });
  };

  render() {
    const {
      typeBuilding,
      typeRepair,
      space,
      needRepair,
      needDesign,
      userName,
      userPhone,
      isOpenModal,
      typeBuildingEmpty,
      typeRepairEmpty,
      spaceEmpty,
      nameEmpty,
      phoneEmpty
    } = this.state;

    return (
      <div className={style.costRepairs}>
        <form action="" onSubmit={this.handleSubmit}>
          <div className={style.selects}>
            <div className={style.inputOverlay}>
              <select
                className={style.select}
                name="typeBuilding"
                value={typeBuilding}
                id=""
                defaultValue="Тип помещения"
                onChange={this.handleChange}
              >
                {!typeBuilding && (
                  <option className={style.option} hidden>
                    Тип помещения
                  </option>
                )}
                {optionsType.map(el => (
                  <option
                    className={style.option}
                    value={el.value}
                    key={el.value}
                  >
                    {el.value}
                  </option>
                ))}
              </select>
              {typeBuilding && (
                <p className={style.placeholder}>Тип помещения</p>
              )}
              {typeBuildingEmpty && !typeBuilding && (
                <p className={style.placeholderEmpty}>Выберите тип помещения</p>
              )}
            </div>
            <div className={style.inputOverlay}>
              <select
                className={style.select}
                name="typeRepair"
                value={typeRepair}
                id=""
                defaultValue="Тип ремонта"
                onChange={this.handleChange}
              >
                {!typeRepair && (
                  <option className={style.option} hidden>
                    Тип ремонта
                  </option>
                )}
                {optionsRepairs.map(el => (
                  <option
                    className={style.option}
                    value={el.value}
                    key={el.value}
                  >
                    {el.value}
                  </option>
                ))}
              </select>
              {typeRepair && <p className={style.placeholder}>Тип ремонта</p>}
              {typeRepairEmpty && !typeRepair && (
                <p className={style.placeholderEmpty}>Выберите тип ремонта</p>
              )}
            </div>
            <div className={style.inputOverlay}>
              <NumberFormat
                className={style.input}
                type="text"
                format="#######"
                name="space"
                value={space}
                placeholder="Площадь помещения (кв.м)"
                onChange={this.handleChange}
              />
              {space && (
                <p className={style.placeholder}>Площадь помещения (кв.м)</p>
              )}
              {spaceEmpty && !space && (
                <p className={style.placeholderEmpty}>Не указана площадь</p>
              )}
            </div>
          </div>
          <div className={style.radioButton}>
            <div>
              <input
                className={style.radio}
                type="checkbox"
                id="needRepair"
                name="needRepair"
                value={needRepair}
                onChange={this.handleChangeCheckbox}
              />
              <label className={style.radioLabel} htmlFor="needRepair">
                Нужна перепланировка
              </label>
            </div>
            <div>
              <input
                className={style.radio}
                type="checkbox"
                id="needDesign"
                name="needDesign"
                value={needDesign}
                onChange={this.handleChangeCheckbox}
              />
              <label className={style.radioLabel} htmlFor="needDesign">
                Необходим дизай-проект
              </label>
            </div>
          </div>
          <CostContactForm
            userName={userName}
            userPhone={userPhone}
            nameEmpty={nameEmpty}
            phoneEmpty={phoneEmpty}
            handleChange={this.handleChange}
          />
        </form>
        {isOpenModal && (
          <Modal closeModal={this.closeModal}>
            <ModalMessage
              userName={userName}
              text="Мы свяжемся с вами после просчета."
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default CostRepairs;
