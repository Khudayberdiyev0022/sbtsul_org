import React from "react";
import style from "./Vakansiya.module.css";

const Vakansiya = () => {
  const apis = [
    {
      job: "Ingliz tili o`qituvchisi",
      salary: "2 000 000",
      aboutJob1:
        "Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor...",
      tel: "+998712505050",
    },
    {
      job: "Ingliz tili o`qituvchisi",
      salary: "2 000 000",
      aboutJob1:
        "Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor...",
      tel: "+998712505050",
    },
    {
      job: "Ingliz tili o`qituvchisi",
      salary: "2 000 000",
      aboutJob1:
        "Mamlakatimizda mustaqil va erkin fikrlaydigan, zamonaviy ilm-fan yutuqlarini, oʼz kasbini puxta oʼzlashtirgan talaba yoshlarni malakaliy mutaxassis qilib yetkazishga alohida eʼtibor...",
      tel: "+998712505050",
    },
  ];

  return (
    <div className={style.main}>
      <div className={style.inMain}>
        {apis.map((api, index) => {
          return (
            <div className={style.card} key={index}>
              <div className={style.job}>
                <h3>{api.job}</h3>
                <h3>
                  <span> Maosh:</span> {api.salary} <span>so'm</span>
                </h3>
              </div>
              <p>{api.aboutJob1}</p>
              <a href={`tel://${api.tel}`} rel="noreferrer" target="_blank">
                <span>tel:</span> {api.tel}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vakansiya;
