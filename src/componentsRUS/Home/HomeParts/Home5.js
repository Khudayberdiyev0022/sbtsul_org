import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import style from "../../../components/Home/HomeParts/Home5.module.css";
import { SelectedNew, fetchNewsProducts } from "../../../actions";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

const Home5 = (props) => {
  useEffect(() => {
    AOS.init();
    props.fetchNewsProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={style.main}>
      <div
        className={style.linkBlock}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
      >
        <Link to="/rus/yangiliklar">Последние Новости</Link>
      </div>
      <div className={style.container}>
        <div className={style.rightBlock}>
          {props.news && (
            <Fragment>
              <img
                src={`http://sbtsul1.pythonanywhere.com${props.news[0]?.image}`}
                alt="news3"
                data-aos="flip-right"
                data-aos-delay="800"
                data-aos-easing="ease-in-sine"
              />
              <h4 data-aos="zoom-in">{props.news[0]?.titleRus}</h4>
              <p data-aos="zoom-out">{props.news[0]?.paragraphRus}</p>
              <div className={style.containerButton}>
                <Link
                  onClick={() => props.SelectedNew(props.news[0])}
                  to={`/rus/each/news/0`}
                >
                  <span>Batafsil...</span>
                  <span>Batafsil...</span>
                </Link>
              </div>
            </Fragment>
          )}
        </div>
        <div className={style.leftBlock}>
          {
            // eslint-disable-next-line array-callback-return
            props.news?.map((api, index) => {
              if (index >= 1 && index < 3) {
                return (
                  <div key={index} className={style.box}>
                    <img
                      src={`http://sbtsul1.pythonanywhere.com${api.image}`}
                      alt={api.pictureURL}
                      data-aos="flip-left"
                      data-aos-delay="800"
                      data-aos-easing="linear"
                    />
                    <h4 data-aos="zoom-out">{api.titleRus}</h4>
                    <p data-aos="zoom-in">
                      {api.paragraphRus.split(" ").length > 10
                        ? `${api.paragraphRus
                            .split(" ")
                            .slice(0, 10)
                            .join(" ")}...`
                        : api.paragraphRus}
                    </p>
                    <div className={style.containerButton}>
                      <Link
                        onClick={() => props.SelectedNew(api)}
                        to={`/rus/each/news/${index}`}
                      >
                        <span>ПОДРОБНЕЕ...</span>
                        <span>ПОДРОБНЕЕ...</span>
                      </Link>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    news: state.productsNews[0],
  };
};

export default connect(mapStateToProps, { SelectedNew, fetchNewsProducts })(
  Home5
);
