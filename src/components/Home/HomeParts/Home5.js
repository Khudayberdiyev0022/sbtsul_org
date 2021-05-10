import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Home5.module.css";
import { SelectedNew, fetchNewsProducts } from "../../../actions";
import { connect } from "react-redux";

const Home5 = (props) => {

  useEffect(() => {
    props.fetchNewsProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])




  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/yangiliklar">So'nggi Yangiliklar</Link>
      </div>
      <div className={style.container}>
        <div className={style.rightBlock}>
          {
            props.news && <Fragment>
              <img src={props.news[0]?.pictureURL} alt="news3" />
              <h4>{props.news[0]?.titleUzb}</h4>
              <p>{props.news[0]?.paragraphUzb}</p>
              <div className={style.containerButton}>
                <Link
                  onClick={() => props.SelectedNew(props.news[0])}
                  to={`/each/news/0`}
                >
                  <span>Batafsil...</span>
                  <span>Batafsil...</span>
                </Link>
              </div>
            </Fragment>
          }
        </div>
        <div className={style.leftBlock}>
          {
            // eslint-disable-next-line array-callback-return
            props.news?.map((api, index) => {
              if (index >= 1 && index < 3) {
                return (
                  <div key={index} className={style.box}>
                    <img src={api.pictureURL} alt={api.pictureURL} />
                    <h4>{api.titleUzb}</h4>
                    <p>
                      {api.paragraphUzb.split(" ").length > 10
                        ? `${api.paragraphUzb
                          .split(" ")
                          .slice(0, 10)
                          .join(" ")}...`
                        : api.paragraphUzb}
                    </p>

                    <div className={style.containerButton}>
                      <Link
                        onClick={() => props.SelectedNew(api)}
                        to={`/each/news/${index}`}
                      >
                        <span>Batafsil...</span>
                        <span>Batafsil...</span>
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

const mapStateToProps = state => {
  return {
    news: state.productsNews[0]
  }
}

export default connect(mapStateToProps, { SelectedNew, fetchNewsProducts })(Home5);

