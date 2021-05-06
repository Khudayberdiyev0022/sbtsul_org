import React from "react";
import { Link } from "react-router-dom";
import style from "./Home5.module.css";
import news1 from "../../../assets/img/army.jpg";
import news2 from "../../../assets/img/news2.jpg";
import news3 from "../../../assets/img/news3.jpg";
import { SelectedNew } from "../../../actions";
import { connect } from "react-redux";
const Home5 = (props) => {
  // import api from backend with name faceapi and after that we cannot need to chabeg more things
  const fakeAPI = [
    {
      image: news2,
      title: "ДУХОВНО-ПРОСВЕТИТЕЛЬНАЯ ИНИЦИАТИВА НА ПРАКТИКЕ",
      paragraph:
        "В нашей стране уделяется особое внимание привлечению в качестве квалифицированных специалистов независимой и свободомыслящей студенческой молодежи, овладевшей достижениями современной науки, своей профессией...В нашей стране уделяется особое внимание привлечению в качестве квалифицированных специалистов независимой и свободомыслящей студенческой молодежи, овладевшей достижениями современной науки, своей профессией......",
    },
    {
      image: news1,
      title: "ДУХОВНО-ПРОСВЕТИТЕЛЬНАЯ ИНИЦИАТИВА НА ПРАКТИКЕ",
      paragraph:
        "В нашей стране уделяется особое внимание привлечению в качестве квалифицированных специалистов независимой и свободомыслящей студенческой молодежи, овладевшей достижениями современной науки, своей профессией...В нашей стране уделяется особое внимание привлечению в качестве квалифицированных специалистов независимой и свободомыслящей студенческой молодежи, овладевшей достижениями современной науки, своей профессией......",
    },
    {
      image: news3,
      title: "ДУХОВНО-ПРОСВЕТИТЕЛЬНАЯ ИНИЦИАТИВА НА ПРАКТИКЕ",
      paragraph:
        "В нашей стране уделяется особое внимание привлечению в качестве квалифицированных специалистов независимой и свободомыслящей студенческой молодежи, овладевшей достижениями современной науки, своей профессией...В нашей стране уделяется особое внимание привлечению в качестве квалифицированных специалистов независимой и свободомыслящей студенческой молодежи, овладевшей достижениями современной науки, своей профессией......",
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/yangiliklar">Последние Новости</Link>
      </div>
      <div className={style.container}>
        <div className={style.leftBlock}>
          {
            // eslint-disable-next-line array-callback-return
            fakeAPI.map((api, index) => {
              if (index >= 1) {
                return (
                  <div key={index} className={style.box}>
                    <img src={api.image} alt={api.image} />
                    <h4>{api.title}</h4>
                    <p>
                      {api.paragraph.split(" ").length > 20
                        ? `${api.paragraph
                            .split(" ")
                            .slice(0, 20)
                            .join(" ")}...`
                        : api.paragraph}
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
        <div className={style.rightBlock}>
          <img src={fakeAPI[0].image} alt="news3" />
          <h4>{fakeAPI[0].title}</h4>
          <p>{fakeAPI[0].paragraph}</p>
          <div className={style.containerButton}>
            <Link
              onClick={() => props.SelectedNew(fakeAPI[0])}
              to={`/rus/each/news/0`}
            >
              <span>ПОДРОБНЕЕ...</span>
              <span>ПОДРОБНЕЕ...</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { SelectedNew })(Home5);
