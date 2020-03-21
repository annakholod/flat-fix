import React, { Component } from "react";
import style from "./FormCallMaster.module.css";
import NumberFormat from "react-number-format";
import Modal from "../Modal/Modal";
import ModalMessage from "../ModalMessage/ModalMessage";

class FormCallMaster extends Component {
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
      userName: "",
      userPhone: "",
      nameEmpty: false,
      phoneEmpty: false,
      isOpenModal: false
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

    return (
      <div>
        <p className={style.title}>
          Записаться на бесплатный замер. выезд замерщика в день обращения
        </p>
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
            type="submit"
            className={style.button}
            onClick={this.handleSubmit}
          >
            Оставить заявку
          </button>
        </form>
        {isOpenModal && (
          <Modal closeModal={this.closeModal}>
            <ModalMessage
              userName={userName}
              text="Мы свяжемся с вами перед выездом мастера."
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default FormCallMaster;
