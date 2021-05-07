import React, { useEffect, useState } from "react";
import style from "./Home9.module.css";
import Carousel from "react-elastic-carousel";
import img1 from "../../../assets/images/foydali1.png";
import img2 from "../../../assets/images/logo.png";
import img3 from "../../../assets/images/foydali3.png";
import img4 from "../../../assets/images/foydali2.png";
import img5 from "../../../assets/images/foydali1.png";

function Home9() {
  const items = [
    {
      id: 1,
      title:
        "Национальная база данных законодательства Республики Узбекистан",
      image: img1,
      link: "https://lex.uz/",
    },
    {
      id: 2,
      title: "Электронная система студенческого рейтинга",
      image: img2,
      link: "https://ort.sbtsul.uz/",
    },
    {
      id: 3,
      title: "Единый интерактивный портал госуслуг",
      image: img3,
      link: "https://my.gov.uz/",
    },
    {
      id: 4,
      title: "Портал Президента Республики Узбекистана",
      image: img4,
      link: "https://president.uz/",
    },
    {
      id: 5,
      title: "Национальная библиотека Узбекистана имени Алишера Навои",
      image: img5,
      link: "https://www.natlib.uz/",
    },
  ];
  const [pages, setPages] = useState(3);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.self.innerWidth < 1300 && window.self.innerWidth > 1000) {
        setPages(2);
      } else if (window.self.innerWidth < 1000) {
        setPages(1);
      } else {
        setPages(3);
      }
    }, 500);
    return () => clearInterval(interval);
  });
  return (
    <div className={style.main}>
      <h3>Полезные ссылки</h3>
      <div className={style.container}>
        <Carousel
          disableArrowsOnEnd={false}
          enableAutoPlay={true}
          itemsToShow={pages}
          autoTabIndexVisibleItems={false}
          pagination={false}
        >
          {items.map((item) => (
            <div key={item.id} className={style.card}>
              <div
                className={style.image}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <a
               rel="noreferrer"
               target="__blank"
              href={item.link}>{item.title}</a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home9;
