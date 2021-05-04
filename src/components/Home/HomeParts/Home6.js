import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import style from "./Home6.module.css";
import { pictures } from "../ExtraCards/Photo";

function Home6() {
  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/fotolavhalar">Filial hayotidan fotolavhalar</Link>
      </div>
      <Carousel
        animation={"slide"}
        autoPlay={true}
        interval={3000}
        swipe={true}
      >
        {pictures.map((picture, i) => (
          <div
            key={i}
            className={style.image}
            style={{ backgroundImage: `url(${picture.img})` }}
          ></div>
        ))}
      </Carousel>
      <div className={style.containerButton}>
        <Link to="/fotolavhalar">
          <span>Barcha rasmlarni ko'rish...</span>
          <span>Barcha rasmlarni ko'rish...</span>
        </Link>
      </div>
    </div>
  );
}

export default Home6;
