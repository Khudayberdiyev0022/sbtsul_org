import React, { useState } from "react";
import style from "../../components/Contact/Contact1.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail, MdLocationOn } from "react-icons/md";
import { addProduct } from '../../actions'
import { connect } from 'react-redux'


const Contact1 = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surName, setSurName] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    props.addProduct('messages', { name: `${name} ${surName}`, paragraph: message, email: email })
    setName("");
    setEmail("");
    setSurName("");
    setMessage("");
  };

  return (
    <div className={style.main}>
      <div className={style.inMain}>
        <div className={style.top}>
          <div className={style.inTop}>
            <div className={style.icon}>
              <MdLocationOn />{" "}
            </div>
            <div className={style.infoTop}>
              <h3>Наш адресс:</h3>
              <p>г.Ташкент, ул.Риксилий, 9</p>
            </div>
          </div>
          <div className={style.inTop}>
            <div className={style.icon}>
              {" "}
              <FaPhoneAlt />{" "}
            </div>
            <div className={style.infoTop}>
              <h3>Телефон:</h3>
              <a
                href="tel://+998 71 207 03 78"
                rel="noreferrer"
                target="_blank"
              >
                +998 71 207 03 78
              </a>
            </div>
          </div>
          <div className={style.inTop}>
            <div className={style.icon}>
              <MdMail />{" "}
            </div>
            <div className={style.infoTop}>
              <h3>Электронная почта</h3>
              <a href="mailto:info@sbtsul.uz" rel="noreferrer" target="_blank">
                info@sbtsul.uz
              </a>
            </div>
          </div>
        </div>
        <div className={style.flex}>
          <div className={style.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.0434755864935!2d69.26968392479239!3d41.37314014827015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cc35f730131%3A0xabfc68fc1c7bbde4!2z0K7QvdGD0YHQsNCx0LDQtC03LCDQotCw0YjQutC10L3RgiAxMDAxOTAsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1619079284992!5m2!1sru!2s"
              title="maps"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
            />
          </div>
          <div className={style.inputDiv}>
            <h2>Свяжитесь с нами</h2>
            <form onSubmit={submit}>
              <input
                type="text"
                placeholder="Ваше имя"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="
                  Ваша фамилия"
                name="site"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Электронная почта"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <textarea
                name="message"
                value={message}
                placeholder="Ваша цель связаться с нами"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Отправить сообщение</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addProduct })(Contact1);
