import React, { useEffect } from "react";
import style from "../../components/Vacansiec/Vakansiya.module.css";
import { BsCloudDownload } from "react-icons/bs";
import docx from "../../components/Data/Ariza namuna tanlovga.docx";
import doc from "../../components/Data/Vakansiya.doc";
import document from "../../components/Data/Taxminiy savollar.docx";
import { fetchVacancysProducts } from "../../actions";
import { connect } from "react-redux";

const VakansiyaRus = (props) => {
  useEffect(() => {
    props.fetchVacancysProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.titleText}>
          <h3>Ishga marhamat!!!</h3>
          <p>
            Toshkent davlat yuridik universitetining Ixtisoslashtirilgan filiali
            malakali mutaxassislarni quyidagi mutaxassiliklar boʼyicha ishga
            taklif etadi. Ishga qabul qilish tanlov asosida amalga oshiriladi.
            Boʼsh ish oʼrinlari va tanlov haqida quyida batafsil tanishishingiz
            mumkin.
          </p>
          <p>2021 yil 10 aprel №2-son</p>
          <div className={style.footer}>
            <p>
              TDYU Ixtisoslashtirilgan filiali boʼsh ish oʼrinlariga malakali
              kadrlarni ishga taklif qiladi 15.04.2021y
              <span className={style.btn}>
                <a href={doc} rel="noreferrer" download>
                  (doc) faylni yuklab olish
                  <BsCloudDownload />
                </a>
              </span>
            </p>
          </div>
          <div className={style.footer}>
            <p>
              TDYU Ixtisoslashtirilgan filiali nomozdlar uchun suhbat vaqtidagi
              taxminiy savollar ro'yhati 15.04.2021y
              <span className={style.btn}>
                <a href={document} rel="noreferrer" download>
                  (docx) faylni yuklab olish
                  <BsCloudDownload />
                </a>
              </span>
            </p>
          </div>
          <div className={style.footer}>
            <p>
              TDYU Ixtisoslashtirilgan filiali tanlovda ishtirok etish
              to'g'risidagi namunani ushbu havola orqali yuklab olishingiz
              mumkin.
              <span className={style.btn}>
                <a href={docx} rel="noreferrer" download>
                  (docx) faylni yuklab olish
                  <BsCloudDownload />
                </a>
              </span>
            </p>
          </div>
        </div>

        {props.vacancys?.map((api, index) => {
          return (
            <div className={style.card} key={index}>
              <h3>{api.titleUzb}</h3>
              <div className={style.job}>
                <h3>{api.subTitleUzb}</h3>
                <h3>
                  <span> З/П:</span> {api.costUzb} <span>so'm</span>
                </h3>
              </div>
              <p>{api.paragraphUzb}</p>
            </div>
          );
        })}
        <div className={style.vakantJobs}>
          <h5>Ish sharoiti</h5>
          <ul>
            <li>
              Filial xodimlarga kasbiy va lavozim boʼyicha oʼsish (karьera)
              imkonini beradi;
            </li>
            <li>
              Аdliya organlari xodimlariga beriladigan maxsus unvon – martaba
              daraja (chin)lariga tavsiya etish;
            </li>
            <li>
              Lavozim maoshlariga ustama va qoʼshimcha haq (martaba darajalari
              uchun 20-50 % gacha, adliya organlari tizimida uzoq muddat xizmat
              koʼrsatganligi uchun 5-40 % gacha) mavjudligi;
            </li>
            <li>
              Mehnatni moddiy ragʼbatlantirish tizimining mavjudligi (xodimning
              lavozim maoshiga 200 % gacha ustama haq, mukofotlar);
            </li>
            <li>Ish haqi hajmi mehnat shartnomasi bilan belgilanadi.</li>
            <li>
              Nomzodlar: tanlov uchun ariza shaxsiy maʼlumotnoma (obʼektivka),
              diplom nusxasi, pasport nusxasini e-mail:
              <a
                href="mailto://kadr@sbtsul.uz"
                rel="noreferrer"
                target="_blank"
              >
                kadr@sbtsul.uz
              </a>
              elektron pochtasiga taqdim etishlari lozim.
            </li>
            <li>
              {" "}
              <strong>
                Аriza va tegishli hujjatlar 2021 yil 25 aprel kuni soat 18:00 ga
                qadar qabul qilinadi.
              </strong>{" "}
            </li>
            <li>
              Maʼlumotnomada nomzodning yashash manzili, mobilь telefon
              raqamlari va elektron pochta manzili toʼgʼrisidagi maʼlumotlar ham
              koʼrsatilishi kerak. Batafsil maʼlumot:
              <a href="tel://+998909442962" rel="noreferrer" target="_blank">
                +998 90 944 29 62
              </a>
            </li>
            <li>
              Tanlov tartibi buzilgan taqdirda yoki korruptsiya holatlari yuz
              berganda bu haqda Аdliya vazirligining
              <a href="tel://1008" rel="noreferrer" target="_blank">
                “1008”
              </a>
              ishonch telefoniga,
              <a
                href="https://minjust.uz/uz/anticorruption/feedback/"
                rel="noreferrer"
                target="_blank"
              >
                @antikorbot
              </a>
              telegram kanaliga hamda Filialning
              <a href="tel://+998712070378" rel="noreferrer" target="_blank">
                +998 71 207 03 78
              </a>{" "}
              ishonch telefoniga murojaat qilishingiz mumkin.
            </li>
            <h5>Saralash jarayoni quyidagi bosqichlarda oʼtkaziladi:</h5>
            <p>1.Hujjatlar qabuli;</p>
            <p>2.Arizalar va hujjatlarni o'rganish;</p>
            <p>3.Test sinovlarini o'tkazish;</p>
            <p>4.Suhbat</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    vacancys: state.productsVacancys[0],
  };
};

export default connect(mapStateToProps, { fetchVacancysProducts })(VakansiyaRus);
