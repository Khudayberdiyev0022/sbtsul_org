import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Home2 from "./HomeParts/Home2";
import Home3 from "./HomeParts/Home3";
import Home4 from "./HomeParts/Home4";
import Home5 from "./HomeParts/Home5";
import Home6 from "./HomeParts/Home6";
import Home7 from "./HomeParts/Home7";
import Home9 from "./HomeParts/Home9";
import image from "../../assets/icons/logoFT.svg";
import style from '../../components/Home/Home.module.css'
import Home1 from "../../components/Home/HomeParts/Home1";



const HomeRus = () => {
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
        <Home1 name="Специализированный филиал Ташкентского государственного юридического университета" />
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

export default HomeRus;
