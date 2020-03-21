import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import AboutWork from "../AboutWork/AboutWork";
import Request from "../Request/Request";
import Works from "../Works/Works";
import Price from "../Price/Price";
import Cost from "../Cost/Cost";
import Feedback from "../Feedback/Feedback";
import Question from "../Question/Question";
import Footer from "../Footer/Footer";
import { Element } from "react-scroll";

const deadline = new Date(2020, 3, 6, 2, 0);

class App extends Component {
  state = {
    delta: null,
    firstDay: 0,
    secondDay: 0,
    firstHour: 0,
    secondHour: 0,
    firstMinute: 0,
    secondMinute: 0,
    firstSecond: 0,
    secondSecond: 0,
    isOpenAction: false
  };

  componentDidMount() {
    setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const { delta } = this.state;
    const today = new Date();
    this.setState({
      delta: deadline - today
    });

    if (delta) {
      const secNumber = String(Math.floor(delta / 1000) % 60);
      const secNumberArr = secNumber.split("");
      if (secNumberArr.length === 1) {
        secNumberArr[1] = secNumberArr[0];
        secNumberArr[0] = 0;
      }
      this.setState({
        firstSecond: secNumberArr[0],
        secondSecond: secNumberArr[1]
      });

      const minNumber = String(Math.floor(delta / 1000 / 60) % 60);
      const minNumberArr = minNumber.split("");
      if (minNumberArr.length === 1) {
        minNumberArr[1] = minNumberArr[0];
        minNumberArr[0] = 0;
      }
      this.setState({
        firstMinute: minNumberArr[0],
        secondMinute: minNumberArr[1]
      });

      const hoursNumber = String(Math.floor(delta / 1000 / 60 / 60) % 24);
      const hoursNumberArr = hoursNumber.split("");
      if (hoursNumberArr.length === 1) {
        hoursNumberArr[1] = hoursNumberArr[0];
        hoursNumberArr[0] = 0;
      }
      this.setState({
        firstHour: hoursNumberArr[0],
        secondHour: hoursNumberArr[1]
      });

      const daysNumber = String(Math.floor(delta / 1000 / 60 / 60 / 24));
      const daysNumberArr = daysNumber.split("");
      if (daysNumberArr.length === 1) {
        daysNumberArr[1] = daysNumberArr[0];
        daysNumberArr[0] = 0;
      }
      this.setState({
        firstDay: daysNumberArr[0],
        secondDay: daysNumberArr[1]
      });
    }
  };

  toggleAction = () => {
    this.setState(prevState => ({
      isOpenAction: !prevState.isOpenAction
    }));
  };

  render() {
    const {
      delta,
      firstDay,
      secondDay,
      firstHour,
      secondHour,
      firstMinute,
      secondMinute,
      firstSecond,
      secondSecond,
      isOpenAction
    } = this.state;

    return (
      <div>
        <Header
          delta={delta}
          firstDay={firstDay}
          secondDay={secondDay}
          firstHour={firstHour}
          secondHour={secondHour}
          firstMinute={firstMinute}
          secondMinute={secondMinute}
          firstSecond={firstSecond}
          secondSecond={secondSecond}
          isOpenAction={isOpenAction}
          toggleAction={this.toggleAction}
        />
        <Element name="aboutWork">
          <AboutWork />
        </Element>
        <Request />
        <Element name="works">
          <Works />
        </Element>
        <Element name="services">
          <Price />
        </Element>
        <Element name="cost">
          <Cost />
        </Element>
        <Element name="feedback">
          <Feedback />
        </Element>
        <Question />
        <Element name="contact">
          <Footer />
        </Element>
      </div>
    );
  }
}

export default App;
