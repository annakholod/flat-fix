import React, { Component } from "react";
import style from "./CostDesign.module.css";
import CostContactForm from "../CostContactForm/CostContactForm";
import { optionsType, optionsStyle } from "../../helpers/options";
import NumberFormat from "react-number-format";
import Modal from "../Modal/Modal";
import ModalMessage from "../ModalMessage/ModalMessage";

class CostDesign extends Component {
  state = {
    typeBuilding: undefined,
    styleBuilding: undefined,
    space: "",
    clientWishes: "",
    userName: "",
    userPhone: "",
    isOpenModal: false,
    typeBuildingEmpty: false,
    styleBuildingEmpty: false,
    spaceEmpty: false,
    clientWishesEmpty: false,
    nameEmpty: false,
    phoneEmpty: false
  };

  componentDidMount() {
    try {
      const design = localStorage.getItem("design");
      const designParse = JSON.parse(design);
      this.setState({
        typeBuilding:
          designParse.typeBuilding === null
            ? undefined
            : designParse.typeBuilding,
        styleBuilding:
          designParse.styleBuilding === null
            ? undefined
            : designParse.styleBuilding,
        space: designParse.space === null ? "" : designParse.space,
        clientWishes:
          designParse.clientWishes === null ? "" : designParse.clientWishes,
        userName: designParse.userName === null ? "" : designParse.userName,
        userPhone: designParse.userPhone === null ? "" : designParse.userPhone
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      typeBuilding,
      styleBuilding,
      space,
      clientWishes,
      userName,
      userPhone
    } = this.state;

    if (
      prevState.typeBuilding !== typeBuilding ||
      prevState.styleBuilding !== styleBuilding ||
      prevState.space !== space ||
      prevState.clientWishes !== clientWishes ||
      prevState.userName !== userName ||
      prevState.userPhone !== userPhone
    ) {
      const design = {
        typeBuilding,
        styleBuilding,
        space,
        clientWishes,
        userName,
        userPhone
      };
      try {
        localStorage.setItem("design", JSON.stringify(design));
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

  handleSubmit = evt => {
    const {
      typeBuilding,
      styleBuilding,
      space,
      userName,
      userPhone
    } = this.state;
    evt.preventDefault();

    if (
      !typeBuilding ||
      !styleBuilding ||
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
      if (!styleBuilding) {
        this.setState({
          styleBuildingEmpty: true
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
      styleBuilding: undefined,
      space: "",
      clientWishes: "",
      userName: "",
      userPhone: "",
      typeBuildingEmpty: false,
      styleBuildingEmpty: false,
      spaceEmpty: false,
      clientWishesEmpty: false,
      nameEmpty: false,
      phoneEmpty: false
    });
  };

  render() {
    const {
      typeBuilding,
      styleBuilding,
      space,
      clientWishes,
      userName,
      userPhone,
      isOpenModal,
      typeBuildingEmpty,
      styleBuildingEmpty,
      spaceEmpty,
      nameEmpty,
      phoneEmpty
    } = this.state;

    return (
      <div className={style.costDesign}>
        <form action="" onSubmit={this.handleSubmit}>
          <div className={style.selects}>
            <div className={style.inputOverlay}>
              <select
                className={style.select}
                name="typeBuilding"
                value={typeBuilding}
                id=""
                defaultValue={"Тип помещения"}
                onChange={this.handleChange}
              >
                {!typeBuilding && (
                  <option className={style.option}>Тип помещения</option>
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
                name="styleBuilding"
                value={styleBuilding}
                id=""
                defaultValue={"Стиль"}
                onChange={this.handleChange}
              >
                {!styleBuilding && (
                  <option className={style.option}>Стиль</option>
                )}
                {optionsStyle.map(el => (
                  <option
                    className={style.option}
                    value={el.value}
                    key={el.value}
                  >
                    {el.value}
                  </option>
                ))}
              </select>
              {styleBuilding && <p className={style.placeholder}>Стиль</p>}
              {styleBuildingEmpty && !styleBuilding && (
                <p className={style.placeholderEmpty}>Выбарите стиль</p>
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
          <div className={style.textareaOverlay}>
            <textarea
              className={style.textarea}
              name="clientWishes"
              value={clientWishes}
              id=""
              rows="6"
              placeholder="Ваши пожелания"
              onChange={this.handleChange}
            />
            {clientWishes && (
              <p className={style.placeholder}>Ваши пожелания</p>
            )}
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

export default CostDesign;
