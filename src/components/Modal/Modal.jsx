import React, { Component, createRef } from "react";
import style from "./Modal.module.css";

class Modal extends Component {
  backdropRef = createRef();

  UNSAFE_componentWillMount() {
    window.removeEventListener("keydown", this.handlePressKey);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handlePressKey);
  }

  handlePressKey = evt => {
    if (evt.code !== "Escape") return;
    this.props.closeModal();
  };

  handleBackdropClick = evt => {
    const { current } = this.backdropRef;
    if (current && evt.target !== current) return;
    this.props.closeModal();
  };

  render() {
    const { children, closeModal } = this.props;

    return (
      <div
        className={style.overlay}
        role="button"
        tabIndex={0}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className={style.modal}>
          <button type="button" className={style.close} onClick={closeModal}>
            <i className="material-icons">close</i>
          </button>
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
