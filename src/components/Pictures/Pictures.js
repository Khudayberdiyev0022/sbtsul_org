import React, { useEffect, useState } from "react";
import style from "./Pictures.module.css";
import { ModalPicture } from "../../actions";
import { connect } from "react-redux";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Fragment } from "react";
import { fetchImagesProducts } from "../../actions";

function Pictures(props) {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    props.fetchImagesProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {modal && (
        <div className={style.mainmodal}>
          {modal && (
            <div className={style.modalmodal}>
              <AiOutlineCloseSquare onClick={() => setModal(false)} />
              <div
                className={style.imgmodal}
                style={{
                  backgroundImage: `url(http://sbtsul1.pythonanywhere.com${props.img.image})`,
                }}
              ></div>
            </div>
          )}
        </div>
      )}
      <div className={style.main}>
        <h1>Fotolavhalar</h1>
        <div className={style.container}>
          {props.pictures?.map((image, index) => {
            return (
              <div
                key={index}
                className={style.box}
                onClick={() => {
                  props.ModalPicture(image);
                  setModal(true);
                }}
              >
                <img
                  src={`http://sbtsul1.pythonanywhere.com${image.image}`}
                  alt="imagess"
                />
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    img: state.modalPicture,
    pictures: state.productsImages[0],
  };
};

export default connect(mapStateToProps, { ModalPicture, fetchImagesProducts })(
  Pictures
);
