import React from "react";
import style from "../../../components/Filial/Components/Filial1.module.css";
import pdf from "../../../components/Data/УСТАВ ФИЛИАЛ Назорат режа 1-банд.pdf";
import bg from "../../../assets/img/branch2.webp";
import { BsCloudDownload } from "react-icons/bs";

const Filial1 = () => {
  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.flex}>
          <div
            className={style.img}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className={style.text}>
            <h3>
              ПОСТАНОВЛЕНИЕ ПРЕЗИДЕНТА РЕСПУБЛИКИ УЗБЕКИСТАН О ДОПОЛНИТЕЛЬНЫХ
              МЕРАХ ПО СОВЕРШЕНСТВОВАНИЮ СИСТЕМЫ ПОДГОТОВКИ КАДРОВ В СФЕРЕ
              ПРОФИЛАКТИКИ ПРАВОНАРУШЕНИЙ И ОБЕСПЕЧЕНИЯ ОБЩЕСТВЕННОЙ
              БЕЗОПАСНОСТИ
            </h3>
            <p>
              По инициативе Президента Республики Узбекистан от 7 февраля 2019
              года было принято Постановление № ПП-4166 в целях дальнейшего
              повышения эффективности подготовки и переподготовки кадров в сфере
              профилактики правонарушений и обеспечения общественной
              безопасности в городе Ташкенте и Ташкентской области.
            </p>
            <p>Основными задачами филиала являются:</p>
            <ul>
              <li>
                подготовка и переподготовка кадров в сфере профилактики
                правонарушений и обеспечение общественной безопасности на основе
                учебных планов и программ;
              </li>
              <li>
                обеспечивающих базовую и практическую профессиональную
                подготовку в сфере юриспруденции;
              </li>
              <li>
                организация учебного процесса на основе модульной системы
                обучения с применением современных форм и методов,
                информационно-коммуникационных технологий, направленных на
                обеспечение тесной связи теоретической подготовки с
                правоприменительной деятельностью
              </li>
              <li>
                создание эффективной системы психологической подготовки,
                повышения правовой, политической культуры и правосознания
                обучающихся
              </li>
              <li>
                совершенствование навыков обучающихся по работе и взаимодействию
                с населением и средствами массовой информации
              </li>
              <li>
                методологическое и консультативное обеспечение деятельности по
                профилактике правонарушений и обеспечению общественной
                безопасности
              </li>
              <li>
                углубление эффективного межведомственного взаимодействия с
                образовательными и научно-исследовательскими учреждениями, в том
                числе зарубежных стран, осуществляющими подготовку,
                переподготовка и повышение квалификации юридических кадров.
              </li>
            </ul>
            <div className={style.footer}>
              <p>
                По следующей ссылке находится устав Специализированного филиала
                ТГЮУ. Вы можете скачать здесь
                <span className={style.btn}>
                  <a href={pdf} rel="noreferrer" download>
                    Загрузите файл в формате pdf
                    <BsCloudDownload />
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filial1;
