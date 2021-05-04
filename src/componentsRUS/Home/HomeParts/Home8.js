import React from "react";
import style from "./Home8.module.css";

const Home8 = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/J5HzmB9_p0Y"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Home8;
