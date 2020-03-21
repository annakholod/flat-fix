import React, { Component } from "react";
import style from "./Request.module.css";
import Title from "../Title/Title";
import Modal from "../Modal/Modal";
import RequestMasterModal from "../RequestMasterModal/RequestMasterModal";
import ModalMessage from "../ModalMessage/ModalMessage";

class Request extends Component {
  state = {
    isOpenModal: false,
    isOpenForm: false,
    isOpenMessage: false,
    userName: "",
    userPhone: "",
    nameEmpty: false,
    phoneEmpty: false
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
      isOpenForm: true,
      userName: "",
      userPhone: "",
      nameEmpty: false,
      phoneEmpty: false
    }));
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
        isOpenForm: false,
        isOpenMessage: true
      });
    }
  };

  render() {
    const {
      isOpenModal,
      isOpenForm,
      isOpenMessage,
      userName,
      userPhone,
      nameEmpty,
      phoneEmpty
    } = this.state;

    return (
      <div className={style.sectionRequest}>
        <div className={style.wrapper}>
          <Title title="Оставьте заявку на замер" />
          <div className={style.content}>
            <p className={style.text}>
              Наши специалисты свяжутся с вами в{" "}
              <span className={style.textDecor}>самое короткое время</span>
            </p>
            <button
              type="button"
              className={style.button}
              onClick={this.toggleModal}
            >
              Записаться на замер
            </button>
          </div>
        </div>
        {(isOpenModal && isOpenForm && (
          <Modal closeModal={this.toggleModal}>
            <RequestMasterModal
              userName={userName}
              userPhone={userPhone}
              nameEmpty={nameEmpty}
              phoneEmpty={phoneEmpty}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Modal>
        )) ||
          (isOpenModal && isOpenMessage && (
            <Modal closeModal={this.toggleModal}>
              <ModalMessage
                userName={userName}
                text="Мы свяжемся с вами перед выездом мастера."
              />
            </Modal>
          ))}
      </div>
    );
  }
}

export default Request;
