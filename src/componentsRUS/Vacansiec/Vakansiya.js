import React, { useEffect } from "react";
import style from "./Vakansiya.module.css";
import { BsCloudDownload } from "react-icons/bs";
import docx from "../../components/Data/Ariza namuna tanlovga.docx";
import doc from "../../components/Data/Vakansiya.doc";
import { fetchVacancysProducts } from '../../actions'
import { connect } from 'react-redux'

const VakansiyaRus = (props) => {
  useEffect(() => {
    props.fetchVacancysProducts()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.titleText}>
          <h3>Добро пожаловать на работу!!!</h3>
          <p>
            Специализированный филиал Ташкентского государственного юридического
            университета нанять квалифицированных специалистов по следующим
            специальностям предложения. Набор осуществляется на конкурсной
            основе. Узнайте больше о вакансиях и конкурсах ниже возможный.
          </p>
          <p>2021 год 10 апрель №2</p>
          <div className={style.footer}>
            <p>
              Ташкентский Государственный Юридический Университет
              Специализированный Филиал приглашает квалифицированный персонал
              для заполнения вакансий. делает
              <span className={style.btn}>
                <a href={doc} rel="noreferrer" download>
                  (doc) скачать файл
                  <BsCloudDownload />
                </a>
              </span>
            </p>
          </div>
        </div>

        {props.vacancys?.map((api, index) => {
          return (
            <div className={style.card} key={index}>
              <h3>{api.titleRus}</h3>
              <div className={style.job}>
                <h3>{api.subTitleRus}</h3>
                <h3>
                  <span> З/П:</span> {api.costRus} <span>so'm</span>
                </h3>
              </div>
              <p>{api.paragraphRus}</p>
            </div>
          );
        })}
        <div className={style.vakantJobs}>
          <h5>Условия труда</h5>
          <ul>
            <li>
              Филиал предоставляет сотрудникам возможности профессионального и
              карьерного роста (карьерного роста).;
            </li>
            <li>
              Рекомендации к присвоению специальных званий (званий) работникам
              судебной системы;
            </li>
            <li>
              Наличие надбавок и надбавок (до 20-50% для карьерных уровней, до
              5-40% при выслуге в судебной системе);
            </li>
            <li>
              Наличие системы материального стимулирования (премии до 200% от
              заработной платы сотрудника, бонусы);
            </li>
            <li>Размер заработной платы определяется трудовым договором..</li>
            <li>
              {" "}
              Кандидатам: для участия в конкурсе необходимо предоставить личную
              справку (линзу), копию диплома, копию паспорта на электронную
              почту:{" "}
              <a
                href="mailto://kadr@sbtsul.uz"
                rel="noreferrer"
                target="_blank"
              >
                kadr@sbtsul.uz
              </a>
            </li>
            <li>
              {" "}
              <strong>
                Заявление и сопутствующие документы должны быть получены до 18:00 25 апреля 2021 года.
                принято пока.
              </strong>{" "}
            </li>
            <li>
              В справке указан адрес кандидата, мобильный телефон.
              номера и адреса электронной почты
              следует указать. Учить больше:
              <a href="tel://+998909442962" rel="noreferrer" target="_blank">
                +998 90 944 29 62
              </a>
            </li>
            <li>
              В случае нарушения процедуры отбора или коррупции
              Министерства юстиции
              <a href="tel://1008" rel="noreferrer" target="_blank">
                “1008”
              </a>
              служба доверия,
              <a
                href="https://minjust.uz/uz/anticorruption/feedback/"
                rel="noreferrer"
                target="_blank"
              >
                @antikorbot
              </a>
              телеграмм канал и филиал
              <a href="tel://+998712070378" rel="noreferrer" target="_blank">
                +998 71 207 03 78
              </a>{" "}
              вы можете связаться с горячей линией.
            </li>
            <h5>Процесс отбора осуществляется в следующие этапы:</h5>
            <p>1.Прием документов;</p>
            <p>2.Изучение заявлений и документов;</p>
            <p>3.Проведение тестов;</p>
            <p>4.Беседа</p>
          </ul>
        </div>
        <div className={style.footer}>
          <p>
            Участвуйте в конкурсе Специализированного филиала ТГЮУ.
            Вы можете скачать образец по этой ссылке.
            <span className={style.btn}>
              <a href={docx} rel="noreferrer" download>
                (docx) faylni yuklab olish
                <BsCloudDownload />
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    vacancys: state.productsVacancys[0]
  }
}


export default connect(mapStateToProps, { fetchVacancysProducts })(VakansiyaRus);
