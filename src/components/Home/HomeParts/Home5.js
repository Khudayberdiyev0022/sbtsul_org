import React from "react";
import { Link } from "react-router-dom";
import style from "./Home5.module.css";
import news1 from "../../../assets/img/news1.jpg";
import news2 from "../../../assets/img/news2.jpg";
import news3 from "../../../assets/img/news3.jpg";

const Home5 = () => {
  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/yangiliklar">So'nggi Yangiliklar</Link>
      </div>
      <div className={style.container}>
        <div className={style.leftBlock}>
          <div className={style.box}>
            <img src={news1} alt="news1" />
            <h4>MА'NАVIY VА MА'RIFIY TАSHАBBUS АMАLDА</h4>
            <p>
              Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan
              yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni
              malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib
              kelinmoqda...
            </p>
            <div className={style.button}>
              <div className={style.bgColor}></div>
              <Link to="/www"> Batafsil... </Link>
            </div>
          </div>
          <div className={style.box}>
            <img src={news2} alt="news2" />
            <h4>MА'NАVIY VА MА'RIFIY TАSHАBBUS АMАLDА</h4>
            <p>
              Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan
              yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni
              malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib
              kelinmoqda...
            </p>
            <div className={style.button}>
              <div className={style.bgColor}></div>
              <Link to="/www"> Batafsil... </Link>
            </div>
          </div>
        </div>
        <div className={style.rightBlock}>
          <img src={news3} alt="news3" />
          <h4>MА'NАVIY VА MА'RIFIY TАSHАBBUS АMАLDА</h4>
          <p>
            Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan
            yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni
            malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib
            kelinmoqda. Xususan, yoshlarni, ayniqsa boʼlajak huquqbuzarlik
            profilaktika inspektorlarida oʼz kasbiga boʼlgan qatʼiy ishonch va
            qarashlarni shakllantirishda, ularni milliy va umuminsoniy
            qadriyatlarga hurmat ruhida, zararli taʼsirlar va oqimlarga qarshi
            tura oladigan qilib tarbiyalash, jamiyat hayotida ularning roli
            hamda faolligini oshirishga doir tadbirlar tashkil etilmoqda.
          </p>
          <div className={style.button}>
            <div className={style.bgColor}></div>
            <Link to="/www"> Batafsil... </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5;
