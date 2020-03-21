import React, { Component } from "react";
import style from "./Feedback.module.css";
import Title from "../Title/Title";
import feedback from "../../helpers/feedback";

class Feedback extends Component {
  state = {
    counter: 0,
    isShowFeedback: false
  };

  changeFeedback = ({ target }) => {
    const { name } = target.parentNode;
    this.setState(prevState => ({
      counter:
        name === "nextBtn" ? prevState.counter + 1 : prevState.counter - 1,
      isShowFeedback: false
    }));
  };

  toggleFeedback = () => {
    this.setState(prevState => ({
      isShowFeedback: !prevState.isShowFeedback
    }));
  };

  render() {
    const { counter, isShowFeedback } = this.state;

    return (
      <div className={style.feedbackOverlay}>
        <div className={style.feedback}>
          <Title title="Отзывы о нас" />
          <div className={style.content}>
            <div className={style.imgOverlay}>
              <img
                className={style.image}
                src={feedback[counter].image}
                alt=""
              />
            </div>
            <div className={style.description}>
              <p className={style.name}>{feedback[counter].name}</p>
              <p className={style.position}>{feedback[counter].position}</p>
              <div className={style.feedbackText}>
                {isShowFeedback ? (
                  <p className={style.text}>{feedback[counter].text}</p>
                ) : (
                  <p className={style.text}>
                    {`${feedback[counter].text.slice(0, 445)}...`}
                  </p>
                )}
                {isShowFeedback ? (
                  <button
                    type="button"
                    className={style.readMore}
                    onClick={this.toggleFeedback}
                  >
                    Свернуть ›
                  </button>
                ) : (
                  <button
                    type="button"
                    className={style.readMore}
                    onClick={this.toggleFeedback}
                  >
                    Читать весь отзыв ›
                  </button>
                )}
              </div>
            </div>
            <div className={style.navigation}>
              <button
                className={style.button}
                type="button"
                name="prevBtn"
                onClick={this.changeFeedback}
                disabled={counter === 0}
              >
                <i className={`material-icons ${style.icon}`}>
                  navigate_before
                </i>
              </button>
              <button
                className={style.button}
                type="button"
                name="nextBtn"
                onClick={this.changeFeedback}
                disabled={counter === feedback.length - 1}
              >
                <i className={`material-icons ${style.icon}`}>navigate_next</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
