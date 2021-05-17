import React, { useEffect } from "react";
import style from "../../../components/Home/Yangiliklar/News.module.css";
import { Link } from "react-router-dom";
import { SelectedNew, fetchNewsProducts } from "../../../actions";
import { connect } from "react-redux";


const NewsRus = (props) => {

  useEffect(() => {
    props.fetchNewsProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h3>
            ВСЕ
 <br /> НОВОСТИ
          </h3>
        </div>
        {props.news?.map((eachNews, index) => {
          return (
            <div key={index} className={style.card}>
              <img src={`http://sbtsul1.pythonanywhere.com${eachNews.image}`} alt="eachNews" />
              <h3>{eachNews.titleRus}</h3>
              <p>{eachNews.paragraphRus.split(" ").length > 10
                ? `${eachNews.paragraphRus
                  .split(" ")
                  .slice(0, 10)
                  .join(" ")}...`
                : eachNews.paragraphRus}</p>
              <div className={style.containerButton}>
                <Link
                  onClick={() => props.SelectedNew(eachNews)}
                  to={`/rus/each/news/${index}`}
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


export default connect(mapStateToProps, { SelectedNew, fetchNewsProducts })(NewsRus);

