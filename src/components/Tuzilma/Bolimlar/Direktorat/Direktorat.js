import React from "react";
import style from "./Direktorat.module.css";
import sultanovDR from "../../../../assets/img/sultanovDR.jpg";
import nurxodjayevDR from "../../../../assets/img/nurxodjayevDR.jpg";
import yusupovDR from "../../../../assets/img/yusupovDR.jpg";
import { Link } from "react-router-dom";

const Kadrlar = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Direktorat</h2>
          <p>
            Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali
            Direktorati O‘zbekiston Respublikasi Prezidentining 2019-yil
            7-fevraldagi “Huquqbuzarliklar profilaktikasi va jamoat xafsizligini
            ta’minlash sohasida kadrlar tayyorlash tizimini takomillashtirishga
            doir qo‘shimcha chora-tadbirlar to‘g‘risida”gi PQ-4166-sonli
            qaroriga muvofiq tashkil etilgan.{" "}
          </p>
        </div>
        <div className={style.users}>
          <div className={style.user}>
            <img src={sultanovDR} alt="sultanovDR" />
            <p>
              <strong>Sultanov Muhammad Allayorovich</strong> – Bosh muhandis,
              3-darajali yurist.
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="muhammadsultanov190@gmail.com">
                  muhammadsultanov190@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={nurxodjayevDR} alt="nurxodjayevDR" />
            <p>
              <strong> Nurxodjaev Zoxiddin Ziyaviddin o‘g‘li </strong> – bosh
              energetik.
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="zoxiddin.94@gmail.com ">zoxiddin.94@gmail.com</Link>{" "}
              </span>
            </p>
          </div>
          <div className={style.user}>
            <img src={yusupovDR} alt="yusupovDR" />
            <p>
              <strong>Yusupov Qodirjon Qobiljon o’g’li </strong> – matbuot
              kotibi
              <br />
              <span>
                {" "}
                <b>E-mail:</b>{" "}
                <Link to="qodirjonyusupov25@gmail.com">
                  qodirjonyusupov25@gmail.com
                </Link>{" "}
              </span>
            </p>
          </div>
        </div>

        <div className={style.paragraf}>
          <h5>Bosh muhandis xizmat vazifalari:</h5>
          <ul>
            <li>
              Filialning mavjud ichki resurslari yoki pudratchi tashkilotlar
              bilan rekonstruksiya, kapital va joriy ta’mirlash bo‘yicha
              muzokaralar olib borish;
            </li>
            <li>
              kapital ta’mirlash bo‘yicha loyiha-smeta hujjatlarini, jumladan
              bino va uning evakuatsiya rejasini tayyorlash;
            </li>
            <li>
              Filialning moddiy-texnik bazasi bo‘yicha har bir ob’ekt uchun
              alohida materiallar ro‘yxatini tuzish va tayyorlash;
            </li>
            <li>
              mavjud ob’ektlarni qayta ta’mirlash hamda qimmat va ulkan hajmli
              uskunalarni binolarga o‘rnatishga moslashtirish bo‘yicha
              masalalarni yechishda qatnashish;
            </li>
            <li>
              binolar texnik holati va jihozlanishi hamda o‘z vaqtida
              ta’mirlanishining nazoratini amalga oshirish;
            </li>
            <li>
              tarkibiy bo‘linmalarga mehnat xavfsizligi qoidalari bo‘yicha
              o‘qitishni tashkil etish;
            </li>
            <li>
              Filialning moddiy-texnik bazasi va yoqilg‘i-energetika
              resurslaridan foydalanish bo‘yicha hisobotlarni o‘z vaqtida taqdim
              etish;
            </li>
            <li>
              inshootlarning qayta rejalashtirilishi va ekspluatatsiya
              qoidalariga rioya qilinishi bo‘yicha tavsiyalar berish;
            </li>
            <li>
              Filialning mulkiga zarar yetkazgan shaxslarga nisbatan chora
              ko‘rish bo‘yicha takliflar berish;
            </li>
            <li>
              Filialni kuz-qish mavsumiga tayyorlash bo‘yicha chora-tadbirlarni
              amalga oshirish;
            </li>
            <li>
              Filial ob’ektlari va xizmatlarida himoya vositalarining mavjud
              holatini nazorat qilish, ularning yaroqlilik holatini tekshirib
              borish;
            </li>
            <li>
              zarur materiallar va asbob-uskunalar uchun buyurtmalar
              rasmiylashtirish, omborda saqlanayotgan moddiy-texnik vositalar
              hisobini yuritish ishlarini amalga oshiradi.
            </li>
          </ul>
        </div>
        <div className={style.paragraf}>
          <h5>Bosh energetik xizmat vazifalari:</h5>
          <ul>
            <li>
              energiyaning iqtisod qilinishi bo‘yicha chora-tadbirlar ishlab
              chiqish, Filial ob’ektlari orasida energiyaning maqsadli
              taqsimlanishini nazorat qilish;
            </li>
            <li>
              energiya bilan ta’minlashdagi avariyalar va yaroqsiz holatga
              kelgan vositalarning hisobini yuritish va tahlil qilish;
            </li>
            <li>
              bo‘ysunuvchi personal tomonidan harakatdagi qoida va
              instruksiyalarga rioya qilinishini nazorat qilish;
            </li>
            <li>
              Filial energiya iste’moli bo‘yicha hisob-kitobini yuritish,
              Filialning energiya balansini tayyorlash;
            </li>
            <li>
              tegishli tashkilotlar bilan energiya iste’moli bo‘yicha
              shartnomalar rasmiylashtirish;
            </li>
            <li>
              energiya, shuningdek telefon aloqasi, radiouzel,
              avtomatlashtirilgan qo‘ng‘iroqlar va signalizatsiyalar
              tizimlarining profilaktika ishlari va ta’mirlanishining o‘z
              vaqtida va sifatli bajarilishi hamda ularning texnik holati
              ustidan nazoratni amalga oshirish;
            </li>
            <li>
              elektr va gaz jihozlari, ventilyatsiya qurilmalari va boshqalar
              ekspluatatsiyasi bo‘yicha hamda bo‘ysunuvchi personalning
              lavozimlar instruksiyasini ishlab chiqish;
            </li>
            <li>
              Filialni kuz-qish mavsumiga tayyorlash bo‘yicha chora-tadbirlarni
              amalga oshirish;
            </li>
            <li>
              Filial ob’ektlari va xizmatlarida himoya vositalarining mavjud
              holatini nazorat qilish, ularning yaroqlilik holatini tekshirib
              borish;
            </li>
            <li>
              energetik tizim va qurilmalar izolyatsion qarshiligining dastlabki
              va muntazam tekshiruvlarni tashkil etib borish;
            </li>
            <li>
              zarur materiallar va asbob-uskunalar uchun buyurtmalar
              rasmiylashtirish, omborda saqlanayotgan moddiy-texnik vositalar
              hisobini yuritish;
            </li>
            <li>
              energiya ob’ektlarini qayta ta’mirlash va modernizatsiya qilishni
              loyihalashtirish tashkilotlariga buyurtma berish va ishlarning
              bajarilishini nazorat qilish;
            </li>
            <li>
              instruksiya va qoidalarning buzilishidan kelib chiqqan
              qoidabuzarliklarga nisbatan chora ko‘rish uchun kerakli
              hujjatlarni rahbariyatga taqdim etish ishlarini amalga oshiradi.
            </li>
          </ul>
        </div>
        <div className={style.paragraf}>
          <h5>Matbuot kotibining asosiy vazifalari:</h5>
          <ul>
            <li>
              Filial rahbariyati tomonidan belgilanadigan axborot siyosatini
              shakllantirish va amalga oshirishda ishtirok etish;
            </li>
            <li>
              Axborot sohasidagi yagona davlat siyosatini amalga oshirish
              borasida Oliy va o‘rta maxsus ta’lim vazirligi axborot xizmati
              hamda davlat va jamoat tashkilotlarining axborot xizmatlari bilan
              samarali va amaliy hamkorlikni ta’minlash;
            </li>
            <li>
              Keng jamoatchilikni Filial faoliyati, sohaga doir normativ-huquqiy
              xujjatlar to‘g‘risida holisona, sifatli va tezkor habardor qilish,
              ommaviy axborot vositalari bilan hamkorlik o‘rnatish, doimiy
              hamkorlikda ishlaydigan jurnalistlar doirasini shakllantirish,
              axborot xabarlarini tarqatish;
            </li>
            <li>
              Filial tarkibidagi belgilangan bo‘limlar hodimlari bilan
              birgalikda milliy va xorijiy OAVda elon qilish uchun xabar,
              axborot-ma’lumot materiallar, sharxlar hamda axborot-taxliliy
              materiallar tayyorlash;
            </li>
            <li>
              Filial faoliyatiga nisbatan jamoatchilik fikrining holati hamda
              OAV pozitsiyasini tahlil qilish va ular to‘g‘risida institut
              direktoiga axborot berish;
            </li>
            <li>
              Filialning faoliyat sohasiga aloqador matnli, foto, audio va video
              materiallarning ma’lumotlar bazasini shakllantirish va yuritish
              ishlarini amalga oshiradi.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kadrlar;
