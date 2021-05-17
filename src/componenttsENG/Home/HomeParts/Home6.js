import React, { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import style from "../../../components/Home/HomeParts/Home6.module.css";
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
        <Link to="/eng/fotolavhalar">Photos from the life of the branch</Link>
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
        <Link to="/eng/fotolavhalar">
          <span>View all photos...</span>
          <span>View all photos...</span>
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
