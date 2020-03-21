import React, { Component } from "react";
import style from "./CostBuilding.module.css";
import CostContactForm from "../CostContactForm/CostContactForm";
import { optionsCount } from "../../helpers/options";
import NumberFormat from "react-number-format";
import Modal from "../Modal/Modal";
import ModalMessage from "../ModalMessage/ModalMessage";

class CostBuilding extends Component {
  state = {
    amountFloors: undefined,
    amountRooms: undefined,
    totalSpace: null,
    livingSpace: null,
    userName: "",
    userPhone: "",
    needRepair: false,
    needDesign: false,
    isOpenModal: false,
    amountFloorsEmpty: false,
    amountRoomsEmpty: false,
    totalSpaceEmpty: false,
    livingSpaceEmpty: false,
    nameEmpty: false,
    phoneEmpty: false
  };

  componentDidMount() {
    try {
      const building = localStorage.getItem("building");
      const buildingParse = JSON.parse(building);
      this.setState({
        amountFloors:
          buildingParse.amountFloors === null
            ? undefined
            : buildingParse.amountFloors,
        amountRooms:
          buildingParse.amountRooms === null
            ? undefined
            : buildingParse.amountRooms,
        totalSpace:
          buildingParse.totalSpace === null ? "" : buildingParse.totalSpace,
        livingSpace:
          buildingParse.livingSpace === null ? "" : buildingParse.livingSpace,
        needRepair:
          buildingParse.needRepair === null ? false : buildingParse.needRepair,
        needDesign:
          buildingParse.needDesign === null ? false : buildingParse.needDesign,
        userName: buildingParse.userName === null ? "" : buildingParse.userName,
        userPhone:
          buildingParse.userPhone === null ? "" : buildingParse.userPhone
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      amountFloors,
      amountRooms,
      totalSpace,
      livingSpace,
      needRepair,
      needDesign,
      userName,
      userPhone
    } = this.state;

    if (
      prevState.amountFloors !== amountFloors ||
      prevState.amountRooms !== amountRooms ||
      prevState.totalSpace !== totalSpace ||
      prevState.livingSpace !== livingSpace ||
      prevState.needRepair !== needRepair ||
      prevState.needDesign !== needDesign ||
      prevState.userName !== userName ||
      prevState.userPhone !== userPhone
    ) {
      const building = {
        amountFloors,
        amountRooms,
        totalSpace,
        livingSpace,
        needRepair,
        needDesign,
        userName,
        userPhone
      };
      try {
        localStorage.setItem("building", JSON.stringify(building));
      } catch (err) {
        console.log(err);
      }
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "totalSpace" && value[0] === "0") {
      this.setState({ totalSpaceEmpty: true });
      return;
    }
    if (name === "livingSpace" && value[0] === "0") {
      this.setState({ livingSpaceEmpty: true });
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
    const {
      amountFloors,
      amountRooms,
      totalSpace,
      livingSpace,
      userName,
      userPhone
    } = this.state;
    evt.preventDefault();
    if (
      !amountFloors ||
      !amountRooms ||
      !totalSpace ||
      !livingSpace ||
      !userName ||
      !userPhone ||
      userPhone.includes("_")
    ) {
      if (!amountFloors) {
        this.setState({
          amountFloorsEmpty: true
        });
      }
      if (!amountRooms) {
        this.setState({
          amountRoomsEmpty: true
        });
      }
      if (!totalSpace || totalSpace === "0") {
        this.setState({
          totalSpaceEmpty: true
        });
      }
      if (!livingSpace || livingSpace === "0") {
        this.setState({
          livingSpaceEmpty: true
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
      ////
      this.setState({
        isOpenModal: true
      });
    }
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      amountFloors: undefined,
      amountRooms: undefined,
      totalSpace: null,
      livingSpace: null,
      userName: "",
      userPhone: "",
      needRepair: false,
      needDesign: false,
      amountFloorsEmpty: false,
      amountRoomsEmpty: false,
      totalSpaceEmpty: false,
      livingSpaceEmpty: false,
      nameEmpty: false,
      phoneEmpty: false
    });
  };

  render() {
    const {
      amountFloors,
      amountRooms,
      totalSpace,
      livingSpace,
      userName,
      userPhone,
      isOpenModal,
      amountFloorsEmpty,
      amountRoomsEmpty,
      totalSpaceEmpty,
      livingSpaceEmpty,
      nameEmpty,
      phoneEmpty
    } = this.state;

    return (
      <div className={style.costBuilding}>
        <form action="" onSubmit={this.handleSubmit}>
          <div className={style.selects}>
            <div className={style.inputOverlay}>
              <select
                className={style.select}
                name="amountFloors"
                value={amountFloors}
                id=""
                defaultValue="Количество этажей"
                onChange={this.handleChange}
              >
                {!amountFloors && (
                  <option className={style.option}>Количество этажей</option>
                )}
                {optionsCount.map(el => (
                  <option
                    className={style.option}
                    value={el.value}
                    key={el.value}
                  >
                    {el.value}
                  </option>
                ))}
              </select>
              {amountFloors && (
                <p className={style.placeholder}>Количество этажей</p>
              )}
              {amountFloorsEmpty && !amountFloors && (
                <p className={style.placeholderEmpty}>
                  Укажите количество этажей
                </p>
              )}
            </div>
            <div className={style.inputOverlay}>
              <NumberFormat
                className={style.input}
                type="text"
                format="#######"
                name="totalSpace"
                value={totalSpace}
                placeholder="Общая площадь (кв.м)"
                onChange={this.handleChange}
              />
              {totalSpace && (
                <p className={style.placeholder}>Общая площадь (кв.м)</p>
              )}
              {totalSpaceEmpty && !totalSpace && (
                <p className={style.placeholderEmpty}>
                  Не указана общая площадь
                </p>
              )}
            </div>
            <div className={style.inputOverlay}>
              <NumberFormat
                className={style.input}
                type="text"
                format="#######"
                name="livingSpace"
                value={livingSpace}
                placeholder="Жилая площадь (кв.м)"
                onChange={this.handleChange}
              />
              {livingSpace && (
                <p className={style.placeholder}>Жилая площадь (кв.м)</p>
              )}
              {livingSpaceEmpty && !livingSpace && (
                <p className={style.placeholderEmpty}>
                  Не указана жилая площадь
                </p>
              )}
            </div>
          </div>
          <div className={style.selectsBottom}>
            <div className={style.inputOverlay}>
              <select
                className={style.select}
                name="amountRooms"
                id=""
                value={amountRooms}
                defaultValue="Количество комнат"
                onChange={this.handleChange}
              >
                {!amountRooms && (
                  <option className={style.option}>Количество комнат</option>
                )}
                {optionsCount.map(el => (
                  <option
                    className={style.option}
                    value={el.value}
                    key={el.value}
                  >
                    {el.value}
                  </option>
                ))}
              </select>
              {amountRooms && (
                <p className={style.placeholder}>Количество комнат</p>
              )}
              {amountRoomsEmpty && !amountRooms && (
                <p className={style.placeholderEmpty}>
                  Укажите количество комнат
                </p>
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
                onChange={this.handleChangeCheckbox}
              />
              <label className={style.radioLabel} htmlFor="needRepair">
                Нужен ремонт
              </label>
            </div>
            <div>
              <input
                className={style.radio}
                type="checkbox"
                id="needDesign"
                name="needDesign"
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

export default CostBuilding;
