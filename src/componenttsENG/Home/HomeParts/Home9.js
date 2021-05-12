import React, { useEffect, useState } from "react";
import style from "../../../components/Home/HomeParts/Home9.module.css";
import Slider from "react-carousel-responsive";
import "react-carousel-responsive/dist/styles.css";
import img1 from "../../../assets/images/foydali1.png";
import img2 from "../../../assets/images/logo.png";
import img3 from "../../../assets/images/foydali3.png";
import img4 from "../../../assets/images/foydali2.png";
import img5 from "../../../assets/images/foydali1.png";

function Home9() {
  const items = [
    {
      id: 1,
      title: "National database of legislation of the Republic of Uzbekistan",
      image: img1,
      link: "https://lex.uz/",
    },
    {
      id: 2,
      title: "Electronic system of student rating",
      image: img2,
      link: "https://ort.sbtsul.uz/",
    },
    {
      id: 3,
      title: "Single interactive public services portal",
      image: img3,
      link: "https://my.gov.uz/",
    },
    {
      id: 4,
      title: "Portal of the Republic of Uzbekistan",
      image: img4,
      link: "https://president.uz/",
    },
    {
      id: 5,
      title: "Alisher Navoi National Library of Uzbekistan",
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
      <h3>Useful links</h3>
      <div className={style.container}>
        <Slider slidesToShow={pages} autoplaySpeed={3000} autoplay={true}>
          {items.map((item) => (
            <div key={item.id} className={`${style.card} slide`}>
              <div
                className={style.image}
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <a rel="noreferrer" target="__blank" href={item.link}>
                {item.title}
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Home9;
