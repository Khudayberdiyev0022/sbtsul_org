import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../../../components/Home/HomeParts/Home3.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home3 = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.main} data-aos="fade-up-right">
      <div className={style.skewedBox}>
        <div className={style.container}>
          <div className={style.rahbariyatLink} data-aos="fade-down" data-aos-easing="linear">
            <Link to="/eng/rahbariyat">Directors</Link>
          </div>
          <h2>Djuraev Ikhtiyor Bakhtiyorovich</h2>
          <p className={style.rektor}>
            Deputy Director for Educational Affairs
          </p>
          <p>
            Specialized branch of Tashkent State Law University Deputy Director
            for Educational Affairs. Djuraev Ikhtiyor Bakhtiyorovich - November
            25, 1980 in the Kashkadarya region, He was born in Kasbi district.
            Education - higher, lawyer, juridical candidate of sciences. 2002
            Tashkent State Law Institute bachelor's degree, 2007 master's
            degree. Djuraev Ikhtiyor started his career in 2002 in Kashkadarya
            region From the position of a teacher of Kovchin professional
            college of Karshi district From 2003 to 2005 he studied at the
            Tashkent State Law Institute Senior Inspector of the Department,
            2007–2012 Tashkent State Law Institute of Judicial and Law
            Enforcement...
          </p>

          <div className={style.containerButton}>
            <Link to="/eng/rahbariyat">
              <span>More...</span>
              <span>More...</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={style.sec2} data-aos="fade-up-left">
        <h2>Khurozov Zafar Kahramonovich</h2>
        <p className={style.rektor}>
          Deputy Director for Finance and Economics
        </p>
        <p>
          Specialized branch of Tashkent State Law University Deputy Director
          for Financial and Economic Affairs Khurozov Zafar Kahramanovich -
          April 27, 1984 in the Samarkand region born Higher education. In 2008,
          the Tashkent State Agrarian University He graduated from the
          University with a degree in Economics. In 2017 Of the Academy of
          Banking and Finance of the Republic of Uzbekistan “State He graduated
          with a master's degree in "Financial Management". SHE IS Sweden in
          2005, Switzerland in 2006-2007 and Japan in 2016 He is a listener of
          international student exchange programs in many countries...
        </p>
        <div className={style.containerButton2}>
          <Link to="/eng/rahbariyat">
            <span>More...</span>
            <span>More...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home3;
