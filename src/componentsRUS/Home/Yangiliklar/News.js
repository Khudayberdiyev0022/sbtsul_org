import React from "react";
import style from "./News.module.css";
import news1 from "../../../assets/img/army.jpg";
import news2 from "../../../assets/img/news2.jpg";
import news3 from "../../../assets/img/news3.jpg";
import { Link } from "react-router-dom";

const NewsRus = () => {
  const newsAll = [
    {
      img: news1,
      title: "Qui voluptate sint dolore labore aute,",
      paragraph:
        "Nulla irure Lorem incididunt velit magna mollit. Duis ut consectetur aliqua Lorem sint sit. Ut sunt ullamco aliqua aute sint exercitation labore amet consequat velit nisi cillum dolore. Ea qui commodo eu esse. Ipsum ea cillum ullamco proident elit tempor dolore ea pariatur reprehenderit ut amet sint. Ad ea do enim ad. Ullamco excepteur ut et excepteur qui ad.",
    },
    {
      img: news2,
      title: "Id qui magna occaecat quis ad.",
      paragraph:
        "Nulla irure Lorem incididunt velit magna mollit. Duis ut consectetur aliqua Lorem sint sit. Ut sunt ullamco aliqua aute sint exercitation labore amet consequat velit nisi cillum dolore. Ea qui commodo eu esse. Ipsum ea cillum ullamco proident elit tempor dolore ea pariatur reprehenderit ut amet sint. Ad ea do enim ad. Ullamco excepteur ut et excepteur qui ad.",
    },
    {
      img: news3,
      title:
        "Occaecat dolore aliquip nulla dolor ullamco eu irure aliquip irure Lorem.",
      paragraph:
        "Nulla irure Lorem incididunt velit magna mollit. Duis ut consectetur aliqua Lorem sint sit. Ut sunt ullamco aliqua aute sint exercitation labore amet consequat velit nisi cillum dolore. Ea qui commodo eu esse. Ipsum ea cillum ullamco proident elit tempor dolore ea pariatur reprehenderit ut amet sint. Ad ea do enim ad. Ullamco excepteur ut et excepteur qui ad.",
    },
    {
      img: news1,
      title:
        "Aliquip pariatur commodo officia aliqua officia est magna ipsum pariatur excepteur enim.",
      paragraph:
        "Nulla irure Lorem incididunt velit magna mollit. Duis ut consectetur aliqua Lorem sint sit. Ut sunt ullamco aliqua aute sint exercitation labore amet consequat velit nisi cillum dolore. Ea qui commodo eu esse. Ipsum ea cillum ullamco proident elit tempor dolore ea pariatur reprehenderit ut amet sint. Ad ea do enim ad. Ullamco excepteur ut et excepteur qui ad.",
    },
    {
      img: news2,
      title:
        "Et enim et laboris ex consequat adipisicing non est aute sint proident et.",
      paragraph:
        "Nulla irure Lorem incididunt velit magna mollit. Duis ut consectetur aliqua Lorem sint sit. Ut sunt ullamco aliqua aute sint exercitation labore amet consequat velit nisi cillum dolore. Ea qui commodo eu esse. Ipsum ea cillum ullamco proident elit tempor dolore ea pariatur reprehenderit ut amet sint. Ad ea do enim ad. Ullamco excepteur ut et excepteur qui ad.",
    },
    {
      img: news3,
      title:
        "Lorem cillum ipsum sunt cupidatat est exercitation cupidatat ad ipsum reprehenderit proident eiusmod sunt.",
      paragraph:
        "Nulla irure Lorem incididunt velit magna mollit. Duis ut consectetur aliqua Lorem sint sit. Ut sunt ullamco aliqua aute sint exercitation labore amet consequat velit nisi cillum dolore. Ea qui commodo eu esse. Ipsum ea cillum ullamco proident elit tempor dolore ea pariatur reprehenderit ut amet sint. Ad ea do enim ad. Ullamco excepteur ut et excepteur qui ad.",
    },
  ];
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h3>
          ВСЕ
 <br /> НОВОСТИ
          </h3>
        </div>
        {newsAll.map((news, index) => {
          return (
            <div key={index} className={style.card}>
              <img src={news.img} alt="news" />
              <h3>{news.title}</h3>
              <p>{news.paragraph}</p>
              <div className={style.containerButton}>
                <Link to="/">
                  <span>Подробно...</span>
                  <span>Подробно...</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsRus;
