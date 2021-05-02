import React from "react";
import { Link } from "react-router-dom";
import style from "./Home5.module.css";
import news1 from "../../../assets/img/news1.jpg";
import news2 from "../../../assets/img/news2.jpg";
import news3 from "../../../assets/img/news3.jpg";

const Home5 = () => {

  // import api from backend with name faceapi and after that we cannot need to chabeg more things
  const fakeAPI = [
    {
      image: news2,
      title: 'MА\'NАVIY VА MА\'RIFIY TАSHАBBUS АMАLDА',
      paragraph: 'Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib kelinmoqda...Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib kelinmoqda...',
    },
    {
      image: news1,
      title: 'MА\'NАVIY VА MА\'RIFIY TАSHАBBUS АMАLDА',
      paragraph: 'Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib kelinmoqda...Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib kelinmoqda...',
    },
    {
      image: news3,
      title: 'MА\'NАVIY VА MА\'RIFIY TАSHАBBUS АMАLDА',
      paragraph: 'Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib kelinmoqda...Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor berib kelinmoqda...',
    }
  ]


  return (
    <div className={style.main}>
      <div className={style.linkBlock}>
        <Link to="/yangiliklar">So'nggi Yangiliklar</Link>
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
                      {api.paragraph.split(' ').length > 20 ? `${api.paragraph.split(' ').slice(0, 20).join(' ')}...` : api.paragraph}
                    </p>
                    <div className={style.button}>
                      <div className={style.bgColor}>

                      </div>
                      <Link to={`/each/news/${index}`}> Batafsil... </Link>
                    </div>
                  </div>
                )
              }
            })
          }
        </div>


        <div className={style.rightBlock}>
          <img src={fakeAPI[0].image} alt="news3" />
          <h4>{fakeAPI[0].title}</h4>
          <p>
            {fakeAPI[0].paragraph}
          </p>
          <div className={style.button}>
            <div className={style.bgColor}>

            </div>
            <Link to={`/each/news/0`}> Batafsil... </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5;
