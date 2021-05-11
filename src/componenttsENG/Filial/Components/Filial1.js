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
            {/* <Roll right cascade> */}
            <h3>
              OF THE PRESIDENT OF THE REPUBLIC OF UZBEKISTAN <br /> 7 FEBRUARY
            2019 RESOLUTION No. PQ-4166 OF THE YEAR
          </h3>
            {/* </Roll> */}
            {/* <Bounce right cascade> */}
            <p>
              On the initiative of the President of the Republic of Uzbekistan No. PP-4166 dated February 7, 2019
              in accordance with the decision of the city of Tashkent and Tashkent region
              crime prevention and public safety
              the effectiveness of training and retraining in the field
              Tashkent State Law University in order to further increase
              A specialized branch was established and operated
              has been doing.
          </p>
            <p>The main tasks of the branch are:</p>
            {/* </Bounce> */}
            {/* <Bounce right cascade> */}
            <ul>
              <li>
                basic and practical professional in the field of jurisprudence
                training curricula and
                crime prevention and community based programs
                training and retraining in the field of security
                preparation;
            </li>
              <li>
                theoretical training is integral to law enforcement activities
                modern form and
                methods, using information and communication technologies
                based on a modular system of teaching the learning process in the case
                to establish;
            </li>
              <li>
                psychological training of students, legal, political
                an effective system of raising culture and legal awareness
                Create;
            </li>
              <li>
                with the population and the media of learners
                performance and collaboration skills
                improvement;
            </li>
              <li>
                with the population and the media of learners
                performance and collaboration skills
                improvement;
            </li>
              <li>
                crime prevention and public safety
                methodological and advisory activities to ensure
                to provide;
            </li>
              <li>
                training, retraining and qualification of legal personnel
                education and research, which is to increase
                including interactions with institutions in foreign countries
                deepening effective interagency cooperation
                marked.
            </li>
            </ul>
            {/* </Bounce> */}
            {/* <Bounce right cascade> */}
            <div className={style.footer}>
              <p>
                The charter of the Specialized Branch of TSU is available at the following link
                you can download.
              <span className={style.btn}>
                  <a href={pdf} rel="noreferrer" download>
                    Download the pdf file
                  <BsCloudDownload />
                  </a>
                </span>
              </p>
            </div>
            {/* </Bounce> */}
          </div>
        </div>
      </div>
    </div>







  );
};

export default Filial1;
