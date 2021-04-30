import React from "react";
import style from "./Kadrlar.module.css";
import zarifa from "../../../../assets/img/zarifa.jpg";
import aziza from "../../../../assets/img/aziza.jpg";
import { Link } from "react-router-dom";

const Kadrlar = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Kadrlar bo'limi</h2>
        </div>
        <div className={style.users}>
          <div className={style.user}>
            <img src={zarifa} alt="zarifa" />
            <p>
              <strong>Boymurodova Zarifa Zokirovna</strong> – Kadrlar bo'limi
              boshlig'i 8 dekabr – O‘zbekiston Respublikasi Konstitutsiyasi
              qabul qilinganligining 28 yilligi munosabati bilan Oʼzbekiston
              Respublikasi adliya vazirining 2020-yil 3-dekabrdagi 640-sht-son
              buyrugʼiga asosan “Faxriy yorliq” bilan taqdirlangan.
              <br />
              <span>
                {" "}
                <b>E-mail:</b> <Link>zari.1985@umail.uz</Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={aziza} alt="aziza" />
            <p>
              <strong>Abidjanova Aziza Baxramdjanovna</strong> – Kadrlar bo'limi
              inspektori
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="azizaotdelkadrova@gmail.com">
                  azizaotdelkadrova@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>

        <div className={style.title}>
          <h2>KADRLAR BO‘LIMINING VAZIFALARI</h2>
        </div>
        <div className={style.paragraf}>
        <p>Kadrlar bo‘limining asosiy vazifalari etib quyidagilar belgilangan:</p>
        <ul>
           <li>sohaga oid qonun hujjatlari asosida ishlarni tashkil etish;</li>
           <li>boʼlim xodimlari lavozim yoʼriqnomalarini ishlab chiqish, takomillashtirish ishlarini muvofiqlashtirish va uslubiy rahbarlik qilish;</li>
           <li>boʼlimning ish rejalarini tuzish va ularning ijrosini taʼminlash;</li>
           <li>Oʼzbekiston Respublikasi adliya vazirining 2020 yil 24 martdagi 68-um-son buyrugʼi bilan tasdiqlangan Аdliya organlari va muassasalarida HR-menejment tizimi toʼgʼrisidagi nizomning 3-bobida  bilan tasdiqlangan Аdliya organlari va muassasalarida kadrlar bilan ishlash tartibi toʼgʼrisida nizom talablariga muvofiq Filialga xodimlarni tavsiya etish, tanlovdan oʼtkazish, xodimlar zaxirasini shakllantirish va ishga qabul qilingan xodimlarni ichki lokal hujjatlar bilan tanishtirish;</li>
           <li>Filial direktori bilan kelishgan holda (muntazam) O‘zbekiston Respublikasi Аdliya vazirligiga xodimlarni maxsus unvon va martaba darajalariga tavsiya etish boʼyicha taqdimnomalar tayyorlash;</li>
           <li>ish unumdorligi boʼyicha alohida oʼrnak koʼrsatayotgan professor-oʼqituvchilar va xodimlarni ragʼbatlantirish boʼyicha rahbariyatga takliflar kiritish;</li>
           <li>Filial xodimlarini Mehnat kodeksi va Ichki tartib qoidalari va mehnat shartnomasiga muvofiq, mehnat intizomiga amal qilishini taʼminlash;</li>
           <li>professor-oʼqituvchilar va xodimlarning mehnat taʼtili grafigini ishlab chiqish va Filial direktoriga Kasaba uyushmasi qoʼmitasi bilan kelishilgan holda tasdiqlatish</li>
           <li>professor-oʼqituvchilarga va boshqa xodimlarga oid ishga qabul qilish, mehnat taʼtili va xizmat safariga yuborish toʼgʼrisidagi direktor buyruqlari loyihalarini tayyorlash hamda mehnat shartnomalarini rasmiylashtirish</li>
           <li>xodimlar qoʼnimsizligini oldini olish, xodimlarni mehnat intizomiga rioya etilishi holatini tahlil etish va aniqlangan kamchiliklarni bartaraf etish boʼyicha takliflar ishlab chiqish;</li>
           <li>yuridik va jismoniy shaxslarning murojaatlariga asosan diplom dublikatini belgilangan tartibda qayta tiklab berish va ularni hisobotini yuritish;</li>
           <li>bitiruvchilarga berilgan diplomlarning sarflanishi boʼyicha hisobotlarni yuritish va belgilangan tartibda tegishli idoralarga maʼlumotlarni yuborish</li>
           <li>boʼlimga kelib tushgan hujjatlarni qabul qilish, qayd qilib borish, chiquvchi hujjatlarni roʼyxatga olish, buyruqlarni oʼrnatilgan tartibda tarqatish</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Kadrlar;
