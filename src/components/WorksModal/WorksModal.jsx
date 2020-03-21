import React, { Component } from "react";
import style from "./WorksModal.module.css";
import shortid from "shortid";

class WorksModal extends Component {
  state = {
    counter: 0
  };

  changePhoto = ({ target }) => {
    const { name } = target.parentNode;

    this.setState(prevState => ({
      counter:
        name === "nextBtn" ? prevState.counter + 1 : prevState.counter - 1
    }));
  };

  openBigPhoto = index => {
    this.setState({
      counter: index
    });
  };

  render() {
    const { counter } = this.state;
    const { title, category, images, closeModal } = this.props;

    return (
      <div className={style.content}>
        <p className={style.title}>{title}</p>
        <p className={style.category}>{category}</p>
        <div className={style.imgOverlay}>
          <img className={style.bigImg} src={images[counter]} alt={title} />
          <button
            className={`${style.button} ${style.prevBtn}`}
            type="button"
            name="prevBtn"
            onClick={this.changePhoto}
            disabled={counter === 0}
          >
            <i className={`material-icons ${style.icon}`}>navigate_before</i>
          </button>
          <button
            className={`${style.button} ${style.nextBtn}`}
            type="button"
            name="nextBtn"
            onClick={this.changePhoto}
            disabled={counter === images.length - 1}
          >
            <i className={`material-icons ${style.icon}`}>navigate_next</i>
          </button>
        </div>
        <ul className={style.workList}>
          {images.map((el, index) => (
            <li
              key={shortid.generate()}
              className={style.listItem}
              style={{ border: index === counter && "2px solid #e7b22d" }}
              onClick={() => this.openBigPhoto(index)}
            >
              <img className={style.listItemImg} src={el} alt={title} />
            </li>
          ))}
        </ul>
        <button type="button" className={style.close} onClick={closeModal}>
          <i className={`material-icons ${style.iconClose}`}>close</i>
        </button>
      </div>
    );
  }
}

export default WorksModal;
