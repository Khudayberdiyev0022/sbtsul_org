import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import style from "./Home6.module.css";
import { fetchImagesProducts } from "../../../actions";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

function Home6(props) {
  useEffect(() => {
    AOS.init({
      delay: 500,
    });
    props.fetchImagesProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.main} data-aos="zoom-out">
      <div className={style.linkBlock} data-aos="zoom-in">
        <Link to="/fotolavhalar">Filial hayotidan fotolavhalar</Link>
      </div>
      <Carousel
        animation={"slide"}
        autoPlay={true}
        interval={3000}
        swipe={true}
      >
        {props.pictures?.map((picture, i) => (
          <div
            key={i}
            className={style.image}
            style={{
              backgroundImage: `url(http://sbtsul1.pythonanywhere.com${picture.image})`,
            }}
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
const mapStateToProps = (state) => {
  return {
    pictures: state.productsImages[0],
  };
};

export default connect(mapStateToProps, { fetchImagesProducts })(Home6);
