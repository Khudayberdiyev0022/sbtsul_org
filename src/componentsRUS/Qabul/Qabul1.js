import React from "react";
import style from "./Qabul1.module.css";
import { BsCheckBox } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";
import { BsExclamationTriangle } from "react-icons/bs";

const Qabul1 = () => {
  return (
    <div className={style.main}>
      <div className={`container ${style.container}`}>
        <h5 className={style.title}>
        Для участия в конкурсе необходимо предоставить следующие документы:
        </h5>
        <p>
          <BsCheckBox /> личный листок кандидата (анкета, анкета или справка-объективка);
        </p>
        <p>
          <BsCheckBox /> faoliyat koʼrsatayotgan (oxirgi) ish joyidan (oʼqish
          joyidan) maʼlumotnoma (agar egallab turgan lavozimidan ozod qilingan
          boʼlsa tegishli buyruq nusxasi) va tavsifnoma;
        </p>
        <p>
          <BsCheckBox />
          копия диплома (выписка из диплома), если вы учились за границей,
            свидетельство о прохождении нострификации диплома, высшее
          или выпускник средних специальных, профессиональных учебных заведений
          за исключением обучающихся на курсах;{" "}
        </p>
        <p>
          <BsCheckBox /> nomzodning pasport nusxasi;
        </p>
        <h5 className={style.title}>
        Кандидаты, изъявившие желание участвовать в конкурсе, имеют право
        документы Ташкентского государственного юридического университета
        специализированный филиал должен быть передан в отдел кадров;
        </h5>

        <h3 className={style.h3one}>Ish sharoiti:</h3>
        <li>
          {" "}
          Филиал предоставляет работникам возможность профессионального и карьерного роста дает;
        </li>
        <li>
        Зарубежные командировки, стажировки и курсы повышения квалификации с целью изучения зарубежного опыта;
        </li>
        <li>
          {" "}
          Рекомендация к присвоению специальных званий – чинов (званий), присваиваемых сотрудникам органов юстиции;
        </li>
        <li>
        Наличие надбавок и доплат к должностным окладам (до 20-50 % для карьерных степеней, 5-40% за выслугу лет) ;
        </li>
        <li>
        Наличие системы материального стимулирования труда (надбавки до 200% к должностному окладу работника, премии);
        </li>
        <li>Размер заработной платы определяется трудовым договором.</li>

        <h3 className={style.h3}>Особые требования:</h3>
        <p>
          <RiUserVoiceLine /> навыки устной и письменной речи;
        </p>
        <p>
          <RiUserVoiceLine /> поощряется знание русского и английского языков.
        </p>
        <h3 className={style.h3danger}>
        В соответствии с Положением о порядке работы с кадрами в органах и учреждениях юстиции не могут быть приняты на работу в органы и учреждения юстиции следующие лица:
        </h3>
        <p>
          <BsExclamationTriangle /> Лица, не являющиеся гражданами Республики Узбекистан;

        </p>
        <p>
          <BsExclamationTriangle /> лица, не достигшие шестнадцатилетнего возраста;
        </p>
        <p>
          <BsExclamationTriangle /> лица, признанные в установленном порядке недееспособными или ограниченно дееспособными;
        </p>
        <p>
          <BsExclamationTriangle /> лица, имеющие непогашенную или непогашенную судимость за умышленное преступление;
        </p>
        <p>
          <BsExclamationTriangle /> лица, ранее уволенные в установленном порядке с прежнего места работы за совершение деяний, не совместимых с их профессиональной деятельностью;
        </p>
        <p>
          <BsExclamationTriangle /> производство органа или учреждения юстиции
          при наличии близкого родственника или куды-Анда с работником (родители,
          братья, сестры, дети, супруги, а также
          родители, братья, сестры супругов и
          дети), если вы принимаете на работу или назначаете
          положение, при котором один из них непосредственно подчиняется другому или его
          требует обслуживания под наблюдением;
        </p>
        <p>
          <BsExclamationTriangle /> поддельные документы или документы для поступления на работу
 в случае предоставления ложной информации;
        </p>
        <p>
          <BsExclamationTriangle /> иные, установленные законодательством
          случаи.
        </p>
      </div>
    </div>
  );
};

export default Qabul1;