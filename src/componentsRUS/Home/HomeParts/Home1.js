import React, { useEffect, useState } from "react";
import img1 from "../../../assets/img/slider1.webp";
import img2 from "../../../assets/img/slider2.webp";
import img3 from "../../../assets/img/slider3.webp";
import style from "./Home1.module.css";
import { Fragment } from "react";

function Home1Rus() {
  const [image, setImage] = useState(img1);
  useEffect(() => {
    const interval = setInterval(() => {
      switch (image) {
        case img1:
          setImage(img2);
          break;
        case img2:
          setImage(img3);
          break;
        case img3:
          setImage(img1);
          break;
        default:
          setImage(img1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes("admin")) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // style.links
  if (admin) {
    return null;
  } else {
    return (
      <Fragment>
        <div className={style.main}>
          <div
            className={style.Home1}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className={style.bg}></div>
            {/* <span></span> */}
            <h1>
            Специализированный филиал Ташкентского государственного юридического университета
            </h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home1Rus;

