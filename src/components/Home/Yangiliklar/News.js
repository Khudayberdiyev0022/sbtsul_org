import React, { useEffect } from "react";
import style from "./News.module.css";
import { Link } from "react-router-dom";
import { SelectedNew, fetchNewsProducts } from "../../../actions";
import { connect } from "react-redux";


const News = (props) => {

  useEffect(() => {
    props.fetchNewsProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h3>
            Barcha <br /> Yangiliklar
          </h3>
        </div>
        {props.news?.map((eachNews, index) => {
          return (
            <div key={index} className={style.card}>
              <img src={eachNews.pictureURL} alt="eachNews" />
              <h3>{eachNews.titleUzb}</h3>
              <p>{eachNews.paragraphUzb.split(" ").length > 10
                ? `${eachNews.paragraphUzb
                  .split(" ")
                  .slice(0, 10)
                  .join(" ")}...`
                : eachNews.paragraphUzb}</p>
              <div className={style.containerButton}>
                <Link
                  onClick={() => props.SelectedNew(eachNews)}
                  to={`/each/news/${index}`}
                >
                  <span>Batafsil...</span>
                  <span>Batafsil...</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    news: state.productsNews[0]
  }
}


export default connect(mapStateToProps, { SelectedNew, fetchNewsProducts })(News);
