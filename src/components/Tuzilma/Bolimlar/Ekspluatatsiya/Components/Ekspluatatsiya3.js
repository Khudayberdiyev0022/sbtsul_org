import React from "react";
import style from "./Ekspluatatsiya3.module.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Ekspluatatsiya3 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <Fade top cascade>
          <div className={style.head}>
            <h2>BO‘LIMNING VAZIFALARI</h2>
            <span></span>
          </div>
        </Fade>
        <Zoom top cascade>
          <div className={style.grid}>
            <div className={style.block}>
              <div className={style.svg}>{/* <VscOrganization/> */}</div>
              <p>
                Filial binolari va atrof muhitini talab darajada saqlash, ularga
                xizmat ko‘rsatish ishlarini boshqarish, xonalardagi jihozlarni
                talab darajada saqlanishini nazorat qilish, barcha moddiy
                jihozlarni har yili kamida bir marta inventarizatsiyadan
                o‘tkazish, xo‘jalik ishlariga ajratilgan mablag‘ va xo‘jalik
                ashyolarini tejamli sarflanishini nazorat qilish, Filialga
                tashrif buyurgan mehmon va delegatsiyalarni qabuli bo‘yicha
                ishlarni tashkil qilish, bo‘limning ish rejalarini tuzish va
                ularning ijrosini ta’minlash.
              </p>
              <p>
                Bo‘lim faoliyatiga doir tashkiliy ishlar va tadbirlarni amalga
                oshirish, Filialning xo‘jalik sohasidagi faoliyati to‘g‘risida
                axborotlar bilan ta’minlashni tashkil etish, ish yuritishni olib
                borish, bo‘limning majlislari uchun materiallar tayyorlash,
                bo‘limga kelib tushayotgan va chiqayotgan hujjatlarning
                kartotekasini va hisobotini yuritish va ularning ijro etilishi
                yuzasidan bo‘lim rahbariyati uchun oylik axborotlarni
                tayyorlash.
              </p>
              <p>
                Tegishli bo‘limlarni moddiy-texnik tomondan jihoz va buyumlar
                bilan ta’minlashda ishtirok etish, xonalardagi ishdan chiqqan
                jihoz va buyumlarni ta’mirlash ishlarini tashkil etish, bino
                uchun xizmat qiluvchi ishchi va texnik xodimlarni ish bilan
                ta’minlab, ularni boshqarish, binoning tozaligini ta’minlash,
                bino va undagi jihoz va buyumlarning saqlanishi yuzasidan
                tegishli muddatlarga hisobxonada hisob berib borish, binodagi
                mavjud jihozlar va buyumlar inventarizatsiyasini yuritish.
              </p>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Ekspluatatsiya3;
