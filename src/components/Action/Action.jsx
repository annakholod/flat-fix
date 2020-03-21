import React, { Component } from "react";
import style from "./Action.module.css";
import Timer from "../Timer/Timer";
import NumberFormat from "react-number-format";
import Modal from "../Modal/Modal";
import ModalMessage from "../ModalMessage/ModalMessage";
import shortid from "shortid";

const promo = shortid.generate();

class Action extends Component {
  state = {
    userName: "",
    userPhone: "",
    nameEmpty: false,
    phoneEmpty: false,
    isOpenModal: false
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
      phoneEmpty: name === "userPhone" && false
    });
  };

  handleSubmit = evt => {
    const { userName, userPhone } = this.state;
    evt.preventDefault();

    if (!userName || !userPhone || userPhone.includes("_")) {
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
      //// send form to email
      this.setState({
        isOpenModal: true
      });
    }
  };

  closeModal = () => {
    this.setState({
      isOpenModal: false,
      userName: "",
      userPhone: "",
      nameEmpty: false,
      phoneEmpty: false
    });
  };

  render() {
    const {
      userName,
      userPhone,
      nameEmpty,
      phoneEmpty,
      isOpenModal
    } = this.state;
    const {
      firstDay,
      secondDay,
      firstHour,
      secondHour,
      firstMinute,
      secondMinute,
      firstSecond,
      secondSecond,
      isOpenAction
    } = this.props;

    return (
      <div
        className={style.overlay}
        style={{ display: isOpenAction && "block" }}
      >
        <div className={style.overlayBorder}>
          <p className={style.title}>
            Оставь заявку сейчас и получи{" "}
            <span className={style.titleDecor}>скидку 15%</span> на ремонт
          </p>
          <p className={style.endAction}>до конца акции осталось:</p>
          <Timer
            firstDay={firstDay}
            secondDay={secondDay}
            firstHour={firstHour}
            secondHour={secondHour}
            firstMinute={firstMinute}
            secondMinute={secondMinute}
            firstSecond={firstSecond}
            secondSecond={secondSecond}
          />
          <form action="" className={style.form}>
            <div className={style.inputOverlay}>
              <input
                className={style.input}
                type="text"
                name="userName"
                value={userName}
                id=""
                placeholder="Ваше имя"
                onChange={this.handleChange}
              />
              {(userName && <p className={style.placeholder}>Ваше имя</p>) ||
                (nameEmpty && !userName && (
                  <p className={style.placeholderEmpty}>Укажите ваше имя</p>
                ))}
            </div>
            <div className={style.inputOverlay}>
              <NumberFormat
                className={style.input}
                type="tel"
                format="+38 (###) ###-##-##"
                mask="_"
                name="userPhone"
                value={userPhone}
                placeholder="Ваш телефон"
                onChange={this.handleChange}
              />
              {(phoneEmpty && (
                <p className={style.placeholderEmpty}>Укажите ваш телефон</p>
              )) ||
                (userPhone && <p className={style.placeholder}>Ваш телефон</p>)}
            </div>
            <button
              className={style.button}
              type="submit"
              onClick={this.handleSubmit}
            >
              Получить скидку
            </button>
          </form>
        </div>
        {isOpenModal && (
          <Modal closeModal={this.closeModal}>
            <ModalMessage
              userName={userName}
              text="Ваш промокод на скидку 15%"
              textSecond={promo}
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default Action;
