import React, { useEffect, useState } from "react";
import Home2 from "./HomeParts/Home2";
import Home3 from "./HomeParts/Home3";
import Home4 from "./HomeParts/Home4";
import Home5 from "./HomeParts/Home5";
import Home6 from "./HomeParts/Home6";
import Home7 from "./HomeParts/Home7";
import Home9 from "./HomeParts/Home9";
import style from "../../componenttsENG/Home/Home.module.css";
import image from "../../assets/icons/logoFT.svg";
import { Fragment } from "react";
import Home1 from "./HomeParts/Home1";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <div
        className={
          loading
            ? `${style.modal} ${style.modalClose}`
            : `${style.modal} ${style.modalOpen}`
        }
      >
        <div
          className={style.logo}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <Fragment>
        <Home1
          name="Toshkent davlat yuridik universitetining ixtisoslashtirilgan
              filiali"
        />
        <Home2 />
        <Home7 />
        <Home3 />
        <Home4 />
        <Home5 />
        <Home6 />
        <Home9 />
      </Fragment>
    </div>
  );
};

export default Home;
