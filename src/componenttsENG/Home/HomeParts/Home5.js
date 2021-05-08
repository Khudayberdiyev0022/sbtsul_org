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
      title: "EDUCATIONAL AND EDUCATIONAL INITIATIVE IN PRACTICE",
      paragraph:
        "In our country, special attention is paid to the development of independent and free-thinking, modern scientific achievements, students who have mastered their profession as qualified specialists ... In our country, independent and free-thinking students who have mastered the achievements of modern science Particular attention is paid to delivery...",
    },
    {
      image: news1,
      title: "EDUCATIONAL AND EDUCATIONAL INITIATIVE IN PRACTICE",
      paragraph:
        "In our country, special attention is paid to the development of independent and free-thinking, modern scientific achievements, students who have mastered their profession as qualified specialists ... In our country, independent and free-thinking students who have mastered the achievements of modern science Particular attention is paid to delivery...",
    },
    {
      image: news3,
      title: "EDUCATIONAL AND EDUCATIONAL INITIATIVE IN PRACTICE",
      paragraph:
        "In our country, special attention is paid to the development of independent and free-thinking, modern scientific achievements, students who have mastered their profession as qualified specialists ... In our country, independent and free-thinking students who have mastered the achievements of modern science Particular attention is paid to delivery...",
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/eng/yangiliklar">Latest News</Link>
      </div>
      <div className={style.container}>
        <div className={style.rightBlock}>
          <img src={fakeAPI[0].image} alt="news3" />
          <h4>{fakeAPI[0].title}</h4>
          <p>{fakeAPI[0].paragraph}</p>
          <div className={style.containerButton}>
            <Link
              to={`/eng/each/news/0`}
              onClick={() => props.SelectedNew(fakeAPI[0])}
            >
              <span>More...</span>
              <span>More...</span>
            </Link>
          </div>
        </div>
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
                        to={`/eng/each/news/${index}`}
                      >
                        <span>More...</span>
                        <span>More...</span>
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
export default connect(null, { SelectedNew })(Home5);
