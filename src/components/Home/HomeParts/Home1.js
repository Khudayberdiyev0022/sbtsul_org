import React from 'react'
import style from './Home1.module.css';
import slider1 from '../../../assets/img/univer.jpg'
import slider2 from '../../../assets/img/Slider-2.jpg'

const Home1 = () => {
  return (
    <div className={style.main}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <div className={style.opacityImg}></div> */}
            <div>
              <img className={style.imgCarousel} src={slider1} alt="First slide" />
            </div>
          </div>
          <div className="carousel-item" id="opacityRel">
            {/* <div className={style.opacityImg}></div> */}
            <img className={style.imgCarousel} src={slider2} alt="Second slide" />
          </div>
          <div className="carousel-item" id="opacityRel">
            {/* <div className={style.opacityImg}></div> */}
            <img className={style.imgCarousel} src={slider1} alt="Thrid slide" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home1
