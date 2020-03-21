import React, { Component } from "react";
import style from "./Question.module.css";
import Title from "../Title/Title";
import Map from "../Map/Map";
import NumberFormat from "react-number-format";
import Modal from "../Modal/Modal";
import ModalMessage from "../ModalMessage/ModalMessage";

class Question extends Component {
  state = {
    userName: "",
    userPhone: "",
    question: "",
    nameEmpty: false,
    phoneEmpty: false,
    questionEmpty: false,
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
    const { userName, userPhone, question } = this.state;
    evt.preventDefault();

    if (!userName || !question || !userPhone || userPhone.includes("_")) {
      if (!userName) {
        this.setState({
          nameEmpty: true
        });
      }
      if (!question) {
        this.setState({
          questionEmpty: true
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
      question: "",
      nameEmpty: false,
      phoneEmpty: false,
      questionEmpty: false,
      isOpenModal: false
    });
  };

  render() {
    const {
      userName,
      userPhone,
      question,
      nameEmpty,
      phoneEmpty,
      questionEmpty,
      isOpenModal
    } = this.state;

    return (
      <div className={style.question}>
        <Title title="Оставьте заявку" />
        <p className={style.text}>
          Наши специалисты свяжутся с вами в{" "}
          <span className={style.textDecor}>самое короткое время</span>
        </p>
        <div className={style.content}>
          <form className={style.form} action="">
            <div className={style.inputs}>
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
                  (userPhone && (
                    <p className={style.placeholder}>Ваш телефон</p>
                  ))}
              </div>
            </div>
            <div className={style.textareaOverlay}>
              <textarea
                className={style.textarea}
                name="question"
                value={question}
                id=""
                rows="6"
                placeholder="Ваш вопрос"
                onChange={this.handleChange}
              />
              {(question && <p className={style.placeholder}>Ваше имя</p>) ||
                (questionEmpty && !question && (
                  <p className={style.placeholderEmpty}>Укажите ваше имя</p>
                ))}
            </div>
            <button
              type="submit"
              className={style.button}
              onClick={this.handleSubmit}
            >
              Оставить заявку
            </button>
          </form>
          <Map />
        </div>
        {isOpenModal && (
          <Modal closeModal={this.closeModal}>
            <ModalMessage
              userName={userName}
              text="Мы рассмотрим ваш вопрос и свяжемся с вами."
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default Question;
