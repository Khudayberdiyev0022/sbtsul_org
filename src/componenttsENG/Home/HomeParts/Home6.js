import React from "react";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import style from "./Home6.module.css";
import { fetchImagesProducts } from '../../../actions'
import { connect } from 'react-redux'


function Home6(props) {
  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
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
            style={{ backgroundImage: `url(${picture.pictureURL})` }}
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

const mapStateToProps = state => {
  return {
    pictures: state.productsImages[0]
  }
}


export default connect(mapStateToProps, { fetchImagesProducts })(Home6);
