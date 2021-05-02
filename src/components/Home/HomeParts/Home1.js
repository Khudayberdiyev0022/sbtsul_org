import React, { Component } from "react";
import img1 from "../../../assets/img/univer.jpg";
import img2 from "../../../assets/img/slider2.jpg";
import img3 from "../../../assets/img/slider3.jpg";
import style from "./Home1.module.css";
import { Fragment } from "react";

class Home1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: img1,
      img1: img2,
      img2: img3,
      img3: img1,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      switch (this.state.img) {
        case img1:
          this.setState({ img: img2 });
          break;
        case img2:
          this.setState({ img: img3 });
          break;
        case img3:
          this.setState({ img: img1 });
          break;

        default:
          this.setState({ img: null });
          break;
      }
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.setInterval);
  }

  render() {
    return (
      <Fragment>
        <div className={style.main}>
        <div
          className={style.Home1}
          style={{ backgroundImage: `url(${this.state.img})` }}
        ></div>
        </div>
      
      </Fragment>
    );
  }
}

export default Home1;
